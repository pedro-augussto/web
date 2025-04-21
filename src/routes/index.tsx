import { AuthRoutes } from "./AuthRoutes";
import { BrowserRouter } from "react-router";
import { EmployeRoutes } from "./EmployRoutes";
import { ManagerRoutes } from "./ManageRoutes";
import { Loading } from "../components/Loading";

const isLoading = false;

const session = {
  user: {
    role: "",
  },
};

export function Routes() {
  function Route() {
    switch (session?.user.role) {
      case "employe":
        return <EmployeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
