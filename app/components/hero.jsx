import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { FaCircle } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative px-36 grid grid-cols-2 pb-10 pt-20 overflow-hidden">
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
                        maskImage: "radial-gradient(ellipse 110% 75% at 50% 50%, white 80%, transparent 100%)"
                    }}
                />
            </div>

            <div>
                <div className="inline-flex w-fit items-center justify-center px-4 py-2 gap-1 bg-emerald-50 my-4 rounded-full">
                    <FaCircle className="text-emerald-500 animate-pulse" size={10}/>
                    <p className="text-emerald-800 font-medium ">Available for work</p>
                </div>

                <h1 className="inline-block font-bold text-7xl">
                    Creative <span className="block bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">Software Engineer</span> <span className="block">& <span className="italic">Problem</span></span> Solver
                </h1>

                <p className="inline-block my-8 text-lg font-medium text-gray-600 tracking-wide">
                Crafting elegant solutions to complex problems. Specialized in building exceptional digital experiences that combine beautiful design with powerful functionality.
                </p>

                <div className="flex gap-x-8 items-center">
                    <button className="py-4 px-8 font-semibold rounded-md bg-gray-900 text-lg text-gray-200 transform transition-transform duration-200 hover:scale-105">View Projects</button>
                    <Link href="" className="flex justify-center items-center gap-1 font-medium text-lg">
                        Contact Me 
                        <GoArrowRight size={22} strokeWidth={0.75} />
                    </Link>
                </div>
            </div>

            <div>
            </div>
        </section>
    );
}
