import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 flex justify-between items-center py-8 px-36">
            <div>LOGO</div>
            <div className="flex gap-8">
                <Link className="text-sm font-medium" href="/">Home</Link>
                <Link className="text-sm font-medium" href="/about">About</Link>
                <Link className="text-sm font-medium" href="/skills">Skills</Link>
                <Link className="text-sm font-medium" href="/contact">Contact</Link>
            </div>
            <button className="border-2 border-slate-800 px-4 py-1 rounded-full text-sm font-medium">Download CV</button>
        </nav>
    );
}