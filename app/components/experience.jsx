"use client";

import { useState } from "react";
import { MdWorkOutline } from "react-icons/md";
import { CiCircleChevDown } from "react-icons/ci";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Sixth Alliance Limited",
      period: "Apr 2024 - Nov 2025",
      details:
        "Built and maintained APIs, optimized database queries, and collaborated with frontend teams to deliver seamless integrations."
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2022 - Mar 2024",
      details:
        "Implemented responsive UIs, improved performance, and introduced design systems for consistency."
    },
    {
      title: "Intern",
      company: "Startup Hub",
      period: "Jun 2021 - Dec 2021",
      details:
        "Assisted in developing MVP features, wrote tests, and contributed to documentation."
    }
  ];

  return (
    <section className="px-36 py-40">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <span className="text-emerald-600 tracking-widest">Career Highlights</span>
        <h2 className="font-semibold text-5xl">Experience</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Proven track record of delivering impactful solutions across diverse industries.
        </p>
      </div>

      <div className="relative grid grid-cols-2 gap-y-8 mt-16">
        {/* Center dashed line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full border border-gray-300 border-dashed"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="col-span-2 relative">
            <TimelineRow position={index % 2 === 0 ? "right" : "left"}>
              <ExperienceCard exp={exp} />
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
function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative p-6 rounded shadow-md bg-white">
      {/* Header row */}
      <div className="flex items-start gap-x-6">
        <div className="p-4 bg-purple-100 rounded-md shrink-0">
          <MdWorkOutline size={30} className="text-purple-600" />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <div className="flex gap-x-4 mt-1 text-gray-700">
            <p className="border-r-2 pr-4 border-gray-300">{exp.company}</p>
            <p>{exp.period}</p>
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
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-600">
          <p>{exp.details}</p>
        </div>
      </div>
    </div>
  );
}