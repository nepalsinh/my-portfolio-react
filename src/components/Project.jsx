import React from 'react'
import Card from './Card'
import { FaCss3Alt, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";

const projects = [
    {
        bg: 'hover:bg-yellow-500',
        link: 'https://randomhub.vercel.app/',
        // img: <FaHtml5 size={60} />,
        name: 'RandomHub'
    },
    {
        bg: 'hover:bg-cyan-500',
        link: 'https://linkagenetwork.vercel.app/',
        // img: <FaCss3Alt size={60} />,
        name: 'SocialMedia App'
    },
    {
        bg: 'hover:bg-green-500',
        link: 'https://github.com/Nepal7773/Food-recipe',
        // img: <IoLogoJavascript size={60} />,
        name: 'Food Recipe'
    },
    {
        bg: 'hover:bg-violet-500',
        link: 'https://github.com/Nepal7773/Spotify-Clone',
        // img: <SiTailwindcss size={60} />,
        name: 'Spotify Clone'
    }
];

function Project() {
    return (
        <div id='projects'>
            <div className='flex flex-col justify-center items-center py-5'>
                <div className='font-semibold text-2xl'>
                    PROJECTS
                </div>
                <div className='h-1 bg-white w-20 rounded-lg'>
                </div>
            </div>
            <div className='flex justify-around items-center my-6 flex-wrap gap-4'>
                {
                    projects.map((item, index) => (
                        <Card key={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Project