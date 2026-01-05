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
            className="relative xl:px-36 lg:px-20 md:px-10 px-4 grid lg:grid-cols-2 md:grid-cols-1 md:gap-10 gap-6 pb-10 pt-20 overflow-hidden"
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
                <p className="flex w-fit items-center justify-center px-4 py-2 gap-1 bg-emerald-50 my-4 rounded-full">
                    <FaCircle className="text-emerald-500 animate-pulse" size={10} />
                    <span className="text-emerald-800 font-medium md:text-sm">Available for work</span>
                </p>

                <h1 id="hero-heading" className="inline-block font-bold lg:text-7xl text-5xl">
                    Creative
                    <span className="block bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                        Software Engineer
                    </span>
                    <span className="block">
                        & <span className="italic">Problem</span>
                    </span>
                    Solver
                </h1>

                <p className="inline-block my-8 md:text-lg text-normal font-medium text-gray-600 md:tracking-wide tracking-tight md:font-normal">
                    Crafting elegant solutions to complex problems. Specialized in building exceptional
                    digital experiences that combine beautiful design with powerful functionality.
                </p>

                <div className="flex gap-x-8 items-center">
                    <Link href="#experience" className="py-4 px-8 md:py-3 md:px-6 font-semibold rounded-md bg-gray-900 text-lg text-gray-200 transform transition-transform duration-200 hover:scale-105">
                        View Projects
                    </Link>
                    <Link href="#contact" className="flex justify-center items-center gap-1 font-semibold text-lg">
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
                            src={profileImg && profileImg["profile_img"]}
                            alt="Portrait"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Code speech bubble */}
                <div className="absolute lg:top-48 lg:right-10 md:top-10 md:right-20 hidden md:block rounded-2xl bg-white shadow-lg shadow-slate-900/20 px-4 py-2 text-sm font-mono">
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
