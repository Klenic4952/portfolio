import Link from "next/link";

export default function Navbar() {
  return (
    <nav class=" lg:block" aria-label="In-page-jump-links">
      <ul class="mt-16 w-max">
        <li>
          <Link href="#about" class="group flex items-center py-3 active">
           ABOUT
          </Link>
        </li>
        <li>
          <Link href="#projects" class="font-bold">
            PROJECTS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
