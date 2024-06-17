// app/home.jsx is the UI for the '/' URL

import About from "./about/page";
import Experience from "./experience/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main id="content" class="pt-24 lg:w-1/2 lg:py-24">
      <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"aria-label="over mij">
        <About />
      </section>
      <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"aria-label="projecten">
        <Projects />
      </section>
      <section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"aria-label="werkervaring">
        <Experience/>
      </section>
    </main>
  );
}
