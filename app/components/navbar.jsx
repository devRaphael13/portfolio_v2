import Link from "next/link";
import { fetcher } from "../utils";
import MobileMenu from "./navbar_menu";

export default async function Navbar() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const resume = await fetcher(`${baseUrl}api/profile/resume/`)


    return (
        <nav className="shadow-sm fixed top-0 left-0 w-full bg-white bg-opacity-50 backdrop-blur-lg z-50 flex justify-between items-center py-4 xl:px-36 lg:px-20 md:px-10 px-4">
            <h2 className="font-bold text-2xl">R</h2>
            <div className="gap-8 md:flex hidden">
                <Link className="text-sm font-medium" href="#home">Home</Link>
                <Link className="text-sm font-medium" href="#about">About</Link>
                <Link className="text-sm font-medium" href="#experience">Experiences</Link>
                <Link className="text-sm font-medium" href="#services">Services</Link>
                <Link className="text-sm font-medium" href="#skills">Skills</Link>
                <Link className="text-sm font-medium" href="#contact">Contact</Link>
            </div>
            <Link href={resume ? resume["resume"] : ""} className="border-2 border-slate-800 px-6 py-2 rounded-full text-sm font-medium">Download CV</Link>

            <MobileMenu />

        </nav>
    );
}