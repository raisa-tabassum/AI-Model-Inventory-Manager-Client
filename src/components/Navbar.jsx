import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/aim-inventory.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-xl font-semibold text-[#105e63] ${isActive ? "nav-link-active" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-models"
          className={({ isActive }) =>
            `text-xl font-semibold text-[#105e63] ${isActive ? "nav-link-active" : ""}`
          }
        >
          Add Model
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-models"
          className={({ isActive }) =>
            `text-xl font-semibold text-[#105e63] ${isActive ? "nav-link-active" : ""}`
          }
        >
          All Models
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar mx-w-6xl bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-3xl text-[#36abad] font-bold flex justify-center gap-1">
          <img src={logo} className="w-10" alt="AIM Inventory" />
          AIM Inventory
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-gradient">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
