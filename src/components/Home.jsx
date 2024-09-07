import React from 'react'

function Home() {
    return (
        <div id='home' className='flex max-lg:flex-col justify-center items-center gap-3 my-3 lg:h-screen'>
            <div className='md:flex-1  flex justify-center items-center'>
                <img className='w-[200px] h-[200px] rounded-lg' src="/profile.png" alt="" />
            </div>
            <div className='flex-1 flex flex-col gap-2 max-lg:items-center justify-center'>
                <div className='font-semibold text-5xl max-md:text-3xl'>Hello I'm</div>
                <div className='font-semibold text-5xl max-md:text-3xl text-orange-600'>Nepalsinh Rajput</div>
                <div className=' text-2xl'>I am Programmer</div>
                <div className='flex gap-3 items-center'>
                    <a href='#contact' className='bg-neutral-800 px-3 py-2 rounded-sm hover:scale-95 transition-all' >Contact ME</a>
                    <a href='/Nepalsinh_Rajput.pdf' target='_blank' className='bg-white text-black px-4 py-2 rounded-sm hover:scale-95 transition-all' >RESUME</a>
                </div>
            </div>
        </div>
    )
}

export default Home