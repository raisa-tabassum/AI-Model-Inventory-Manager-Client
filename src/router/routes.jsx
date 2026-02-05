import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllModels from "../Pages/AllModels/AllModels";
import AddModels from "../Pages/AddModels/AddModels";
import Profile from "../Pages/Profile/Profile";

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
        path: "/all-models",
        element: <AllModels />,
      },
      {
        path: "/add-models",
        element: <AddModels />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
