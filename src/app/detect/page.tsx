import React from 'react'
import ObjectDetection from '../../../components/ObjectDetection'

function DetectPage() {
  return (
    <section className='basic-transition py-10 md:py-20 px-8 flex justify-center items-center border-t dark:border-slate-700 dark:darkmode-background'>
      <div className='flex md:flex-row flex-col max-w-5xl content-center w-full justify-center items-center text-center md:text-left'>
        <ObjectDetection/>
      </div>
    </section>
  )
}

export default DetectPage
