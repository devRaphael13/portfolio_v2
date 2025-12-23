import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-700 px-36 py-20 text-white">
            <div className="flex gap-8 py-8 justify-between">
                <div className="w-1/4">
                    <h2 className="font-semibold text-2xl mb-4">Portfolio</h2>
                    <p className="text-sm">Creating exceptional digital experiences through innovative design and clean code.</p>
                </div>

                <div className="w-1/4">
                    <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                    <ul className="text-sm flex flex-col gap-2">
                        <li>
                            <Link href="">Home</Link>
                        </li>
                        <li>
                            <Link href="">About</Link>
                        </li>
                        <li>
                            <Link href="">Experience</Link>
                        </li>
                        <li>
                            <Link href="">Service</Link>
                        </li>
                        <li>
                            <Link href="">Skills</Link>
                        </li>
                        <li>
                            <Link href="">Contact</Link>
                        </li>
                    </ul>
                </div>


                <div className="w-1/4">
                <h3 className="text-lg font-medium mb-4">Contact</h3>
                    <ul className="text-sm flex flex-col gap-2">
                        <li>
                            <span>contact@example.com</span>
                        </li>
                        <li>
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li>
                            <span>San Francisco, CA</span>
                        </li>
                    </ul>
                </div>

                <div className="w-1/4">
                    <h3 className="text-lg font-medium mb-4">Philosopy</h3>
                    <p className="italic text-sm">Good design is obvious; great design is invisible.</p>
                </div>
            </div>
            <div className="pt-4 text-sm flex justify-between border-t border-emerald-200">
                <p>&copy; 2025 Portfolio. All rights reserved</p>

                <div className="flex gap-2">
                    <div className="p-4 bg-white/10 rounded-md shrink-0">
                        <Link href="">
                            <FaGithub size={20} className="text-white" />
                        </Link>
                    </div>

                    <div className="p-4 bg-white/10 rounded-md shrink-0">
                        <Link href="">
                        
                            <FaLinkedinIn size={20} className="text-white" />
                        </Link>
                    </div>

                    <div className="p-4 bg-white/10 rounded-md shrink-0">
                        <Link href="">
                        
                            <MdOutlineEmail size={20} className="text-white" />
                        </Link>
                    </div>
                </div>

                <p>Powered by Nextjs</p>
            </div>
        </footer>
    );
}
