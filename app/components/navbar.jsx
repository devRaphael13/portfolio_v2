"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import fetcher from "../fetcher";

export default function Navbar() {
    const [resume, setResume] = useState(null)
    const [loading, setLoading] = useState(true)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    useEffect(() => {
        fetcher(`${baseUrl}api/profile/resume/`, setResume, setLoading);

    }, [baseUrl]);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between items-center py-4 px-36">
            <div>LOGO</div>
            <div className="flex gap-8">
                <Link className="text-sm font-medium" href="/">Home</Link>
                <Link className="text-sm font-medium" href="/about">About</Link>
                <Link className="text-sm font-medium" href="/about">Services</Link>
                <Link className="text-sm font-medium" href="/skills">Skills</Link>
                <Link className="text-sm font-medium" href="/contact">Contact</Link>
            </div>
            <Link href={resume ? resume["resume"] : ""} className="border-2 border-slate-800 px-6 py-2 rounded-full text-sm font-medium">Download CV</Link>
        </nav>
    );
}