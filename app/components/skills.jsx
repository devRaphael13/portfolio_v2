import { fetcher } from "../utils";
import { ICON_LIBRARIES } from "../icon_map";

export default async function Skills() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const skills = await fetcher(`${baseUrl}api/technologies/`)


    return (
        <section id="skills" className="flex flex-col gap-12 justify-center items-center px-36 py-40">
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <span className="text-purple-600 tracking-widest text-sm">TECHNICAL EXPERTISE</span>
                <h2 className="font-semibold text-5xl">Skills & Technologies</h2>
            </div>

            <div className="grid grid-cols-4 gap-8">
                {skills && skills.map(skill => <Skill key={skill["id"]} {...skill} />)}
            </div>
        </section>
    )
}

function Skill({ name, icon_name, icon_library, icon_colour }) {

    const IconComponent = ICON_LIBRARIES[icon_library][icon_name]

    return (
        <article className="flex flex-col justify-center items-center rounded-lg px-16 py-8 font-medium shadow-lg transition-shadow duration-200 hover:shadow-2xl">
            <div className="flex items-center">
                <span className={`p-4 bg-${icon_colour} rounded-md`}>
                    {IconComponent ? <IconComponent size={30} className="text-white" /> : null}
                </span>
            </div>
            <p className="text-center mt-2">{name}</p>

        </article>
    );
}

