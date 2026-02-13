import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/routes";
import { RouterProvider } from "react-router";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
    <Toaster position="top-right"></Toaster>
  </StrictMode>,
);
