'use client'
import { PresentationControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "../components/Model";
import style from './styles/Home.module.css'
export default function Hero() {
    return (
    <div className="relative isolate px-2 lg:px-8 ">
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          
        </div>
        <div
          className="absolute inset-x-0 -botton-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-botton-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate+x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7ea7e9] to-[#94efb7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
            
        <div className="mt-12 sm:mt-28 lg:mt-16 text-left mx-auto max-w-2xl overflow-hidden pt-12 sm:pt-28 lg:pt-36  mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 px-5">
          <div className="  animate-fade-right animate-ease-linear">
            <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className={style.heading}>Hi, I am</span><br/>
              <span className={style.cs}>Christian Schmid</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Your tech wizard who transforms ideas into
            reality. Feel free to check out my projects
            and don&apos;t hesitate to get in touch.
            Let&apos;s make something amazing!
            </p>
            <div className="mt-10 flex items-center gap-x-6 justify-start lg:justify-start">
              <a
                href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a"
                className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white ${style.btn}`}
              >
                Hire Me
              </a>
              <a href="#Projects" className={`rounded-md px-3.5 p-2 text-sm text-black border-2 border-black`}>
                Projects<span aria-hidden="true"className="pl-2">{'\u2192'}</span>
              </a>
            </div>
          </div>
          <div className='animate-fade-left animate-ease-linear'>
          <Canvas style={{width: '100%', height: '100%'}}>
                <PresentationControls global>
                  <Float rotationIntensity={1.4}>
                    <Model/>
                  </Float>
                </PresentationControls>
              </Canvas>
              </div>
        </div>
      </div>
    )
}