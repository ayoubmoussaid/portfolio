import React, { Dispatch, SetStateAction, useContext }  from 'react';

const GlobalState = React.createContext([
    [] as any, 
    (() => {}) as Dispatch<SetStateAction<{id: number;title: string; clicked: boolean;}[]>>]
);

export default GlobalState;

export function doIt(inView: boolean, id: number, elements, setElements){

    if(inView){
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
        })); 
    }
}