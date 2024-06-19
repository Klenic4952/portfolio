"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: [""] // Adjust this value to determine when a section is considered "active"
    });

    const sections = document.querySelectorAll("main section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [])
  
  return (
    <nav class="lg:block">
      <ul class="mt-16 w-max">
        <li>
          <Link href="#about" passHref class= "group flex items-center py-3" className={`${activeSection === "about" ? "font-bold" : ""}`}>
            <span class="group-hover:font-bold">OVER MIJ</span>
          </Link>
        </li>
        <li class="hover:font-bold">
          <Link href="#projects" class="group flex items-center py-3" className={`${activeSection === "projects" ? "font-bold" : ""}`}>
            <span class="group-hover:font-bold">PROJECTEN</span>
          </Link>
        </li>
        <li class="hover:font-bold">
          <Link href="#experience" class="group flex items-center py-3 active" className={`${activeSection === "experience" ? "font-bold" : ""}`}>
            <span class="group-hover:font-bold">WERKERVARING</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
