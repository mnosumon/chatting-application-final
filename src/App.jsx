import React from "react";
import Registration from "./pages/registration/Index";
import Login from "./pages/login/Index";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Index";
import RouteLayout from "./routeLayout";
import Home from "./pages/home/Index";
import Message from "./pages/message/Index";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
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
