import Navbar from "./Navbar";

export default function Header() {
  return (
    <div class="flex flex-col max-w-96">
      <h1 class="text text-4xl">Nicolien Klein</h1>
      <h2>junior front-end developer</h2>
      <p>
        {`I am pioneering as a front-end developer. Having just completed my
          front-end development training at Winc Academy, this portfolio is now
          my first real "personal project".`}
      </p>

      <Navbar />
    </div>
  );
}
