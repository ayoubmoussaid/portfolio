import { motion } from 'framer-motion'
import React, { FC, useContext, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import myList from '../../data/sidebardata';
import GlobalState from '../GlobalState';
import CustomButton from './elements/CustomButton';
import MenuItem from './elements/MenuItem';
import Burger from './elements/ToggleMenu';

const AppBar: FC = () => {
    const { ref, inView, entry } = useInView({threshold: 0,});
    const [state, setState] = useState(false);
    const [color, setColor] = useState("#1a202c");
    const link = "/Moussaid-Ayoub.pdf";

    const [elements, setElements] = useContext(GlobalState);
    
    function checkClicked(id){
        setState(false)
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
            <div className="w-full h-auto relative">
                <motion.div
                    animate={{backgroundColor: (!inView || state) ? "rgba(26, 33, 45, 1)": "rgba(26, 33, 45, 0)"}} transition={{duration: 0.5}}
                    className={"w-full sm:h-16 h-12 flex justify-between items-center md:pl-20 md:pr-12 px-4 md:w-2/3 fixed top-0 right-auto z-10"}
                >
                    <motion.div initial={{x : -10}} animate={{x : 0}} className="md:text-xl font-bold text-white font-josefin-sans">MOUSSAID AYOUB</motion.div>
                    <div className="md:block hidden">
                        <CustomButton
                            link={link}
                            inView={inView}
                            colorChange={null}
                            onClicked={()=>{}} 
                            widget={<div>DOWNLOAD RESUME</div>}
                        />
                    </div>
                    <div className="md:hidden flex">
                        <div className="mr-2">
                            <CustomButton
                            link={link}
                            colorChange={null}
                            inView={inView} 
                            onClicked={()=>{}} 
                            widget={<svg className="fill-current h-6 w-6" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g id="Solid"><path d="m239.029 384.97a24 24 0 0 0 33.942 0l90.509-90.509a24 24 0 0 0 0-33.941 24 24 0 0 0 -33.941 0l-49.539 49.539v-262.059a24 24 0 0 0 -48 0v262.059l-49.539-49.539a24 24 0 0 0 -33.941 0 24 24 0 0 0 0 33.941z"/><path d="m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z"/></g></svg>}
                            />
                        </div>
                        <div className="ml-2">
                            <CustomButton
                            link=""
                            inView={inView}
                            colorChange={setColor}
                            onClicked={()=> setState(prev => !prev)} 
                            widget={<Burger isOpen={state} color={color}/>} />
                        </div>
                    </div>
                </motion.div>
                <div ref={ref} className="sm:h-16 h-12 w-full"></div>
                <motion.div 
                    initial= {{height: 0, opacity:0, }} 
                    animate={{height: state ? "auto" : "0", opacity: state? 1 : 0, visibility: state ? 'visible':'collapse'}} 
                    transition={{duration: 0.5}} 
                    className="h-48 w-full bg-gray-900 text-gray-100 fixed z-10">   
                        {elements.map(elt => {
                            return (
                                <motion.div key={elt.id} initial={{x:-10, opacity:0}} animate={{x: state ? 0 : -10, opacity: state ? 1 : 0}} transition={{delay: 0.2}}><MenuItem  checkClicked={checkClicked} data={elt} /></motion.div>
                            )
                        })}
                </motion.div>
                
            </div>
            
        
    )
}


export default AppBar


/* <motion.button
    animate={{backgroundColor: inView ? '#1a202c' : '#f7fafc' }}
    transition={{duration: 0.8}}
    onHoverStart={()=>setHover(true)}
    onHoverEnd={()=>setHover(false)}
    className={"px-3 py-2 rounded-sm text-sm font-semibold relative md:block hidden"}
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
</motion.button>  */