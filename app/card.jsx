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
        <div className="">
            {data.map((exp) => (
                <article key={exp.id} className="">
                    <div className="flex justify-between">
                        <a href={`${exp.link || "#"}`} className="text-lg font-bold text-slate-200 leading-snug hover:text-teal-400">
                            {exp.company} <FaLink className="inline-block" />
                        </a>
                        <span className="italic block text-slate-500 text-xs font-semibold">{formatDate(exp.start_date, exp.end_date)}</span>
                    </div>

                    <span className="block text-lg text-slate-500 mb-4">{exp.position}</span>

                    <p className="lg:text-sm leading-normal">{exp.description}</p>
                    <div className="mt-4">
                        {exp.tech_used.map((skill, index) => (
                            <Skill key={index} name={skill} />
                        ))}
                    </div>
                </article>
            ))}
        </div>
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
        <div className="flex flex-col gap-y-10">
            {data.map((proj) => (
                <article key={proj.id} className="">
                    <div className="flex justify-between gap-2">
                            <a href={`${proj.link || "#"}`} className="text-lg font-bold text-slate-200 leading-snug hover:text-teal-400">
                                {proj.name} <FaLink className="inline-block" />
                            </a>
                            <span className="italic block text-slate-500 text-xs font-semibold">{formatDate(proj.start_date, proj.end_date)}</span>
                        </div>
                    <span className="block text-lg text-slate-500 mb-4">{proj.employer ? proj.employer : "Personal Project"}</span>
                        <p className="leading-normal">{proj.description}</p>
                        <div className="mt-4">
                            {proj.tech_used.map((skill, index) => (
                                <Skill key={index} name={skill} />
                            ))}
                        </div>
                </article>
            ))}
        </div>
    );
}
