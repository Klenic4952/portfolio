// app/home.jsx is the UI for the '/' URL

import { Suspense } from "react";
import About from "./about/page";
import Education from "./education/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Loading from "./loading";

export default function Home() {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
      >
        <About />
      </section>
      <Suspense fallback={<Loading />}>
        <section
          id="education"
          className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
        >
          <Education />
        </section>
        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
        >
          <Contact/>
        </section>
      </Suspense>
    </main>
  );
}
