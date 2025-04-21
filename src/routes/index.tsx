import { useAuth } from "../hooks/useAuth";
import { AuthRoutes } from "./AuthRoutes";
import { BrowserRouter } from "react-router";
import { EmployeRoutes } from "./EmployRoutes";
import { ManagerRoutes } from "./ManageRoutes";
import { Loading } from "../components/Loading";

export function Routes() {
  const {session, isLoading} = useAuth()


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
