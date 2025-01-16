import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className='flex items-center justify-around w-full h-24   bg-[#473FAB] p-2'>
            <p className='text-orange-400 font-DanaDemiBold text-lg'> کارینو</p>
            <div className='flex items-center gap-x-5 text-white justify-between'>
                <Link href="/" className='p-1 mx-2 '>صفحه اصلی</Link>
                <Link href="/categories" className='p-1 mx-2 '>دسته بندی</Link>
                <Link href="/companies" className='p-1 mx-2 '>شرکت ها</Link>
                <Link href="/latest-jobs" className='p-1 mx-2 '>آخرین مشاغل</Link>
                <Link href="/top-rated">برترین ها</Link>
                <Link href="/login-register" className='p-1 mx-2 text-white/50 hover:text-white ease-in-out transition-all '>ثبت نام / ورود</Link>
            </div>
            <button className='rounded-md p-2 px-3 bg-orange-600 text-white'>آپلود رزومه</button>

        </div>
    )
}

export default Header