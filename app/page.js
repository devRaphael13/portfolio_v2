import Container from "./container";
import { FaLink } from "react-icons/fa6";

export default function Home() {
    return (
        <main className="grid grid-cols-2">
            <section className="sticky">
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Raphael Ezeigwe</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Fullstack Developer</h2>
                <p className="mt-4 max-w-xs leading-normal">I Craft Seamless Digital Experiences from Front to Back.</p>

                <a href="" className="download-btn w-max mt-4 rounded-md block bg-teal-900 text-teal-200 px-3 py-3">Download  Résumé <FaLink className="inline-block"/></a>
                <ul className="mt-16">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Experiences</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                </ul>

                <div>{/* For the icons  */}</div>
            </section>

            {/* Content */}

            <section className="flex h-screen overflow-auto no-scrollbar flex-col gap-y-28">
                <div className="flex flex-col gap-y-4">
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
                            LinkedIn
                        </a>
                        . Let’s connect and build something awesome together!.
                    </p>
                </div>

                <div>
                    <div className="flex flex-col gap-y-1">
                        {/* Experiences */}
                        <Container is_xp={true} />
                        <Container is_xp={true} />
                        <Container is_xp={true} />
                        <Container is_xp={true} />
                    </div>
                    <a className="text-lg font-bold mt-6 block text-slate-200 hover:text-teal-400" href="">
                        View Full Résumé <FaLink className="inline-block" />
                    </a>

                    <div className="flex flex-col gap-y-1">
                        {/* Projects  */}
                        <Container />
                        <Container />
                        <Container />
                        <Container />
                    </div>
                </div>
            </section>
        </main>
    );
}
