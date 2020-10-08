import React, { FC, useContext, useState } from 'react'
import SideBarElement from './sidebar/SideBarElement'
import myList from '../data/sidebardata'
import GlobalState from './GlobalState';


const SideBar: FC = () => {
    const [elements, setElements] = useContext(GlobalState);
    
    function checkClicked(id){
        setElements(elements.map(elt => {
            if (elt.id === id){
                return {
                    ...elt,
                    clicked: true,
                }
            }
            else 
                return {
                    ...elt,
                    clicked: false,
                }
            })
        )
    }

    return (
        <div className="md:w-1/3 w-0 hidden h-screen md:flex md:flex-col justify-center items-center fixed top-auto left-auto">
            <div className="md:flex flex-col items-start md:visible hidden">
                {elements.map(elt => {
                    return (
                        <SideBarElement key={elt.id}  checkClicked={checkClicked} data={elt} />
                    )
                })}
            </div>
        </div>
    )
}


export default SideBar as any