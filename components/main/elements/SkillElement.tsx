import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { Skill } from '../../../interfaces';


const SkillElement: FC<Skill> = ({data}) => {

    const { ref, inView, entry } = useInView({threshold: 0, triggerOnce: true});
    return (
        <div ref={ref} className='lg:w-5/12 w-full lg:mx-4 my-4 mx-0'>
            <motion.div
                className="flex flex-row justify-between w-0 items-center"
                initial={{width: '60%'}}
                animate={{width: inView && (data.level + '%'),}} 
                transition={{duration: 1}}>
                    <div className="text-gray-700 text-sm font-semibold">{data.title}</div>
                    <div className="text-gray-700 text-xs font-semibold">{data.level + '%'}</div>
            </motion.div>
            <div className="mt-3 h-2 relative w-full rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-400 absolute top-0 left-0"></div>
                <motion.div 
                    className="h-full bg-pink-600 absolute top-0 left-0"  
                    animate={{width: inView && (data.level + '%')}} 
                    transition={{duration: 1}}>
                </motion.div>
            </div>
        </div>
        
    )
}


export default SkillElement as any