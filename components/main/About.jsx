import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'
import GraphemeSplitter from "grapheme-splitter";

import Typewriter  from 'typewriter-effect';

function About() {
    const stringSplitter = string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
    };

    return (
        <div id="about-sec" className="w-full h-full flex flex-col">
            <div className="py-8 sm:h-16 h-12 w-full "/>
            <div className="sm:px-20 px-4 pt-24 h-full w-full bg-gray-100 text-gray-900 sm:rounded-tl-md flex flex-col">
                <img src="/assets/profile.jpeg" className="w-32 h-32 rounded-full"/>
                <div className="sm:text-3xl text-2xl text-gray-900 font-semibold pt-16">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: false,
                            stringSplitter
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Hey 👋🏼! I Am Ayoub.<br>I Am A Software Engineer.<br>And I Make Apps.')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .start();
                        }}
                    />
                    {/* <p>Hey 👋🏼! I Am Ayoub.</p>
                    <p>I Am A Software Engineer.</p>
                    <p>& I Make Apps.<span className="font-extrabold animate-pulse">|</span></p> */}
                </div>
            </div>
            <div className="sm:px-20 px-4 pt-24 bg-gray-100 text-pink-600 text-base font-semibold">
                ABOUT
            </div>
            <div className="sm:px-20 px-4 pt-10 bg-gray-100 text-gray-700">
                Currently software engineer student at Faculty of Science and Technologies-Settat, also studying at 1337 Coding School(42 Network). I am more passionate by mobile developement but I do Web and APIs as well.<br/>
                I also love graphics Cards (I don't have any nonetheless).
            </div>
            <div className="sm:px-20 px-4 pt-5 bg-gray-100 w-full font-Dr-Sugiyama text-4xl text-gray-900">
                Moussaid Ayoub
                 {/* <img src="/assets/Moussaid Ayoub.png" className="h-16 w-48"/> */}
            </div>
            <div className="sm:px-20 px-4 pt-10 pb-20 bg-gray-100 text-gray-700">
                Find me on <a className="hover:underline" href="https://www.linkedin.com/in/ayoub-moussaid/"><b>LinkedIn</b></a> & <a className="hover:underline" href="https://twitter.com/ayoubmoussaid6"><b>Twitter</b></a>.
            </div>
        </div>
    )
}


export default About