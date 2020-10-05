import React, { FC, useState } from 'react'
import About from './main/About'
import AppBar from './main/AppBar'
import Services from './main/Services'
import Skills from './main/Skills'
import Work from './main/Works'
import Education from "./main/Education"
import Experience from './main/Experience'
import Contact from './main/Contact'
import Footer from './main/Footer'


const Main: FC = ({}) => {

    return (
        <div className="flex flex-col justify-items-auto">
            <AppBar />
            <About />
            <Services />
            <Skills />
            <Work />
            <Education />
            <Experience />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main