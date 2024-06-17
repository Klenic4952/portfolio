import Link from "next/link";

export default function Navbar() {
  return (
    <nav class=" lg:block" aria-label="In-page-jump-links">
      <ul class="mt-16 w-max">
        <li class="hover:font-bold">
          <Link href="#about" class="group flex items-center py-3 active">
            OVER MIJ
          </Link>
        </li>
        <li class="hover:font-bold">
          <Link href="#projects" class="group flex items-center py-3 active">
            PROJECTEN
          </Link>
        </li>
        <li class="hover:font-bold">
          <Link href="#experience" class="group flex items-center py-3 active">
            WERKERVARING
          </Link>
        </li>
      </ul>
    </nav>
  );
}
