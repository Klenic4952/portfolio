// app/home.jsx is the UI for the '/' URL

import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
      <section id="about" class="my-10">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </main>
  );
}
