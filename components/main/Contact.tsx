import React, { FC, useContext, useEffect } from "react"
import { useInView } from "react-intersection-observer";
import GlobalState from "../GlobalState";

const Contact: FC = () => {
    // const [elements, setElements] = useContext(GlobalState);
    const { ref, inView, entry } = useInView({threshold: 0,});
    
    
    /* if(inView){
        console.log(inView)
        setTimeout(setElements(elements.map(elt => {
            if (elt.id === 6){
                return {
                    ...elt,
                    clicked: true,
                }
            }
            else 
                return {
                    ...elt,
                    clicked: false,
                }
        })), 3000);
        
    } */
        
        

    return (
        <div ref={ref} id="contact-sec">
            <hr/>
            <div className="sm:px-20 px-4 pt-20 pb-20 bg-gray-100 block">
                <div className=" bg-gray-100 text-pink-600 text-base font-semibold">
                    Contact
                </div >
                <div className="flex flex-col pt-8">
                    <div className="text-gray-700">You can reach me by Email at <a className="hover:underline" href="mailto:ayoubmoussaid71@gmail.com"><b>ayoubmoussaid71@gmail.com</b></a></div>
                    <div className="pt-5 text-gray-700">
                        Or you can find me on <a className="hover:underline" href="https://www.linkedin.com/in/ayoub-moussaid/"><b>LinkedIn</b></a> & <a className="hover:underline" href="https://twitter.com/ayoubmoussaid6"><b>Twitter</b></a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact as any