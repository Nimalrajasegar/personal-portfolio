import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { Languages } from "./components/Languages";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
