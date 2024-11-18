import Link from "next/link";
import NavBar from "./NavBar";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 pl-3 pt-2 pb-4 w-full z-50 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg: justify-between lg:py-24 bg-beige">
      <div className="p-4 lg:p-0">
        <h1 className="mb-3">
          <Link href="/">Nicolien Klein</Link>
        </h1>
        <h2 className="text-midpurple text-2xl mb-4">
          Junior Front-End Developer
        </h2>
        <p className="text-[17px]">
          Op ontdekkingstocht in ICT
        </p>
        <NavBar />
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xs shrink-0">
          <a className="block" href="https://www.linkedin.com/in/nicolien-klein/" target="blank" >
            <FaLinkedin className="h-8 w-8 text-purpledark" />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a className="block" href="https://github.com/Klenic4952" target="blank" >
            <FaGithub className="h-8 w-8 text-purpledark" />
          </a>
        </li>
      </ul>
    </header>
  );
}
