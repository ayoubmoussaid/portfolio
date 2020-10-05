import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const AppBar: FC = () => {
    const { ref, inView, entry } = useInView({threshold: 0,});
    const [_hover, setHover] = useState(false);

    const [color1, color2] = inView ? ["#1a202c", "#f7fafc"] :  ["#f7fafc" , "#1a202c"];

    return (
            <div className="w-full h-auto relative">
                <motion.div
                    animate={{backgroundColor: !inView ? "#1a202c": 'transparent'}} transition={{duration: 0.8}}
                    className={"w-full h-16 flex justify-between items-center md:pl-20 md:pr-12 px-4 md:w-2/3 fixed top-0 right-auto z-10"}
                >
                    <motion.div className="text-lg font-bold text-white">MOUSSAID AYOUB</motion.div>
                    <motion.button
                        animate={{backgroundColor: inView ? '#1a202c' : '#f7fafc' }}
                        transition={{duration: 0.8}}
                        onHoverStart={()=>setHover(true)}
                        onHoverEnd={()=>setHover(false)}
                        className={"px-3 py-2 rounded-sm text-sm font-semibold relative "}
                    >
                        <div className="opacity-0">DOWNLOAD RESUME</div>
                        <motion.div 
                            className={"h-full absolute top-0 left-0 "  + (inView ? 'bg-gray-100' : 'bg-pink-600') }
                            animate={{width: _hover ? "100%" : "0%"}} 
                            transition={{duration: 0.8}}>
                        </motion.div>
                        <motion.div
                            animate={{color: _hover ? color1 : color2}} 
                            transition={{duration: 0.8}}
                            className="w-full h-full absolute top-0 left-0 px-3 py-2">
                                DOWNLOAD RESUME
                        </motion.div>
                    </motion.button>
                </motion.div>
                <div ref={ref} className="h-16 w-full"></div>
            </div>
            
        
    )
}


export default AppBar