import Navbar from "./Navbar";

export default function Header() {
  return (
    <div class="flex flex-col max-w-96">
      <h1 class="mb-3">Nicolien Klein</h1>
      <h2 class="text-midpurple text-2xl mb-4">Junior Front-End Developer</h2>
      <p class="text-lg">Pioneering with this portfolio, build with next.js.</p>

      <Navbar />
    </div>
  );
}
