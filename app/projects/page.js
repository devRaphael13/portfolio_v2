import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import Project from "./projects";

export default function Archive() {
    return (
        <main className="w-full max-w-[1000px]">
            <div>
                <Link className="hover:drop-shadow-glow text-teal-400" href="/">
                    <IoMdArrowBack className="inline-block" />
                    Raphael Ezeigwe
                </Link>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200">Projects</h1>
            </div>
            <section>
                <Project />
            </section>
        </main>
    );
}
