import { fetcher } from "../utils";
import ExperienceCard from "./experience_card";


export default async function Experience() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const experiences = await fetcher(`${baseUrl}api/experiences/`)

  return (
    <section id="experience" className="px-36 py-40">
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

