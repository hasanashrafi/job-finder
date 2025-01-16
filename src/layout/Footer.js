import React from 'react'

function Footer() {
    return (
        <div className='bg-[#473FAB] h-48 text-center flex items-center text-gray-400 justify-between'>
            <div className='w-1/3 h-full p-3 flex flex-col items-center gap-3 '>
                <p className=' w-36 p-2 text-xl font-DanaMedium mb-4 text-white'>کارینو</p>
                <p className='text-sm text-justify m-1 text-orange-300  p-1'> اینجا شغل دلخواهتو پیدا کن
                    اینجا شغل دلخواهتو پیدا کن
                    اینجا شغل دلخواهتو پیدا کن
                </p>
                <p className='text-xs text-justify text-gray-200'>
                    تمامی حقوق این وبسایت متعلق به شرکت HsN میباشد
                </p>
            </div>
            <div className='w-1/3 flex flex-col items-center h-full p-3 '>
                <p className=' w-36 p-2 text-xl font-DanaMedium mb-4 text-white'>دسترسی سریع</p>
                <div className='flex flex-col gap-3 '>
                    <a href='#' className='hover:text-white ease-in-out transition-all'>درباره ما</a>
                    <a href='#' className='hover:text-white ease-in-out transition-all'>خدمات ما</a>
                    <a href='#' className='hover:text-white ease-in-out transition-all'>تماس با ما</a>

                </div>
            </div>
            <div className='w-1/3 flex flex-col items-center h-full p-3 '>
            <p className=' w-36 p-2 text-xl font-DanaMedium mb-4 text-white'>تماس با ما</p>
            <p>آدرس: مرند-خیابان شهدا- پلاک 89</p>
            <p>تلفن: 09123456789</p>

            </div>

        </div>
    )
}

export default Footer