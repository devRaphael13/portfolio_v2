import Link from "next/link";
import Hero from "./components/hero";
import Image from "next/image";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";


export default function HomePage() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}

