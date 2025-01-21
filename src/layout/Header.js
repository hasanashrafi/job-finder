'use client'

import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className=" flex items-center justify-between px-10 w-full h-24 bg-[#473FAB] p-2">
     
      <div className="hidden md:flex items-center gap-x-5 text-white justify-between">
        <Link href="/" className="p-1  ">صفحه اصلی</Link>
        <Link href="/categories" className="p-1  ">دسته بندی</Link>
        <Link href="/companies" className="p-1  ">شرکت ها</Link>
        <Link href="/latest-jobs" className="p-1  ">آخرین مشاغل</Link>
        <Link href="/top-rated">برترین ها</Link>
      <Link href="/resume" className="rounded-md p-2 px-3 bg-orange-600 text-white">
      آپلود رزومه
      </Link>
        <Link href="/login-register" className="p-1  text-white/50 hover:text-white ease-in-out transition-all ">ثبت نام / ورود</Link>
      </div>
      <button
        className="md:hidden flex justify-center items-center w-8 h-8  "
        onClick={handleMenuToggle}
      >
        <svg
          className="size-7 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    
      <p className="text-orange-400 font-DanaDemiBold text-3xl"> کارینو</p>
    
      {menuOpen && (
        <div
          className="fixed top-0 right-0 w-1/2 backdrop-blur-lg h-screen bg-white z-50 p-4"
          style={{ transform: 'translateX(0)' }}
        >
          <button
            className="absolute top-4 right-4 "
            onClick={handleMenuToggle}
          >
            <svg
              className="w-4 h-4 text-orange-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className='m-4'>
            <li>
              <Link href="/" className="p-2 block">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link href="/categories" className="p-2 block">
                دسته بندی
              </Link>
            </li>
            <li>
              <Link href="/companies" className="p-2 block">
                شرکت ها
              </Link>
            </li>
            <li>
              <Link href="/latest-jobs" className="p-2 block">
                آخرین مشاغل
              </Link>
            </li>
            <li>
              <Link href="/top-rated" className="p-2 block">
                برترین ها
              </Link>
            </li>
            <li>
              <Link href="/login-register" className="p-2 block">
                ثبت نام / ورود
              </Link>
            </li>
          </ul>
        </div>
      )}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/50 z-40"
          onClick={handleMenuToggle}
        />
      )}
    </div>
  )
}

export default Header