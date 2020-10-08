import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'
import { Service } from '../../../interfaces'


const ServiceElement: FC<Service> = ({data}) => {
    let [_hover, setHover] = useState(false)

    return (
        <motion.div 
            className="w-40 my-6 mx-2 py-6 px-3 flex flex-col items-center justify-center" 
            onHoverStart={() => setHover(true)}
            onHoverEnd={()=>setHover(false)}>

            <motion.div 
                animate={{ 
                    rotateY: _hover ? 180 : 0,
                }}
                transition={{ duration: 0.5 }}
                className={"text-gray-800 " + (_hover? "text-gray-800" :"sm:text-gray-500")}>
                    {data.path}
            </motion.div>
            
            
            <div className="mt-6 text-gray-800 font-semibold">
                 {data.title}
            </div>
        </motion.div>
    )
}


export default ServiceElement as any