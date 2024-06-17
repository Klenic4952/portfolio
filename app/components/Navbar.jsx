import Link from "next/link";

export default function Navbar() {
  return (
    <nav class="lg:block">
      <ul class="mt-16 w-max">
        <li>
          <Link href="#about" class="group flex items-center py-3 active">
            <span class="group-hover:font-bold">
              OVER MIJ
              </span>
          </Link>
        </li>
        <li class="hover:font-bold">
          <Link href="#projects" class="group flex items-center py-3 active">
          <span class="group-hover:font-bold">
            PROJECTEN
            </span>
          </Link>
        </li>
        <li class="hover:font-bold">
          <Link href="#experience" class="group flex items-center py-3 active">
          <span class="group-hover:font-bold">
            WERKERVARING
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
