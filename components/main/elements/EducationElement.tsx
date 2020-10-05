import React, { FC, useState } from 'react'
import { Education } from '../../../interfaces'


const EducationElement: FC<Education> = ({data}) => {
    return (
        <div className='flex flex-col sm:flex-row w-full border-t border-b border-gray-400 sm:justify-between sm:px-5 sm:py-4 py-2 sm:items-center items-start'>
            <div className="sm:p-1 py-2 w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex justify-center items-center">{data.id}</div>
            <div className="sm:p-1 py-2 sm:w-1/4 text-xs font-bold text-gray-800">{data.date}</div>
            <div className="sm:p-1 py-2 sm:w-1/4 text-sm text-gray-800 font-semibold">{data.location}</div>
            <div className="sm:p-1 py-2 sm:w-1/4 text-sm text-gray-600 font-semibold">{data.diploma}</div>
        </div>  
    )
}


export default EducationElement as any