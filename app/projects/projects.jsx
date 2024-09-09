"use client";

import { useState, useEffect } from "react";
import fetcher from "../fetcher";
import Loader from "../loader";
import { getYear } from "../utils";
import { FaLink } from "react-icons/fa6";
import { getDomain } from "../utils";
import { Skill } from "../skills";

export default function Project() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetcher("https://portfolio-apiv2.vercel.app/api/projects/", setData, setIsLoading);
    }, []);

    if (isLoading)
        return (
            <>
                <Loader />
            </>
        );

    if (!data) return <h2 className="text-2xl mt-4 italic font-semibold text-slate-600">Nothing to show....</h2>;
    return (
        <div>
            <table className="table-auto divide-y mt-8">
                <tr>
                    <th className="p-4 border-b border-slate-800 text-left">Year</th>
                    <th className="p-4 border-b border-slate-800 text-left">Project</th>
                    <th className="p-4 border-b border-slate-800 text-left">Employer</th>
                    <th className="p-4 border-b border-slate-800 text-left">Technologies</th>
                    <th className="p-4 border-b border-slate-800 text-left">Link</th>
                </tr>
                {data.map((proj) => (
                    <tr>
                        <td className="p-4 border-b border-slate-800">{getYear(proj.start_date)}</td>
                        <td className="p-4 border-b border-slate-800 font-bold">{proj.name}</td>
                        <td className="p-4 border-b border-slate-800">{proj.employer}</td>
                        <td className="p-4 border-b border-slate-800">
                            {proj.tech_used.map((skill, index) => (
                                <Skill key={index} name={skill} />
                            ))}
                        </td>
                        <td className="p-4 border-b border-slate-800">
                            {proj.link ? (
                                <a className="hover:drop-shadow-glow text-teal-400" href={proj.link}>
                                    {getDomain(proj.link)} <FaLink className="inline-block" />
                                </a>
                            ) : (
                                "-"
                            )}
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
