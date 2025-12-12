import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-gray-50 via-white to-purple-50 px-36 grid grid-cols-2 my-10 py-10 border border-red-200">
            <div>
                <div className="inline-flex w-fit items-center justify-center px-4 py-2 gap-1 bg-emerald-50 my-4 rounded-full">
                    <div className="bg-emerald-500">.</div>
                    <p className="text-emerald-800 font-medium ">Available for work</p>
                </div>

                <h1 className="inline-block font-bold text-7xl">
                    Creative Software Engineer & <span className="italic text-purple-600">Problem</span> Solver
                </h1>

                <p className="inline-block my-8 text-lg font-medium text-gray-600 tracking-wide">
                Crafting elegant solutions to complex problems. Specialized in building exceptional digital experiences that combine beautiful design with powerful functionality.
                </p>

                <div className="flex gap-x-8 items-center">
                    <button className="py-4 px-8 font-semibold rounded-md bg-gray-900 text-lg text-gray-200">View Projects</button>
                    <Link href="" className="font-medium text-lg">Contact Me -</Link>
                </div>
            </div>

            <div></div>
        </section>
    );
}
