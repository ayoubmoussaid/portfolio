
import React, { FC, useState } from 'react'
import whatido from '../../data/service'
import ServiceElement from './elements/ServiceElement'





const Services: FC = () => {
    return (
        <div id="services-sec">
            <hr/>
            <div className="sm:px-20 px-4 pt-20 pb-8 bg-gray-100 block">
                <div className=" bg-gray-100 text-pink-600 text-base font-semibold">
                    WHAT I DO
                </div >
                <div className="flex flex-wrap pt-8 w-full items-center justify-center">
                    {
                        whatido.map(elt => {
                            return <ServiceElement key={elt.id} data={elt}/>
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}


export default Services as any