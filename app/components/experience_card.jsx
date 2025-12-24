"use client"

import { useState} from "react";
import { MdWorkOutline } from "react-icons/md";
import { CiCircleChevDown } from "react-icons/ci";
import { formatDate } from "../utils";

export default function ExperienceCard({ company, link, position, description, start_date, end_date, tech_used }) {
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
            className={`ml-auto cursor-pointer transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}
          >
            <CiCircleChevDown size={30} />
          </button>
        </div>
  
        {/* Accordion content */}
        <div
          className={`overflow-auto transition-[max-height,opacity] duration-300 ease-out ${open ? "max-h-40 opacity-100 mt-8 bg-gray-100 rounded-md p-2" : "max-h-0 opacity-0" }`}
        >
          <div className="text-gray-600">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }