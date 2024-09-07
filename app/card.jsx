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

    if (isLoading)
        return (
            <>
                <Loader />
                <Loader />
                <Loader />
            </>
        );

    if (!data) return <h2 className="text-2xl mt-4 italic font-semibold text-slate-600">Nothing to show....</h2>;
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
                        <div className="mt-4">
                            {exp.tech_used.map((skill, index) => (
                                <Skill key={index} name={skill} />
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}

export function Project() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetcher("https://portfolio-apiv2.vercel.app/api/projects/", setData, setIsLoading);
    }, []);

    if (isLoading)
        return (
            <>
                <Loader />
                <Loader />
                <Loader />
            </>
        );

    if (!data) return <h2 className="text-2xl mt-4 italic font-semibold text-slate-600">Nothing to show....</h2>;
    return (
        <>
            {data.map((proj) => (
                <article key={proj.id} className="flex gap-x-2 p-6 rounded-md cursor-pointer hover:bg-slate-800">
                    <span className="block text-slate-500 text-xs font-semibold">{formatDate(proj.start_date, proj.end_date)}</span>
                    <div className="w-5/6">
                        <a href={`${proj.link || "#"}`} className="text-lg font-bold text-slate-200 leading-snug hover:text-teal-400">
                            {proj.name} <FaLink className="inline-block" />
                        </a>

                        <p className="leading-normal">{proj.description}</p>
                        <div className="mt-4">
                            {proj.tech_used.map((skill, index) => (
                                <Skill key={index} name={skill} />
                            ))}
                        </div>
                    </div>
                </article>
            ))}
        </>
    );
}
