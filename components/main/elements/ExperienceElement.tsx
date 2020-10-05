import React, { FC, useState } from 'react'
import { Experience } from '../../../interfaces'


const ExperenceElement: FC<Experience> = ({data}) => {
    return (
        <div className="w-full flex flex-row justify-between">
            <div className="w-4 mr-2 flex flex-col items-center justify-center">
                <div className="w-4 h-4 rounded-full border-4 border-pink-500"/>
                <div className="w-1 h-full bg-gray-400"/>
            </div>
            <div className="flex sm:flex-row flex-col sm:w-11/12 w-full justify-between pb-8">
                <div className="text-xs font-bold text-gray-700 sm:px-1 sm:py-0 py-2">{data.date}</div>
                <div className="flex flex-col sm:w-8/12 w-full">
                    <div className="text-sm font-bold text-gray-600">{data.task}</div>
                    <div className="pt-2 text-sm font-semibold text-gray-800">{data.company}</div>
                    <div className="pt-2 text-sm text-gray-600">{data.description}</div>
                </div>
            </div>
        </div> 
    )
}


export default ExperenceElement as any