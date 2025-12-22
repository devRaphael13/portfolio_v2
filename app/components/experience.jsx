"use client";

import { useState, useEffect } from "react";
import { MdWorkOutline } from "react-icons/md";
import { CiCircleChevDown } from "react-icons/ci";
import { formatDate, fetcher } from "../utils";


export default function Experience() {

    const [loading, setLoading] = useState(true)
    const [experiences, setExperiences] = useState(null)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    useEffect(() => {
        fetcher(`${baseUrl}api/experiences/`, {setData: setExperiences, setLoading})
    }, [baseUrl])

  return (
    <section className="px-36 py-40">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <span className="text-purple-600 tracking-widest text-sm">CAREER HIGHLIGHTS</span>
        <h2 className="font-semibold text-5xl">Experience</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Proven track record of delivering impactful solutions across diverse industries.
        </p>
      </div>

      <div className="relative grid grid-cols-2 gap-y-8 mt-16">
        {/* Center dashed line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full border border-gray-300 border-dashed"></div>

        {experiences && experiences.map((exp, index) => (
          <div key={exp["id"]} className="col-span-2 relative">
            <TimelineRow position={index % 2 === 0 ? "right" : "left"}>
              <ExperienceCard {...exp} />
            </TimelineRow>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineRow({ position, children }) {
  return (
    <div
      className={`relative ${
        position === "right" ? "ml-auto pr-12 w-1/2" : "mr-auto pl-12 w-1/2"
      }`}
    >

      {children}
    </div>
  );
}

/**
 * Card with accordion
 */
function ExperienceCard({ company, link, position, description, start_date, end_date, tech_used }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative p-6 rounded shadow-md bg-white">
      {/* Header row */}
      <div className="flex items-start gap-x-6">
        <div className="p-4 bg-purple-100 rounded-md shrink-0">
          <MdWorkOutline size={30} className="text-purple-600" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold">{position}</h3>
          <div className="flex gap-x-4 mt-1 text-gray-700">
            <p>{company}</p>
            <div className="border-l-2 border-gray-200"></div>
            <p>{formatDate(start_date, end_date)}</p>
          </div>
        </div>

        <button
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className={`ml-auto cursor-pointer transition-transform duration-300 shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        >
          <CiCircleChevDown size={30} />
        </button>
      </div>

      {/* Accordion content */}
      <div
        className={`overflow-auto transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-40 opacity-100 mt-8 bg-gray-100 rounded-md p-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-600">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}