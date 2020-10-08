import React, { FC, useContext } from "react"
import EducationElement from "./elements/EducationElement";
import education from "../../data/education";
import GlobalState, { doIt } from "../GlobalState";
import {InView} from "react-intersection-observer";




const Education: FC = () => {
    const [elements, setElements] = useContext(GlobalState); 

    return (
        <InView as="div" threshold={0.7} onChange={(inView, entry) => doIt(inView, 4, elements, setElements)}>
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
        </InView>
        
        
    )
}

export default Education  as any