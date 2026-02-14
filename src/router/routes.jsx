import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllModels from "../Pages/AllModels/AllModels";
import AddModels from "../Pages/AddModels/AddModels";
import ModelDetails from "../Pages/ModelDetails/ModelDetails";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";
import MyPurchases from "../Pages/MyPurchases/MyPurchases";
import MyModels from "../Pages/MyModels/MyModels";
import Error from "../Pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/models",
        element: <AllModels />,
      },
      {
        path: "/add-models",
        element: <AddModels />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/models/:id",
        element: (
          <PrivateRoute>
            <ModelDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-models",
        element: <MyModels />,
      },
      {
        path: "/purchases",
        element: <MyPurchases />,
      },
      {
        path: "/update-model/:id",
        element: <UpdateModel />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
