import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'
import { Work } from '../../../interfaces'

const WorkElement: FC<Work> = ({data}) => {
    return (
        <div className='lg:w-5/12 w-full flex flex-col justify-between lg:mx-4 my-4 mx-0 rounded-md overflow-hidden border-gray-600 border py-2 px-3'>
            <div>
                <div className="text-lg font-bold text-gray-800">{data.title}</div>
                <div className="my-2 text-sm font-semibold text-gray-700">{data.text}</div>
            </div>
            <div className="flex flex-row">
                {
                    data.language.map(elt => {
                        return (
                            <div key={elt} className=" border overflow-hidden rounded-sm border-gray-600 mr-2 my-1 px-2 py-1 text-gray-800 text-sm font-semibold">
                                {elt}
                            </div>
                        )
                    })
                }
            </div>
        </div>  
    )
}


export default WorkElement as any