"use client"

import {useState} from "react"
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";


export default function MobileMenu() {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative md:hidden">
            <button onClick={() => setOpen(!open)}>
                <CgMenuRight />
            </button>

            <div className={`absolute ${open ? "block" : "hidden"} flex flex-col bg-white top-16 right-2 w-48 rounded-md`}>
                <Link className="border-b border-gray-200 py-4 text-center text-sm font-medium" href="#home">Home</Link>
                <Link className="border-b border-gray-200 py-4 text-center text-sm font-medium" href="#about">About</Link>
                <Link className="border-b border-gray-200 py-4 text-center text-sm font-medium" href="#experience">Experiences</Link>
                <Link className="border-b border-gray-200 py-4 text-center text-sm font-medium" href="#services">Services</Link>
                <Link className="border-b border-gray-200 py-4 text-center text-sm font-medium" href="#skills">Skills</Link>
                <Link className="border-b border-gray-200 py-4 text-center text-sm font-medium" href="#contact">Contact</Link>
            </div>
        </div>
    )
}