import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Experience from "./components/experience";


export default function HomePage() {
    return (
        <main>
            <Hero />
            <About />
            <Experience />
            <Services />
            {/* <Projects /> */}
            <Skills />
            <Contact />
        </main>
    );
}

