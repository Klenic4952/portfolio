"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  
  
  return (
    <nav className="lg:block">
      <ul className="mt-16 w-max">
        <li>
          <Link href="#about" passHref className="group flex items-center py-3" >
            <span className="group-hover:font-bold">OVER MIJ</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link href="#projects" className="group flex items-center py-3" >
            <span className="group-hover:font-bold">PROJECTEN</span>
          </Link>
        </li>
        <li className="hover:font-bold">
          <Link href="#experience" className="group flex items-center py-3 active" >
            <span className="group-hover:font-bold">WERKERVARING</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
