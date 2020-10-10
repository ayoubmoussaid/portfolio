import React, { FC, useState } from 'react'
import {motion} from 'framer-motion'
import { Elementt } from '../../interfaces';



const SideBarElement: FC<Elementt> = ({checkClicked, data}) => {
    let [_hover, setHovered] = useState(false);
 
    function verify(){
        checkClicked(data.id);
        document.getElementById(data.title.toLowerCase()+'-sec').scrollIntoView({behavior:"smooth"});
    }

    return ( 
        <div className="mx-4 my-2 flex items-center justify-center">
            <motion.div
                onTap={()=>verify()}
                onHoverStart={()=>setHovered(true)}
                onHoverEnd={()=>setHovered(false)}
                className="bg-gray-200 w-2 h-2 cursor-pointer rounded-full m-3"
            />
            <motion.div
                initial={{x : data.clicked ? 0 : 60, opacity : data.clicked ? 1 : 0}}
                animate={{
                    x: data.clicked ? 0 :(_hover ? 0 : 60),
                    opacity: data.clicked ? 1 :(_hover ? 1 : 0),
                }}
                transition={{ 
                    ease: "easeInOut", duration: 0.5,
                }}
                className="text-sm font-semibold font-sans text-gray-200"
            >
                {data.title}
            </motion.div>
        </div>
    )
}


export default SideBarElement as any