"use client"

import { useState } from "react";
import { fetcher } from "../utils";

export default function ContactForm() {
    const initialForm = {
        full_name: "",
        email: "",
        subject: "",
        message: ""
    };
    const [formData, setFormData] = useState(initialForm)

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetcher(`${baseUrl}api/messages/`, { method: "POST", body: formData })
        setFormData(initialForm)
    }

    return (
        <form className="flex flex-col gap-4 shadow-lg p-6 rounded-md" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2">
                <label htmlFor="full_name">Full Name</label>
                <input
                    name="full_name"
                    id="full_name"
                    className="p-4 border-2 rounded-md border-gray-200 focus:border-purple-600 focus:outline-none"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                />
            </div>

            <div className="flex flex-col gap-y-2">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    className="p-4 border-2 rounded-md border-gray-200 focus:border-purple-600 focus:outline-none"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
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
                    required
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
                    required
                />
            </div>

            <button className="mt-4 py-4 px-8 font-semibold rounded-md bg-gray-900 text-lg text-gray-200 transform transition-transform duration-200 hover:scale-105" type="submit">Send Message</button>
        </form>
    )
}