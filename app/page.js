import { Experience, Project } from "./card.jsx";
import { AllSkills } from "./skills.jsx";
import { FaLink } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Home() {
    return (
        <main className="flex gap-y-14">
            <section className="w-1/2">
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Raphael Ezeigwe</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Fullstack Developer</h2>
                <p className="mt-4 max-w-xs leading-normal">I Craft Seamless Digital Experiences from Front to Back.</p>

                <a href="" className="hover:drop-shadow-glow w-max font-bold mt-4 block text-teal-400">
                    Download Résumé <FaLink className="inline-block" />
                </a>
                <AllSkills/>
                <div className="flex max-w-3/4 gap-x-8 mt-28">
                    <a className="hover:drop-shadow-glow text-teal-400">
                        <BsLinkedin className="w-6 h-6" />
                    </a>
                    <a className="hover:drop-shadow-glow text-teal-400">
                        <IoLogoGithub className="w-6 h-6" />
                    </a>
                    <a className="hover:drop-shadow-glow text-teal-400">
                        <IoMail className="w-6 h-6" />
                    </a>
                    <a className="hover:drop-shadow-glow text-teal-400">
                        <IoLogoWhatsapp className="w-6 h-6" />
                    </a>
                </div>
            </section>

            {/* Content */}

            <section className="w-1/2 flex flex-col gap-y-28">
                <div id="about" className="flex flex-col gap-y-4 ">
                    <p className="leading-normal">
                        Hey there! I'm a <span className="text-slate-200">full stack developer</span> who jumped into the tech scene in 2020, right when the world was shifting gears into the digital
                        space. It’s been an exciting journey so far—I've dabbled in everything from crafting sleek <span className="text-slate-200">user interfaces</span> to building{" "}
                        <span className="text-slate-200">robust back-end</span> systems.
                    </p>
                    <p className="leading-normal">
                        I love the blend of <span className="text-slate-200">creativity and logic</span> that comes with the territory, and I’ve spent countless hours mastering frameworks and
                        languages that help bring ideas to life. Whether I'm working on a personal project or <span className="text-slate-200">collaborating</span> with a team, I'm all about creating{" "}
                        <span className="text-slate-200">seamless experiences</span> that keep users engaged.
                    </p>
                    <p className="leading-normal">
                        When I’m not coding, you’ll probably find me exploring the latest tech trends or trying to gain more connections on{" "}
                        <a href="https://www.linkedin.com/in/raphaelezeigwe/" className="text-slate-200 hover:text-teal-400">
                            LinkedIn.
                        </a> Let’s connect and build something awesome together!.
                    </p>
                </div>

                <div>
                    <div id="experiences" className="flex flex-col gap-y-1">
                        {/* Experiences */}
                        <h2 className="text-2xl mb-2 font-bold text-slate-500">Experiences</h2>
                        <Experience />
                    </div>
                    <a className="hover:drop-shadow-glow text-md font-bold mt-6 block text-teal-400" href="">
                        View Work History <FaLink className="inline-block" />
                    </a>

                    <div id="projects" className="flex flex-col gap-y-1 mt-28">
                        {/* Projects  */}
                        <h2 className="text-2xl mb-2 font-bold text-slate-500">Projects</h2>
                        <Project />
                        <Project />
                        <Project />
                        <Project />
                        <a className="hover:drop-shadow-glow text-md font-bold mt-6 block text-teal-400" href="">
                            View Project Archive <FaLink className="inline-block" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
