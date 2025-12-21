"use client"

import { useState, useEffect } from "react";
import { MdWorkOutline } from "react-icons/md";
import fetcher from "../fetcher";

export default function Contact() {
    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(null)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Call the api here 
    }

    return (
        <section className="px-36 py-40">
            <div className="flex flex-col gap-y-4 items-center justify-center mb-16">
                <span className="text-purple-600 tracking-widest text-sm">GET IN TOUCH</span>
                <h2 className="font-semibold text-5xl">Let's Work Together</h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold">Contact Information</h2>
                    <div className="flex gap-x-4">
                        <div className="p-4 bg-purple-100 rounded-md shrink-0">
                            <MdWorkOutline size={30} className="text-purple-600" />
                        </div>

                        <div>
                            <span>Email</span>
                            <p>raphaelme1308@gmail.com</p>
                        </div>

                    </div>

                    <div className="flex gap-x-4">
                        <div className="p-4 bg-purple-100 rounded-md shrink-0">
                            <MdWorkOutline size={30} className="text-purple-600" />
                        </div>

                        <div>
                            <span>Email</span>
                            <p>raphaelme1308@gmail.com</p>
                        </div>

                    </div>

                    <div className="flex gap-x-4">
                        <div className="p-4 bg-purple-100 rounded-md shrink-0">
                            <MdWorkOutline size={30} className="text-purple-600" />
                        </div>

                        <div>
                            <span>Email</span>
                            <p>raphaelme1308@gmail.com</p>
                        </div>

                    </div>

                </div>


                <form className="flex flex-col gap-4 shadow-lg p-6 rounded-md" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="full_name">Full Name</label>
                        <input
                            name="fullName"
                            id="full_name"
                            className="p-4 border-2 rounded-md border-gray-200 focus:border-purple-600 focus:outline-none"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            id="email"
                            className="p-4 border-2 rounded-md border-gray-200 focus:border-purple-600 focus:outline-none"

                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="subject">Subject</label>
                        <input
                            name="subject"
                            id="subject"
                            className="p-4 border-2 rounded-md border-gray-200 focus:border-purple-600 focus:outline-none"

                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                        />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            className="p-4 border border-2 rounded-md border-gray-200 focus:border-purple-600 focus:outline-none"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={5}
                        />
                    </div>

                    <button className="mt-4 py-4 px-8 font-semibold rounded-md bg-gray-900 text-lg text-gray-200 transform transition-transform duration-200 hover:scale-105" type="submit">Send Message</button>
                </form>

            </div>
        </section>
    )
}