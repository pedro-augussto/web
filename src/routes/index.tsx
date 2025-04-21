import { useAuth } from "../hooks/useAuth";
import { AuthRoutes } from "./AuthRoutes";
import { BrowserRouter } from "react-router";
import { EmployeeRoutes } from "./EmployRoutes";
import { ManagerRoutes } from "./ManageRoutes";
import { Loading } from "../components/Loading";

const isLoading = false;

const session = {
  user: {
    role: "",
  },
};

export function Routes() {
  const context = useAuth()
  console.log(context)

  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;
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
