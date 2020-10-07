import React, { FC, useState } from 'react'
import {motion} from 'framer-motion'
import { Elementt } from '../../../interfaces';



const MenuItem: FC<Elementt> = ({checkClicked, data}) => {
    let [_hover, setHovered] = useState(false);

    function verify(){
        checkClicked(data.id);
        document.getElementById(data.title.toLowerCase()+'-sec').scrollIntoView({behavior:"smooth"});
    }

    return ( 
        <div className="mx-4 my-2 flex border-t border-gray-500 items-center justify-center">
            <motion.div
                onTap={()=>verify()}
                onHoverStart={()=>setHovered(true)}
                onHoverEnd={()=>setHovered(false)}
                className="w-full h-4 cursor-pointer m-3"
            >
                <motion.div 
                    animate={{
                        color: data.clicked ? "#718096" : (_hover ? "#718096": "#f7fafc"),
                        scale: data.clicked ? 0.9 : 1,
                    }}
                    transition={{ 
                        ease: "easeInOut", duration: 0.3,
                    }}
                    className="text-sm font-semibold text-gray-100 w-full"
                >
                    {data.title}
                </motion.div>
            </motion.div>
        </div>
    )
}


export default MenuItem as any