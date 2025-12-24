import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
import { fetcher } from "../utils";

export default async function Hero() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const profileImg = await fetcher(`${baseUrl}api/profile/profile_img/`)

    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="relative px-36 grid grid-cols-2 pb-10 pt-20 overflow-hidden"
        >
            <div
                className="absolute inset-0 -z-10 pointer-events-none"
                aria-hidden="true"
            >
                <div
                    className="
                        w-full h-full
                        bg-gradient-to-br
                        from-purple-200
                        via-gray-200
                        to-purple-200
                        opacity-30
                        blur-[1px]
                        "
                    style={{
                        maskImage:
                            "radial-gradient(ellipse 110% 75% at 50% 50%, white 80%, transparent 100%)",
                    }}
                />
            </div>

            <header>
                <p className="inline-flex w-fit items-center justify-center px-4 py-2 gap-1 bg-emerald-50 my-4 rounded-full">
                    <FaCircle className="text-emerald-500 animate-pulse" size={10} />
                    <span className="text-emerald-800 font-medium">Available for work</span>
                </p>

                <h1 id="hero-heading" className="inline-block font-bold text-7xl">
                    Creative{" "}
                    <span className="block bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                        Software Engineer
                    </span>{" "}
                    <span className="block">
                        & <span className="italic">Problem</span>
                    </span>{" "}
                    Solver
                </h1>

                <p className="inline-block my-8 text-lg font-medium text-gray-600 tracking-wide">
                    Crafting elegant solutions to complex problems. Specialized in building exceptional
                    digital experiences that combine beautiful design with powerful functionality.
                </p>

                <div className="flex gap-x-8 items-center">
                    <button className="py-4 px-8 font-semibold rounded-md bg-gray-900 text-lg text-gray-200 transform transition-transform duration-200 hover:scale-105">
                        View Projects
                    </button>
                    <Link href="" className="flex justify-center items-center gap-1 font-medium text-lg">
                        Contact Me
                        <GoArrowRight size={22} strokeWidth={0.75} />
                    </Link>
                </div>
            </header>

            <figure className="relative flex items-center justify-center">
                <div className="relative">
                    {/* Gradient halo behind avatar */}
                    <div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-300 via-purple-300 to-sky-300 blur-xl opacity-70"
                        aria-hidden="true"
                    />

                    {/* Avatar circle */}
                    <div className="relative w-72 h-72 rounded-full overflow-hidden border-[6px] border-white shadow-2xl shadow-slate-900/40">
                        <Image
                            src={profileImg ? profileImg["profile_img"] : ""}
                            alt="Portrait"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Code speech bubble */}
                <div className="absolute top-48 right-10 rounded-2xl bg-white shadow-lg shadow-slate-900/20 px-4 py-2 text-sm font-mono">
                    <span className="text-slate-600">const </span>
                    <span className="text-slate-800">code</span>
                    <span className="text-slate-600"> = </span>
                    <span className="text-emerald-500">"art"</span>
                    <span className="text-slate-600">;</span>
                </div>
            </figure>
        </section>
    );
}
