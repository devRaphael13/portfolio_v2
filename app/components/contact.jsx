
import { fetcher } from "../utils";
import ContactForm from "./contact_form";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default async function Contact() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const contactInfo = await fetcher(`${baseUrl}api/profile/`)

    return (
        <section id="contact" className="px-36 py-40">
            <div className="flex flex-col gap-y-4 items-center justify-center mb-16">
                <span className="text-purple-600 tracking-widest text-sm">GET IN TOUCH</span>
                <h2 className="font-semibold text-5xl">Let's Work Together</h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">Contact Information</h2>
                    <div className="flex gap-x-4">
                        <div className="p-4 bg-purple-100 rounded-md shrink-0">
                            <MdOutlineEmail size={20} className="text-purple-600" />
                        </div>

                        <div>
                            <span className="text-gray-600 mb-2">Email</span>
                            <p className="font-medium text-lg text-gray-700">{contactInfo && contactInfo["email"]}</p>
                        </div>

                    </div>

                    <div className="flex gap-x-4">
                        <div className="p-4 bg-emerald-100 rounded-md shrink-0">
                            <FiPhone size={20} className="text-emerald-600" />
                        </div>

                        <div>
                            <span className="text-gray-600 mb-2">Phone</span>
                            <p className="font-medium text-lg text-gray-700">{contactInfo && contactInfo["phone_number"]}</p>
                        </div>

                    </div>

                    <div className="flex gap-x-4">
                        <div className="p-4 bg-pink-100 rounded-md shrink-0">
                            <SlLocationPin size={20} className="text-pink-600" />
                        </div>

                        <div>
                            <span className="text-gray-600 mb-2">Location</span>
                            <p className="font-medium text-lg text-gray-700">{contactInfo && `${contactInfo["city"]}, ${contactInfo["state"]}, ${contactInfo["country"]}`}</p>
                        </div>

                    </div>

                    <div>
                        <h2 className="text-2xl mb-6 font-bold">Follow Me</h2>
                        <div className="flex gap-2">
                            <div className="p-4 bg-gray-100 rounded-md shrink-0">
                                <Link href={contactInfo && contactInfo["github_url"]} target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={20} className="text-gray-600" />
                                </Link>
                            </div>

                            <div className="p-4 bg-gray-100 rounded-md shrink-0">
                                <Link href={contactInfo && contactInfo["linkedin_url"]} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn size={20} className="text-gray-600" />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                <ContactForm />
            </div>
        </section>
    )
}