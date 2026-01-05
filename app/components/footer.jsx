import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { fetcher } from "../utils";

export default async function Footer() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const contactInfo = await fetcher(`${baseUrl}api/profile/`)

    return (
        <footer className="bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-700 xl:px-36 lg:px-20 md:px-10 px-4 md:py-20 py-10 text-white">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8 py-8 justify-between">
                <div>
                    <h2 className="font-semibold text-2xl mb-4">Portfolio</h2>
                    <p className="text-sm">Creating exceptional digital experiences through innovative design and clean code.</p>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                    <ul className="text-sm flex flex-col gap-2">
                        <li>
                            <Link href="#home">Home</Link>
                        </li>
                        <li>
                            <Link href="#about">About</Link>
                        </li>
                        <li>
                            <Link href="#experience">Experience</Link>
                        </li>
                        <li>
                            <Link href="#services">Services</Link>
                        </li>
                        <li>
                            <Link href="#skills">Skills</Link>
                        </li>
                        <li>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>


                <div>
                <h3 className="text-lg font-medium mb-4">Contact</h3>
                    <ul className="text-sm flex flex-col gap-2">
                        <li>
                            <span>{contactInfo && contactInfo["email"]}</span>
                        </li>
                        <li>
                            <span>{contactInfo && contactInfo["phone_number"]}</span>
                        </li>
                        <li>
                            <span>{contactInfo && `${contactInfo["city"]}, ${contactInfo["state"]}, ${contactInfo["country"]}`}</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-4">Philosopy</h3>
                    <p className="italic text-sm">Good design is obvious; great design is invisible.</p>
                </div>
            </div>
            <div className="pt-4 text-sm flex flex-wrap gap-2 justify-between border-t border-emerald-200">
                <p>&copy; 2025 Portfolio. All rights reserved</p>

                <div className="flex gap-2">
                    <div className="p-4 bg-white/10 rounded-md shrink-0">
                        <Link href={contactInfo && contactInfo["github_url"]} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} className="text-white" />
                        </Link>
                    </div>

                    <div className="p-4 bg-white/10 rounded-md shrink-0">
                        <Link href={contactInfo && contactInfo["linkedin_url"]} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={20} className="text-white" />
                        </Link>
                    </div>

                    <div className="p-4 bg-white/10 rounded-md shrink-0">
                        <Link href={`mailto:${contactInfo && contactInfo["email"]}`} target="_blank" rel="noopener noreferrer">
                            <MdOutlineEmail size={20} className="text-white" />
                        </Link>
                    </div>
                </div>

                <p>Powered by Nextjs</p>
            </div>
        </footer>
    );
}
