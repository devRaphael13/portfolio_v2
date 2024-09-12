"use client";

import { useEffect } from "react";
import { IoMdHome } from "react-icons/io";

export default function Nav() {
    useEffect(() => {
        handleNav();
    });

    const handleNav = () => {
        const scrollable = document.getElementById("scrollable");
        
        const hidePoints = () => {
            const points = document.getElementsByClassName("point")
            
            for ( let point of points ) {
                point.style.display = "none"
            }
        }
        
        const getDistance = (top, elem) => {
            const rect1 = top.getBoundingClientRect().top;  
            const rect2 = elem.getBoundingClientRect().top;  
            return rect2 - rect1
        }

        const handleExp = () => {
            const expBtn = document.getElementById("exp");
            const experience = document.getElementById("experiences");
            const expPnt = document.getElementById("expPoint");

            expBtn.addEventListener("click", () => {
                hidePoints()
                expPnt.style.display = "block"
                scrollable.scrollBy({top: getDistance(scrollable, experience), behavior: "smooth"})
            })
        };

        const handleProj = () => {
            const projBtn = document.getElementById("proj");
            const project = document.getElementById("project");
            const projPnt = document.getElementById("projPoint");

            projBtn.addEventListener("click", () => {
                hidePoints()
                projPnt.style.display = "block"
                scrollable.scrollBy({top: getDistance(scrollable, project), behavior: "smooth"})
            
            })
        };

        const handleAbt = () => {
            const aboutBtn = document.getElementById("abt");
            const about = document.getElementById("about");
            const abtPnt = document.getElementById("abtPoint");

            aboutBtn.addEventListener("click", () => {
                hidePoints()
                abtPnt.style.display = "block"
                scrollable.scrollBy({top: getDistance(scrollable, about), behavior: "smooth"})
            })
        };

        handleAbt()
        handleExp()
        handleProj()
    };

    return (
        <div className="slide-in-bottom shadow-md hidden absolute text-slate-400 px-6 py-3 rounded-full top-[95%] left-1/3 opacity-90 bg-slate-800 md:flex gap-4">
            <div>
                <button id="abt">About</button>
                <div id="abtPoint" className="point w-1 h-1 mx-auto mt-1 rounded-full bg-teal-500"></div>
            </div>
            <div>
                <button id="exp">Experience</button>
                <div id="expPoint" className="point w-1 hidden h-1 mx-auto mt-1 rounded-full bg-teal-500"></div>
            </div>
            <div>
                <button id="proj">Project</button>
                <div id="projPoint" className="point w-1 hidden h-1 mx-auto mt-1 rounded-full bg-teal-500"></div>
            </div>
        </div>
    );
}
