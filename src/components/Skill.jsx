import React from 'react'
import Card from './Card'
import { FaCss3Alt, FaDatabase, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
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
        icon: <SiMongodb size={60} />,
        name: 'MongoDB'
    },
    {
        bg: 'hover:bg-green-500',
        icon: <SiExpress size={60} />,
        name: 'Express Js'
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
        bg: 'hover:bg-violet-500',
        icon: <FaDatabase size={60} />,
        name: 'SQL'
    },
    {
        bg: 'hover:bg-fuchsia-500',
        icon: <FaPython size={60} />,
        name: 'Python'
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
                    skills.map((item, index) => (
                        <Card key={index} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skill