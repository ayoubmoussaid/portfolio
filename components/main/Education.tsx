import React, { FC } from "react"
import EducationElement from "./elements/EducationElement";
import { Element } from '../../interfaces/index'
import education from "../../data/education";




const Education: FC<Element> = () => {
    return (
        <div id="education-sec">
            <hr/>
            <div className="sm:px-20 px-4 pt-20 pb-20 bg-gray-100 block">
                <div className=" bg-gray-100 text-pink-600 text-base font-semibold">
                    EDUCATION
                </div >
                <div className="flex flex-col pt-8">
                    {
                        education.map(elt => {
                            return <EducationElement key={elt.id} data={elt}/>
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Education  as any