import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/login/Index";

export default function LoginUser() {
  const user = useSelector((state) => state.signUpUser.value);
  return user ? <Outlet /> : <Login />;
}
