import { useState, useEffect } from "react";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { Input } from "../components/Input";
import searchSvg from "../assets/search.svg";
import { Button } from "../components/Button";
import { CATEGORIES } from "../utils/Categories";
import { Pagination } from "../components/Pagination";
import { formatCurrency } from "../utils/formatCurrency";
import { RefundItem, RefundItemProps } from "../components/RefundItem";

const PER_PAGE = 5;

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalPage] = useState(0);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([]);

  async function fetchRefund() {
    try {
      const response = await api.get<RefundsPaginationAPIResponse>(
        `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`
      );

      //console.log(response.data);

      setRefunds(
        response.data.refund.map((refund) => ({
          id: refund.id,
          name: refund.user.name,
          description: refund.name,
          amount: formatCurrency(refund.amount),
          categoryImg: CATEGORIES[refund.category].icon,
        }))
      );

      setTotalPage(response.data.pagination.totalPages);
    } catch (error) {
      console.log(error);

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      alert("Nao foi possivel carregar");
    }
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPage) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

  useEffect(() => {
    fetchRefund();
  }, []);

  return (
    <div className=" bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefund}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Icone de busca" className="w-5" />
        </Button>
      </form>
      <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        {refunds.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>

      <Pagination
        current={page}
        total={totalOfPage}
        onNext={() => handlePagination("next")}
        onPrevius={() => handlePagination("previous")}
      />
    </div>
  );
}
