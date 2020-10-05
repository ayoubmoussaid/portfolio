import { motion } from 'framer-motion'
import React, { FC, useState } from 'react'
import Typewriter from 'typewriter-effect';
import GraphemeSplitter from "grapheme-splitter";
import { Element } from '../../interfaces/index'
import { useInView } from 'react-intersection-observer';

const About: FC<Element> = () => {
    const stringSplitter = string => {
        const splitter = new GraphemeSplitter();
        return splitter.splitGraphemes(string);
      };

    return (
        <div id="about-sec" className="w-full h-full flex flex-col">
            <div className="py-8 h-16 w-full "/>
            <div className="sm:px-20 px-4 pt-24 h-full w-full bg-gray-100 text-gray-900 sm:rounded-tl-md flex flex-col">
                <img src="/assets/profile.jpeg" className="w-32 h-32 rounded-full"/>
                <div className="text-3xl text-gray-900 font-semibold pt-16">
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
                Award winning interdisciplinary Designer & Photographer. Currently pursuing a perfect blend of style and function for a wide range of interactive graphic design. For the past 6 years I've helped global companies, organizations and start-ups reach business goals with user focused, interactive design. I enjoy bringing clarity to complex problems with a people first approach.
            </div>
            <div className="sm:px-20 px-4 pt-10 pb-20 bg-gray-100 text-gray-700">
                Find me on <a className="hover:underline" href="https://www.linkedin.com/in/ayoub-moussaid/"><b>LinkedIn</b></a> & <a className="hover:underline" href="https://twitter.com/ayoubmoussaid6"><b>Twitter</b></a>.
            </div>
        </div>
    )
}


export default About as any