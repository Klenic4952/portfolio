// app/home.jsx is the UI for the '/' URL

import { Suspense } from "react";
import About from "./about/page";
import Education from "./education/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Loading from "./loading";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <Link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <Link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <Link rel="manifest" href="/site.webmanifest" />
        <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1b0f1c" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#fff1dd" />
      </Head>
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
        >
          <About />
        </section>
        <section
          id="education"
          className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
        >
          <Suspense fallback={<Loading />}>
            <Education />
          </Suspense>
        </section>
        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
        >
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        </section>
        <section
          id="contact"
          className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
        >
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        </section>
      </main>
    </>
  );
}
