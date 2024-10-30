import Image from 'next/image'
import React from 'react'
import FooterLogo from '../public/footer-logo.svg'
import Link from 'next/link'
import FooterGithub from '../public/githubFooter.svg'
import { newLogo2 } from '../public'

export default function Footer() {
  return (
    <section className='md:px-24 px-12 py-12 bg-[#0D1B2A] dark:bg-black z-10 bottom-0'>
        <div className='w-full md:flex md:items-start justify-between '>
            <Link href="/"> 
              <Image alt='Footer Logo' src={newLogo2} width={50} height={50} className='md:mr-32 mb-8 md:mb-0'/>
            </Link>
            <div className="flex flex-col w-[150px] mr-32 mb-8 md:mb-0">
                <Link href='/docs' className='text-[#4895EF] font-bold mb-4 hover:text-[#1478eb] w-[70px]'>Docs</Link>
            </div>
                <div className='flex flex-col w-[150px] mb-8 md:mb-0'>
                <Link href='/about-us' className='text-[#4895EF] font-bold mb-4 hover:text-[#1478eb] w-[90px]'>About</Link>
                </div>
                <div className='grow md:flex md:justify-end' >
                    <Link href="https://github.com/oslabs-beta/r3Dy" target='_blank' className="w-[40px] h-[40px] bg-[#415A77] hover:bg-[#4c6a8a] rounded-[100px] flex justify-center items-center " >
                    <Image alt="Footer Github Image" src={FooterGithub}/>
                    </Link>
                </div>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Detectify-AI © {new Date().getFullYear()} <span className="hover:underline">Detectify-AI</span>. All Rights Reserved.
                </span>
        </div>
    </section>
  )
}
