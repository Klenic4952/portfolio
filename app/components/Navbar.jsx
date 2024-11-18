"use client";
import Link from "next/link";
import UseActiveSection from "../hooks/UseActiveSection";
import { FaCircle, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
  const activeSection = UseActiveSection();
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="lg:block text-lg">
      <div className="lg:hidden flex justify-between items-center py-4">
        <button
          onClick={() => setNavbar(!navbar)}
          className="text-3xl focus:outline-none"
        >
          {navbar ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul
        className={`lg:flex lg:flex-col mt-16 w-max lg:static absolute inset-0 bg-white lg:bg-transparent transform ${
          navbar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:transform-none lg:transition-none`}
      >
        <li>
          <Link
            href="#about"
            className={`group flex items-center py-3 ${
              activeSection === "about" ? "font-bold" : ""
            }`}
            onClick={() => setNavbar(false)}
          >
            {activeSection === "about" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">OVER MIJ</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#education"
            className={`group flex items-center py-3 ${
              activeSection === "education" ? "font-bold" : ""
            }`}
            onClick={() => setNavbar(false)}
          >
            {activeSection === "education" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">OPLEIDING</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#projects"
            className={`group flex items-center py-3 ${
              activeSection === "projects" ? "font-bold" : ""
            }`}
            onClick={() => setNavbar(false)}
          >
            {activeSection === "projects" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">PROJECTEN</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#experience"
            className={`group flex items-center py-3 ${
              activeSection === "experience" ? "font-bold" : ""
            }`}
            onClick={() => setNavbar(false)}
          >
            {activeSection === "experience" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">WERKERVARING</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link
            href="#contact"
            className={`group flex items-center py-3 ${
              activeSection === "contact" ? "font-bold" : ""
            }`}
            onClick={() => setNavbar(false)}
          >
            {activeSection === "contact" && (
              <FaCircle className="fill-midpurple mr-3" />
            )}
            <span className="group-hover:font-bold">CONTACT</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
