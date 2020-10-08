
import React, { FC, useContext, useState } from 'react'
import {InView}from 'react-intersection-observer';
import whatido from '../../data/service'
import GlobalState, { doIt } from '../GlobalState';
import ServiceElement from './elements/ServiceElement'





const Services: FC = () => {
    const [elements, setElements] = useContext(GlobalState);

    return (
        <InView as="div" threshold={0.4} onChange={(inView, entry) => doIt(inView, 1, elements, setElements)}>
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
        </InView>
    )
}


export default Services as any