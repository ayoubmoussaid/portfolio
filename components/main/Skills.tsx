import React, { FC } from "react"
import SkillElement from "./elements/SkillElement"
import { Element } from '../../interfaces/index'
import mySkills from "../../data/skills"




const Skills: FC<Element> = () => {
    return (
        <div id="skills-sec">
            <hr/>
            <div className="sm:px-20 px-4 pt-20 pb-16 bg-gray-100 block">
                <div className=" bg-gray-100 text-pink-600 text-base font-semibold">
                    TECHNICAL SKILLS
                </div >
                <div className="flex flex-wrap pt-8">
                    <div className="w-full text-gray-700">
                        As a reluctant graphic designer, I fled from a traditional path and explored my creativity, trough trying my hands on various techniques and software. Software is more than just a tool, and I try to dig deep into it. Today, I knack for critical thinking, empathy and creativity to create viable and impactful solutions using these technologies.
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