import Head from 'next/head'
import SideBar from '../components/SideBar'
import Main from '../components/Main'
import GlobalState from '../components/GlobalState'
import { useState } from 'react';
import myList from '../data/sidebardata';


export default function Home() {
  
  return (
    <div className="w-screen h-screen flex flex-row" >
        <div className="h-screen md:w-1/3 w-0">
          <SideBar />
        </div>
        <div className="h-screen md:w-2/3 w-full">
          <Main />
        </div>
    </div>
  )
}
