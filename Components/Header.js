"use client"
import About from '@/app/Images/page'
import Services from '@/app/Services/page'
import Documentation from '@/app/Documentation/page'
import ContactUs from '@/app/ContactUs/page'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <div className='h-auto bg-green-500 w-screen flex items-center justify-between px-5 py-10'>
            <p><Link href='/'>Logo</Link></p>
            <ul className='flex gap-10'>
                <Link href='/Images'>Images </Link>
                <Link href='/Services'>Services </Link>
                <Link href='/Documentation'>Documentation </Link>
                <Link href='/ContactUs'>Contact Us </Link>
            </ul>
        </div>
    </>
  )
}

export default Header