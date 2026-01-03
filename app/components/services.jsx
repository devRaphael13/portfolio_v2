import { FaCheck } from "react-icons/fa6";
import { fetcher } from "../utils";
import { ICON_LIBRARIES } from "../icon_map";

export default async function Services() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const services = await fetcher(`${baseUrl}api/services/`)

    return (
        <section id="services" className="flex flex-col gap-12 justify-center items-center xl:px-36 lg:px-20 md:px-10 px-4 md:py-40 py-20">
            <div className="flex flex-col lg:gap-y-4 md:gap-y-2 items-center justify-center">
                <span className="text-purple-600 tracking-widest text-sm">WHAT I OFFER</span>
                <h2 className="font-semibold lg:text-5xl text-4xl">Services</h2>
                <p className="md:text-lg text-normal md:leading-relaxed leading-tight mt-2 md:mt-0 text-center text-gray-600">Comprehensive development solutions tailored to bring your ideas to life with cutting-edge technology and expert craftsmanship.</p> 
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 md:gap-4">
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

