import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import FooterGithub from '../public/githubFooter.svg'
import { newLogo2 } from '../public'

export default function Footer() {
  return (
    <section className='md:px-24 px-12 py-8 bg-[#0D1B2A] dark:bg-black z-10 bottom-0'>
        <div className='w-full md:flex md:items-start justify-between '>
        <div className='grow md:flex md:justify-start' >
        <Link href="/"> 
              <Image alt='Footer Logo' src={newLogo2} width={50} height={50} className='mb-8 md:mb-0 flex justify-center items-center mx-auto'/>
            </Link>
          </div>
            <div className='flex justify-center items-center mx-auto'>
            <span className="text-sm text-gray-200 whitespace-nowrap sm:text-center dark:text-white">Detectify-AI © {new Date().getFullYear()} <span className="hover:underline"></span>. All Rights Reserved.
            </span>
            </div>
          <div className='grow md:flex md:justify-end flex justify-center items-center mx-auto ' >
              <Link href="https://github.com/oslabs-beta/r3Dy" target='_blank' className="w-[40px] gap-y-10 h-[40px] bg-[#415A77] hover:bg-[#4c6a8a] rounded-[100px] flex justify-center items-center " >
              <Image alt="Footer Github Image" src={FooterGithub} className=' flex justify-center items-center mx-auto'/>
              </Link>
          </div>

        </div>
    </section>
  )
}
