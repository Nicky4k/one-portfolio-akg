import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contactme from "@/components/Contactme";
import Footer from "@/components/Footer";
import EducationCertification from "@/components/EducationCertification";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 ">
      <Head>
        <title>Ashwini Gupta - React JS</title>
        <meta name="description" content="Portfolio, Ashwini Gupta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="educationandcertifications" className="snap-start">
        <EducationCertification />
      </section>
      <section id="contactme" className="snap-start">
        <Contactme />
      </section>
      <section id="footer" className="snap-start">
        <Footer />
      </section>
    </div>
  );
}
