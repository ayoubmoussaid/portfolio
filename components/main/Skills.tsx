import React, { FC } from "react"
import SkillElement from "./elements/SkillElement"
import mySkills from "../../data/skills"




const Skills: FC = () => {
    return (
        <div id="skills-sec">
            <hr/>
            <div className="sm:px-20 px-4 pt-20 pb-16 bg-gray-100 block">
                <div className=" bg-gray-100 text-pink-600 text-base font-semibold">
                    TECHNICAL SKILLS
                </div >
                <div className="flex flex-wrap pt-8">
                    <div className="w-full text-gray-700">
                    Being the curious person I am, I always wondered how programs worked, which led me to discover programming through its best ways (as I see it): <b>C Language</b>.
                That was the beginning of my journey through various software, languages and frameworks.
                    </div>
                    <div className="flex flex-wrap pt-8 w-full items-center justify-between">
                    {
                       mySkills.map(elt => {
                           return <SkillElement key={elt.id} data={elt} />
                       })
                    }
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Skills as any