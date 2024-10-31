'use client';

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { Canvas } from '@react-three/fiber';
import { RootState } from './store/store'
import { FaGithub } from "react-icons/fa";



const Loader = dynamic(
  () => import('r3dy').then(mod => mod.Loader),
  { ssr: false }
)

export default function Home() {

  const darkModeState = useSelector((state: RootState) => state.darkMode.value); // current redux store state

  return (
    <>
    <section className='basic-transition flex h-screen w-full align-center justify-center md:py-36 py-16 md:px-8 overflow-hidden dark:darkmode-background'>
      <div className="w-full md:flex justify-center block md:pr-8 p-4 z-10">
        <div className="p-4 max-w-[1024px]">
          <div className='flex justify-center md:justify-start'>
          </div>
          <h1 id='main-header' className="basic-transition text-5xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl font-blac text-center md:text-left mb-8">Detectify AI – Next-gen Object Detection Powered by AI</h1>
          <p id='landing-text' className="basic-transition text-[#415A77] text-base font-medium leading-normal text-center md:text-left dark:text-slate-50">Discover the future of object detection with Detectify AI. Powered by advanced artificial intelligence, Detectify AI provides real-time, accurate object recognition for a wide range of applications. Whether you're enhancing security, boosting automation, or integrating smart technology, Detectify AI is your go-to solution for intelligent vision.</p>
          <div className="md:my-8 mt-8 md:block flex flex-col items-center">
            <Link href="https://github.com/engraya/detectify-ai" target='_blank'>
            <button className="flex gap-2 font-mono items-center py-2 px-4 bg-slate-200 rounded-md text-sm mb-7 ease-linear transition duration-150 hover:bg-slate-300">
              Conribute 
              <FaGithub className='flex justify-center items-center'/>
            </button>
            </Link>
            <Link href={'/detect'}  className="bg-indigo-700 py-2 px-8 text-white font-bold rounded-md text-base ease-linear transition duration-150 hover:bg-indigo-600">
              Get Started
            </Link>
          </div>
        </div>
        <div className="md:w-[512px] md:h-[512px] w-full h-[250px]">
          <Canvas>
            <Loader color={darkModeState ? 'white' : 'purple'} matcapIndex={40} rotationAxis='x'/>
          </Canvas> 
        </div>
      </div>

      {/* DISPLAY BG MESH */}
      <div className='basic-transition absolute w-screen h-3/5 dark:darkmode-backround'> 
      <Canvas> 
          <mesh position-y={1} position-z={-1} rotation-x={-1}>
            <planeGeometry args={[20,20,20,20]} />
            <meshBasicMaterial wireframe={true} color={darkModeState ? 'green' : '#DDDFE1'} />
          </mesh>
      </Canvas>
      </div>
    </section>
    </>
  )
}