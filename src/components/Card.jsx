import React from 'react'
// import { FaReact } from "react-icons/fa";

function Card(props) {
    const { item } = props;
    return (
        <>
            <a href={item.link} target='_blank' className={`flex  flex-col hover:cursor-pointer justify-center items-center w-[300px] gap-3 ${item.bg} transition-all border-2 border-neutral-700 py-4 px-8 rounded-lg hover:scale-105`} >
                {item.icon}
                <div className='text-xl font-semibold'>
                    {item.name}
                </div>
            </a>
        </>
    )
}

export default Card