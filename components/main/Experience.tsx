import React, { FC } from "react"
import ExperienceElement from "./elements/ExperienceElement"
import experience from "../../data/experience"


const Experience: FC = () => {
    return (
        <div id="experience-sec">
            <hr/>
            <div className="sm:px-20 px-4 pt-20 pb-20 bg-gray-100 block">
                <div className=" bg-gray-100 text-pink-600 text-base font-semibold">
                    EXPERIENCE
                </div >
                <div className="flex flex-col pt-8">
                    {
                       experience.map(elt => {
                           return <ExperienceElement key={elt.id} data={elt}/>
                       })
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Experience as any