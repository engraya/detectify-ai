'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import Footer from '../../../components/Footer'
import Contributor from '../../../components/Contributor'
import BryanPic from 'public/headshot-bryan.png'
import NickPic from 'public/headshot-nick.png'
import AlecPic from 'public/headshot-alec.png'
import CorsoPic from 'public/headshot-corso.png'


export default function About() {
  return (
    <>
    <section className='basic-transition py-16 md:py-28 px-8 flex justify-center dark:darkmode-background'> 
      {/* HERO */}
      <div className='flex justify-center flex-col max-w-screen-lg'>
      <h1 id='project-contributors' className='basic-transition text-5xl mb-4 text-center' >About Detectify-AI</h1>
        <p id='landing-text' className='text-center dark:text-white'>Learn how we started and meet the developers that have contributed to Detectify-AI.</p>
      </div>
    </section>

    {/* STORY */}
    <section className='basic-transition py-16 md:py-20 px-8 flex justify-center border-t dark:border-slate-700 dark:darkmode-background'>
      <div className='flex md:flex-row flex-col max-w-3xl content-center w-full text-center md:text-left'>
        <div className='md:pr-8'>
          <h2 className='basic-transition text-indigo-700 text-2xl font-extrabold mb-4 dark:text-white'>Our Story</h2>
          <h3 id='landing-text' className='basic-transition mb-8 dark:text-white'>Detectify-AI is an open-source project</h3>
          <p className='basic-transition dark:text-white'>Detectify AI is an AI-powered object detection app built with cutting-edge technology to revolutionize the way you interact with the world. Using state-of-the-art machine learning models, Detectify AI identifies and tracks objects with unmatched precision in real-time, making it perfect for industries like security, retail, manufacturing, and more. The app offers a seamless experience, easy-to-use interface, and reliable performance, bringing the power of artificial intelligence to your fingertips. Whether you're a developer, business owner, or tech enthusiast, Detectify AI empowers you to integrate intelligent object recognition into your projects or daily operations with ease.
          <br/>
          <br/>
          Check us out!
          </p>
        </div>
        <div className='flex justify-center w-full'>
          <Image className='mt-16 md:mt-0' src='../r3dy-logo-ring.svg' width={232} height={232} alt='About Us Logo'/>
        </div>
      </div>
    </section>
    </>
  )
}
