import Link from "next/link";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SlFolder } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { IoIosStarOutline } from "react-icons/io";
import { fetcher } from "../utils";

export default async function About() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const about = await fetcher(`${baseUrl}api/profile/`)

    return (
        <section id="about" className="grid grid-cols-2 px-36 py-40 gap-x-20 justify-center items-center">
            <article className="flex flex-col gap-4">
                <span className="text-purple-600 tracking-widest text-sm">ABOUT ME</span>
                <h2 className="font-semibold text-5xl">Passionate About Creating Digital Excellence</h2>
                <div className="flex flex-col gap-6">
                    {about && about["about"] ? (
                        about["about"]
                        .replace(/\\n/g, "\n") // turn escaped newlines into real ones
                        .split("\n\n")         // now split on double newlines
                        .map((paragraph, index) => (
                            <p key={index} className="leading-relaxed text-gray-600">
                                {paragraph.trim()}
                            </p>
                            ))
                        ) : (
                        <p className="leading-relaxed text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero debitis voluptates temporibus delectus tempore dignissimos magni praesentium, odio veritatis dolore totam cupiditate alias amet nam porro aut modi ratione nostrum?
                        </p>
                        )}
                </div>
                
                <div className="flex gap-x-2">
                    <Link className="py-4 px-8 font-semibold rounded-md bg-gray-900 text-lg text-gray-200 transform transition-transform duration-200 hover:scale-105" href="">Get in Touch</Link>
                    <Link className="px-8 py-4 rounded-md font-medium text-lg border-2 border-gray-900 transform transition-transform duration-200 hover:scale-105 hover:bg-gray-900 hover:text-gray-200" href="">View Work</Link>
                </div>
            </article>

            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg p-8 shadow-lg transition-shadow duration-200 hover:shadow-2xl">
                    <div className="flex items-center mb-2">
                        <span className="p-4 bg-purple-100 rounded-md">
                            <IoCodeSlashOutline size={30} className="text-purple-600" />
                        </span>
                    </div>

                    <p className="text-gray-600 font-normal"><span className="text-gray-900 block text-4xl font-bold mb-2">6+</span>Years of Experience</p>
                </div>

                <div className="rounded-lg p-8 shadow-lg transition-shadow duration-200 hover:shadow-2xl">
                    <div className="flex items-center mb-2">
                        <span className="p-4 bg-emerald-100 rounded-md">
                            <SlFolder size={30} className="text-emerald-600"/>
                        </span>
                    </div>

                    <p className="text-gray-600 font-normal"><span className="text-gray-900 block text-4xl font-bold mb-2">10+</span>Projects Completed</p>
                </div>

                <div className="rounded-lg p-8 shadow-lg transition-shadow duration-200 hover:shadow-2xl">
                    <div className="flex items-center mb-2">
                        <span className="p-4 bg-pink-100 rounded-md">
                            <GoPeople size={30} className="text-pink-600" />
                        </span>
                    </div>

                    <p className="text-gray-600 font-normal"><span className="text-gray-900 block text-4xl font-bold mb-2">5+</span>Happy Clients</p>
                </div>

                <div className="rounded-lg p-8 shadow-lg transition-shadow duration-200 hover:shadow-2xl">
                    <div className="flex items-center mb-2">
                        <span className="p-4 bg-orange-100 rounded-md">
                            <IoIosStarOutline size={30} className="text-orange-600" />
                        </span>
                    </div>

                    <p className="text-gray-600 font-normal"><span className="text-gray-900 block text-4xl font-bold mb-2">4.8</span>Average Project Rating</p>
                </div>
            </div>
        </section>
    );
}