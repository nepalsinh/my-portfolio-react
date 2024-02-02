import React from 'react'

function Contact() {
    return (
        <div id='contact' className=''>
            <div className='flex flex-col justify-center items-center py-8'>
                <div className='font-semibold text-2xl'>
                    Have Any Quetion ?
                </div>
                <div className='h-1 bg-white w-20 rounded-lg'>
                </div>
            </div>
            <form action="https://formspree.io/f/mgegaobj" method='POST' className='flex mx-3 flex-col justify-center items-center my-6' >
                <div className='flex flex-col w-1/2 max-sm:w-full '>
                    <label className='font-semibold text-xl' htmlFor="name">Name<sup className='text-red-700'>*</sup> :</label>
                    <input className='rounded-lg placeholder-black p-2 my-2 text-black' type="text" name="name" id="name" placeholder='Enter your name' required />
                </div>
                <div className='flex flex-col w-1/2 max-sm:w-full '>
                    <label className='font-semibold text-xl' htmlFor="email">Email<sup className='text-red-700'>*</sup> :</label>
                    <input className='rounded-lg placeholder-black p-2 my-2 text-black' type="text" name="email" id="email" placeholder='Enter your email id' required />
                </div>
                <div className='flex flex-col w-1/2 max-sm:w-full '>
                    <label className='font-semibold text-xl' htmlFor="quetion">Quetion?<sup className='text-red-700'>*</sup> :</label>
                    <textarea className='rounded-lg placeholder-black p-2 my-2 text-black' name="quetion" id="quetion" cols="30" rows="5" placeholder='Write here ...' required></textarea>
                </div>
                <div className='w-1/2 max-sm:w-full'>
                    <button className='w-full bg-white text-black rounded-lg  hover:shadow-lg hover:shadow-zinc-500/50' type='submit'>
                        SEND
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact