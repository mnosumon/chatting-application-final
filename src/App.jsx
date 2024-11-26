import React from "react";
import Registration from "./pages/registration/Index";
import Login from "./pages/login/Index";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RouteLayout from "./routeLayout";
import Home from "./pages/home/Index";
import Message from "./pages/message/Index";
import LoginUser from "./privetRoute/LoginUser";
import LogoutUser from "./privetRoute/LogoutUser";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoginUser />}>
          <Route element={<RouteLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/message" element={<Message />} />
          </Route>
        </Route>
        <Route element={<LogoutUser />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
