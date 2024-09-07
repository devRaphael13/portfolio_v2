"use client";

import Loader from "./loader.jsx";
import fetcher from "./fetcher.js";
import { useState, useEffect } from "react";

export function AllSkills({ classes }) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetcher("https://portfolio-apiv2.vercel.app/api/technologies/", setData, setIsLoading);
    }, []);

    if (isLoading) return <Loader type={"single"} />;

    if (!data) return <h2 className="text-2xl mt-4 italic font-semibold text-slate-600">Nothing to show....</h2>;

    return (
        <div className={`${classes} mt-8 md:w-3/4`}>
            {data.map((skill) => <Skill key={skill.id} {...skill}/>)}
        </div>
    );
}

export function Skill(skill) {
    return (
        <span className="inline-block py-1 px-2 m-0.5 text-xs rounded-full bg-teal-900 text-teal-200">
            {skill.name}
        </span>
    );
}
