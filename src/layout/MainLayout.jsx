import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-blue-50">
      <div className="flex flex-col max-w-7xl mx-auto min-h-screen">
        <div className="px-3 mt-1">
          <Navbar></Navbar>
        </div>
        <div className="my-3 flex-1 px-3">
          <Outlet></Outlet>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
