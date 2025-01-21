import React from 'react'

function SearchBox() {
    return (
        <div className='w-full font-Dana h-[500px] mx-auto flex bg-[#473FAB] rounded-tr-3xl rounded-bl-3xl'>
            <div className='w-1/2 h-full  flex flex-col justify-around items-center p-2'>
                <div>
                    <h1 className='text-4xl p-2 font-DanaDemiBold text-white'>
                        شغل رویاییت رو اینجا پیدا میکنی
                    </h1>
                    <p className='text-orange-400 text-2xl p-2'>
                        همه شرکتا دنبال تو میگردن ....                </p>

                </div>
                <div className=' mx-auto  m-4 w-full text-gray-300'>
                    <p className='p-2 m-2'>اینجا میتونی شغل ایده آل خودت رو با اسم یا تخصص پیدا کنی</p>
                    <div className='flex items-center'>
                        <input className='w-[80%] rounded-xl p-2 outline-none m-2' placeholder='پیداش کن' />
                        <button className='w-[30%] h-10 bg-cyan-500 hover:bg-cyan-600 ease-in-out transition-all rounded-xl '>جست و جو</button>
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