import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg: justify-between lg:py-24">
      <div>
        <h1 class="mb-3">
          <Link href="/">Nicolien Klein</Link>
        </h1>
        <h2 class="text-midpurple text-2xl mb-4">Junior Front-End Developer</h2>
        <p class="text-lg">
          Aan het pionieren met Next.js en Tailwind om dit portfolio te creëren. 
        </p>
        <Navbar />
      </div>
    </header>
  );
}
