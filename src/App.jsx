import React from "react";
import Registration from "./pages/registration/Index";
import Login from "./pages/login/Index";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* <Route path="/registration" element={<Registration />} /> */}
      </Route>
    )
  );
  return (
    <>
      {/* <RouterProvider router={router} />{" "} */}
      <div className="w-full">
        <Registration />{" "}
      </div>
    </>
  );
};

export default App;
