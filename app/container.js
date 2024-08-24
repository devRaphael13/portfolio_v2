"use client";

import { FaLink } from "react-icons/fa6";

export default function Container({ is_xp }) {
    return (
        <article className="flex gap-x-10 p-6 rounded-md cursor-pointer hover:bg-slate-800">
            <span className="text-slate-500 text-sm font-bold">2024 - PRESENT</span>
            <div>
                <a href="#" className="text-lg font-bold text-slate-200 leading-snug hover:text-teal-400">
                    Sixthalliance Limited <FaLink className="inline-block" />
                </a>
                {is_xp && <span className="block text-lg text-slate-500 mb-1">Junior Backend Developer</span>}

                <p className="leading-normal">
                    My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet —
                    things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app
                    with the Spotify API.
                </p>
                <div className="mt-2">
                    <span className="inline-block py-1 px-2 m-0.5 text-sm rounded-full bg-teal-900 text-teal-200">JavaScript</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-sm rounded-full bg-teal-900 text-teal-200">Python</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-sm rounded-full bg-teal-900 text-teal-200">Django</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-sm rounded-full bg-teal-900 text-teal-200">Vercel</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-sm rounded-full bg-teal-900 text-teal-200">React</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-sm rounded-full bg-teal-900 text-teal-200">JavaScript</span>
                </div>
            </div>
        </article>
    );
}
