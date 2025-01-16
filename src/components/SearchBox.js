import React from 'react'

function SearchBox() {
    return (
        <div className='w-full font-Dana h-[500px] mx-auto flex bg-[#473FAB]'>
            <div className='w-1/2 h-full  flex flex-col justify-around items-center p-3'>
                <div>
                <h1 className='text-2xl p-2 font-DanaDemiBold text-white'>
                    شغل رویاییت رو اینجا پیدا کن
                </h1>
                <p className='text-orange-400 text-2xl'>
                    همه منتظر تو هستن
                </p>

                </div>
                <div className=' mx-auto  m-4 w-full text-gray-300'>
                    <p>اینجا میتونی شغل ایده آل خودت رو با اسم یا تخصص پیدا کنی</p>
                    <div className='flex items-center'>
                    <input className='w-[80%] rounded-xl p-2 outline-none m-2' placeholder='پیداش کن'/>
                    <button className='w-[30%] h-10 bg-cyan-500 rounded-xl '>جست و جو</button>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <img src='/images/image 20.png' className=' size-96 ' />
            </div>
        </div>
    )
}

export default SearchBox