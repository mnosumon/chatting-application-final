import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function LogoutUser() {
  const user = useSelector((state) => state.signUpUser.value);
  return user ? <Navigate to="/" /> : <Outlet />;
}
