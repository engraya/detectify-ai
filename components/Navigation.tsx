'use client'

import React, { useState, useEffect } from 'react'
import { store } from '../src/app/store/store'
import { toggleDarkMode } from '../src/app/store/Features/darkmode/darkModeSlice'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { newLogo2 } from '../public'



declare const window: any;
export default function Navigation() {
  const pathname = usePathname();
  const [dropdown, setDropdown] = useState(false)
  const [darkMode, setDarkMode] = useState(false);
  
  let dropdownActive: string = 'dark:darkmode-background md:hidden flex fixed flex-col z-20 ease-linear transition-all duration-300 top-0 w-full bg-white border-b dark:border-none overflow-hidden drop-shadow-lg p-2 mt-[60px] max-h-full';
  let dropdownInactive: string = 'dark:darkmode-background md:hidden z-20 fixed ease-linear transition-all duration-300 top-0 w-full bg-white px-2 overflow-hidden mt-[60px] max-h-0';
  
  const darkModeState = store.getState().darkMode.value;

  const enableDarkMode = () => {
    setDarkMode(!darkMode);
    store.dispatch(toggleDarkMode())
  };

  useEffect(() => {
    const preferDark = window.watchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (preferDark) {
      setDarkMode(true);
      store.dispatch(toggleDarkMode())
    }
  },[]);

  useEffect(() => {
    if (darkModeState) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  },[darkModeState]);


  return (
    <>
      <nav className='md:px-8 z-20 fixed top-0 flex w-full items-center py-2 px-4 justify-between border border-slate-200 dark:border-slate-700 bg-white dark:darkmode-background'>

        {/* LOGO */}

        <div className='flex items-center w-full'>
          <Link href='/' >
            <Image width={50} height={50} src={newLogo2} alt='r3dy-logo-full' />
          </Link>
        </div>

        {/* DOCS & ABOUT US */}
        <div className='md:flex hidden w-full h-full items-center justify-center'>
          <Link href='/' className={(pathname.includes('/')) ? 'nav-link-active' : 'nav-link my-0'}> 
            <p className='flex items-center'>Home</p>
          </Link>

          <Link href='/about-us' className={(pathname.includes('/about-us')) ? 'nav-link-active' : 'nav-link'}>
            <p className='flex items-center'>About</p>
          </Link>
          <Link href='/detect' className={(pathname.includes('/detect')) ? 'nav-link-active' : 'nav-link my-0'}> 
            <p className='flex items-center'>Detect</p>
          </Link>
        </div>

        <div className='flex w-full h-full justify-end'>
          <button className='nav-link p-2 mr-2 bg-white rounded-md hover:bg-slate-200 flex items-center' onClick={enableDarkMode}><Image width={28} height={28} src={ !darkModeState ? '/moon.svg' : '/sun-white.svg'} alt={ !darkModeState ? 'moon-icon' : 'sun-icon'} /></button>
          <Link href='https://github.com/oslabs-beta/r3Dy' target='_blank' className='nav-link p-2 bg-white rounded-md hover:bg-slate-200'><Image width={26} height={26} src={darkModeState ? '/github-white.svg' : '/github.svg'} alt='github-icon' /></Link>

          {/* MOBILE HAMBURGER */}
          <button className='nav-link md:hidden p-2 ml-2 bg-white rounded-md hover:bg-slate-200 flex items-center' onClick={() => { setDropdown(!dropdown) }} ><Image width={24} height={24} src={darkModeState ? '/menu-white.svg' : '/menu.svg'} alt='menu-icon' /></button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}

      <div className={dropdown ? dropdownActive : dropdownInactive}>
        <Link href='/' className={(pathname.includes('/')) ? 'nav-link-active' : 'nav-link'} onClick={() => setDropdown(false)}>
          Home
        </Link>
        <Link href='/about-us' className={(pathname.includes('/about-us')) ? 'nav-link-active' : 'nav-link'} onClick={() => setDropdown(false)}>
          About
        </Link>
        <Link href='/detect' className={(pathname.includes('/detect')) ? 'nav-link-active' : 'nav-link'} onClick={() => setDropdown(false)}>
          Detect
        </Link>
      </div>

    </>
  )
}