import React from 'react';
import { SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { SiCodingninjas } from "react-icons/si";

function About() {
    return (
        <div id='about' className=''>
            <div className='flex flex-col justify-center items-center py-5'>
                <div className='font-semibold text-2xl'>
                    ABOUT ME
                </div>
                <div className='h-1 bg-white w-20 rounded-lg'>
                </div>
            </div>
            <div className='flex justify-center items-center gap-2 max-md:flex-col'>
                <div className='flex  flex-1 flex-col justify-center items-center border-r-2 max-md:border-b-[1px] max-md:border-r-0'>
                    <div>
                        <img className='rounded-full w-40' src="/profile.png" alt="" />
                    </div>
                    <div className='flex flex-col items-center my-2'>
                        <h1 className=''>Nepalsinh Rajput</h1>
                        <div className='h-1 bg-white w-20 rounded-lg'>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <a href='https://www.codechef.com/users/nepalsinh_018' target='_blank' className='flex items-center gap-4'>
                            <SiCodechef />
                            <p>CodeChef</p>
                        </a>
                        <a href='https://github.com/nepalsinh/' target='_blank' className='flex items-center gap-4'>
                            <FaGithub />
                            <p>Github</p>
                        </a>
                        <a href='mailto:nepalsinhrajput007773@gmail.com' className='flex items-center gap-4'>
                            <IoMail />
                            <p>Mail ME</p>
                        </a>
                    </div>
                </div>
                {/* <div className='w-[.5px] bg-white h-[70vh] rounded-lg'>
                </div> */}
                <div className='flex-1 flex flex-col justify-center items-center'>
                    <div className='w-1/2 max-md:w-full max-sm:text-center mx-10 font-semibold'>
                        Welcome to my portfolio website. My name is Nepal. I am a web developer and competitive Programmer.Throughout my career, I have worked on various projects and initiatives that have helped me Sharp my skills in web development. I have extensive knowledge of programming languages including C++, java, Javascript, Node js, ReactJs, NextJS etc. I have used my programming skills to develop many project which given below.
                    </div>
                    <div className='flex flex-col my-5'>
                        <a href='https://leetcode.com/nepalsinh_018/' target='_blank' className='flex items-center gap-4'>
                            <SiLeetcode />
                            <p>LeetCode</p>
                        </a>
                        <a href='https://www.codingninjas.com/studio/profile/60e4b0fe-c835-4be9-8e45-957e286c27e9' target='_blank' className='flex items-center gap-4'>
                            <SiCodingninjas />
                            <p>Codingninjas</p>
                        </a>
                        <a href='https://www.linkedin.com/in/nepalsinhrajput/' target='_blank' className='flex items-center gap-4'>
                            <IoLogoLinkedin />
                            <p>LinkedIn</p>
                        </a>
                        <a href='https://www.instagram.com/nepalsinhrajput/' target='_blank' className='flex items-center gap-4'>
                            <FaInstagram />
                            <p>Instagram</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About