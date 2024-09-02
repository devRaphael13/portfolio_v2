"use client";

import { FaLink } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Loader from "./loader";
import fetcher from "./fetcher";
import { formatDate } from "./utils";
import { Skill } from "./skills";

export function Experience() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetcher("https://portfolio-apiv2.vercel.app/api/experiences/", setData, setIsLoading);
    }, []);

    if (isLoading) return <Loader />;

    if (!data) return <h2 className="text-2xl mt-4 italic font-semibold text-slate-600">Nothing to show....</h2>;
    console.log(data[0])
    return (
        <>
            {data.map((exp) => (
                <article key={exp.id} className="flex p-6 gap-x-2 rounded-md cursor-pointer hover:bg-slate-800">
                    <span className="block text-slate-500 text-xs font-semibold">{formatDate(exp.start_date, exp.end_date)}</span>
                    <div className="w-5/6">
                        <a href={`${exp.link || "#"}`} className="text-lg font-bold text-slate-200 leading-snug hover:text-teal-400">
                            {exp.company} <FaLink className="inline-block" />
                        </a>
                        <span className="block text-lg text-slate-500 mb-1">{exp.position}</span>

                        <p className="leading-normal">{exp.description}</p>
                        <div className="mt-4">{exp.tech_used.map((skill, index) => <Skill key={index} name={skill}/>)}</div>
                    </div>
                </article>
            ))}
        </>
    );
}

export function Project() {
    return (
        <article className="flex gap-x-2 p-6 rounded-md cursor-pointer hover:bg-slate-800">
            <span className="block text-slate-500 text-xs font-semibold">2024 - PRESENT</span>
            <div className="w-5/6">
                <a href="#" className="text-lg font-bold text-slate-200 leading-snug hover:text-teal-400">
                    Sixthalliance Limited <FaLink className="inline-block" />
                </a>

                <p className="leading-normal">
                    My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet —
                    things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app
                    with the Spotify API.
                </p>
                <div className="mt-4">
                    <span className="inline-block py-1 px-2 m-0.5 text-xs rounded-full bg-teal-900 text-teal-200">JavaScript</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-xs rounded-full bg-teal-900 text-teal-200">Python</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-xs rounded-full bg-teal-900 text-teal-200">Django</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-xs rounded-full bg-teal-900 text-teal-200">Vercel</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-xs rounded-full bg-teal-900 text-teal-200">React</span>
                    <span className="inline-block py-1 px-2 m-0.5 text-xs rounded-full bg-teal-900 text-teal-200">JavaScript</span>
                </div>
            </div>
        </article>
    );
}
