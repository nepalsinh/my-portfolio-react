import React from 'react'
import Card from './Card'
import { FaCss3Alt, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";

const skills = [
    {
        bg: 'hover:bg-yellow-500',
        icon: <FaHtml5 size={60} />,
        name: 'HTML'
    },
    {
        bg: 'hover:bg-cyan-500',
        icon: <FaCss3Alt size={60} />,
        name: 'CSS'
    },
    {
        bg: 'hover:bg-green-500',
        icon: <IoLogoJavascript size={60} />,
        name: 'Java Script'
    },
    {
        bg: 'hover:bg-violet-500',
        icon: <SiTailwindcss size={60} />,
        name: 'Tailwind CSS'
    },
    {
        bg: 'hover:bg-red-500',
        icon: <FaReact size={60} />,
        name: 'React Js'
    },
    {
        bg: 'hover:bg-cyan-500',
        icon: <DiNodejs size={60} />,
        name: 'Node Js'
    },
    {
        bg: 'hover:bg-orange-500',
        icon: <TbBrandCpp size={60} />,
        name: 'C++'
    },
    {
        bg: 'hover:bg-fuchsia-500',
        icon: <FaJava size={60} />,
        name: 'Java'
    },

];

function Skill() {
    return (
        <div id='skills'>
            <div className='flex flex-col justify-center items-center py-5'>
                <div className='font-semibold text-2xl'>
                    SKILLS
                </div>
                <div className='h-1 bg-white w-20 rounded-lg'>
                </div>
            </div>
            <div className='flex justify-around items-center my-6 flex-wrap gap-4'>
                {
                    skills.map((skill, index) => (
                        <Card key={index} skill={skill} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skill