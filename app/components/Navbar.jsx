"use client";
import Link from "next/link";
import useActiveSection from "../hooks/useActiveSection";
import { FaCircle } from "react-icons/fa";

const NavBar = () => {
  const activeSection = useActiveSection();

  return (
    <nav className="lg:block">
      <ul className="mt-16 w-max">
        <li>
          <Link
            href="#about"
            className={`group flex items-center py-3 ${
              activeSection === "about" ? "font-bold" : ""
            }`}
          >
            {activeSection === "about" && <FaCircle className="fill-midpurple mr-3" />}
            <span className="group-hover:font-bold">OVER MIJ</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#projects"
            className={`group flex items-center py-3 ${
              activeSection === "projects" ? "font-bold" : ""
            }`}
          >
            {activeSection === "projects" && <FaCircle className="fill-midpurple mr-3"/>}
           <span className="group-hover:font-bold">PROJECTEN</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#experience"
            className={`group flex items-center py-3 ${
              activeSection === "experience" ? "font-bold" : ""
            }`}
          >
            {activeSection === "experience" && <FaCircle className="fill-midpurple mr-3"/>}
            <span className="group-hover:font-bold">WERKERVARING</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
