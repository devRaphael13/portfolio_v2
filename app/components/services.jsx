import { FaCheck } from "react-icons/fa6";
import { fetcher } from "../utils";
import { ICON_LIBRARIES } from "../icon_map";

export default async function Services() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const services = await fetcher(`${baseUrl}api/services/`)

    return (
        <section id="services" className="flex flex-col gap-12 justify-center items-center px-36 py-40">
            <div className="flex flex-col gap-y-4 items-center justify-center">
                <span className="text-purple-600 tracking-widest text-sm">WHAT I OFFER</span>
                <h2 className="font-semibold text-5xl">Services</h2>
                <p className="text-lg leading-relaxed text-gray-600">Comprehensive development solutions tailored to bring your ideas to life with cutting-edge technology and expert craftsmanship.</p> 
            </div>

            <div className="grid grid-cols-3 gap-8">
                {services && services.map(service => <Service key={service["id"]} {...service} />)}
            </div>
        </section>
    )
}

function Service({ name, tag_line, features, icon_name, icon_library, icon_colour }) {
    const IconComponent = ICON_LIBRARIES[icon_library][icon_name]

    return (
        <article className="rounded-lg p-8 shadow-lg transition-shadow duration-200 hover:shadow-2xl">
            <div className="flex items-center mb-4">
                <span className={`p-4 bg-${icon_colour} rounded-md`}>
                    {IconComponent ? <IconComponent size={30} className="text-white" /> : null}
                </span>
            </div>

            <div className="flex flex-col gap-y-2">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p>{tag_line}</p>
                <ul className="flex flex-col gap-y-2">
                    {features.map((feat, i) => (
                        <li key={i} className="flex gap-x-2 items-center">
                            <span className="text-green-600">
                                <FaCheck size={15} />
                            </span>
                            <span className="text-gray-600">{feat}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

