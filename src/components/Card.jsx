import React from 'react'
// import { FaReact } from "react-icons/fa";

function Card(props) {
    const { skill } = props;
    return (
        <div className={`flex flex-col justify-center items-center w-[300px] gap-3 ${skill.bg} transition-all border-2 border-neutral-700 py-4 px-8 rounded-lg hover:scale-105`} >
            {skill.icon}
            <div className='text-xl font-semibold'>
                {skill.name}
            </div>
        </div>
    )
}

export default Card