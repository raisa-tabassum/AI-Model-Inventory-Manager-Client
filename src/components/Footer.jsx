import React from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/aim-inventory.png";

const gitHubRepo = "https://github.com/raisa-tabassum?tab=repositories";
const X = "https://x.com/";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#105e63] text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <img src={logo} className="w-10" alt="AIM Inventory" />
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by AI
          Model Inventory Manager
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href={gitHubRepo} target="_blank" className="text-2xl">
          <FaGithub />
        </a>
        <a href={X} target="_blank" className="text-2xl">
          <FaXTwitter />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
