

import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'

interface props {
    inView: boolean;
    widget: JSX.Element;
    onClicked: CallableFunction;
    colorChange: CallableFunction;
}

const CustomButton: FC<props> = ({inView, onClicked, widget, colorChange}) => {
    const [_hover, setHover] = useState(false);
    const [color1, color2] = inView ? ["#1a202c", "#f7fafc"] :  ["#f7fafc" , "#1a202c"];

    if(!_hover)
        colorChange && colorChange(color2);
    return (
        <motion.button
            initial={{backgroundColor: '#1a202c', x:-10}}
            animate={{backgroundColor: inView ? '#1a202c' : '#f7fafc', x: 0}}
            transition={{duration: 0.5}}
            onTap={()=> onClicked()}
            onHoverStart={()=>{setHover(true); colorChange && colorChange(color1)}}
            onHoverEnd={()=>{setHover(false); colorChange && colorChange(color2)}}
            className={"rounded-sm text-sm font-semibold relative md:w-48 sm:h-10 sm:w-10 h-8 w-8"}
        >
            <motion.div
                initial={{width: '0%'}}
                className={"h-full w-full absolute top-0 left-0 "  + (inView ? 'bg-gray-100' : 'bg-pink-600') }
                animate={{width: _hover ? "100%" : "0%"}} 
                transition={{duration: 0.5, ease:"easeInOut"}}>
            </motion.div>
            <motion.div
                initial={{width:"100%", color: color2}}
                animate={{color: _hover ? color1 : color2, }} 
                transition={{duration: 0.5}}
                className="absolute top-0 left-0 flex items-center justify-items-center justify-center w-full h-full">
                    {widget}
            </motion.div>
        </motion.button> 
    )
}


export default CustomButton