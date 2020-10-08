import Head from 'next/head'
import SideBar from '../components/SideBar'
import Main from '../components/Main'
import GlobalState from '../components/GlobalState'
import { useState } from 'react';
import myList from '../data/sidebardata';


export default function Home() {
  const [elements, useElements] = useState(myList)
  return (
    <GlobalState.Provider value={[elements, useElements]}>
      <div className="w-screen h-screen flex flex-row font-cabin tracking-wide" >
        <div className="h-screen md:w-1/3 w-0 z-0">
          <SideBar />
        </div>
        <div className="h-screen md:w-2/3 w-full z-0 overflow-x-hidden">
          <Main />
        </div>
      </div>
    </GlobalState.Provider>
    
  )
}
