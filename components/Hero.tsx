"use client";
import { Canvas} from '@react-three/fiber'
import { PresentationControls, Float } from '@react-three/drei'
import Model from './Model'
import { Button } from './ui/button'


function Hero() {
    return (
        <div className="relative isolate px-2 lg:px-8 ">
      
      <div className=" text-left mx-auto max-w-2xl overflow-hidden pt-8 sm:pt-24 lg:pt-26  mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 px-5">
        <div className="  animate-fade-right animate-ease-linear">
          <h1 className=" text-4xl font-bold tracking-tight  sm:text-6xl">
            <span >Hi, I am</span><br/>
            <span className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">Christian Schmid</span>
          </h1>
          <p className="mt-6 text-lg leading-8 ">
          Your tech wizard who transforms ideas into
          reality. Feel free to check out my projects
          and don&apos;t hesitate to get in touch.
          Let&apos;s make something amazing!
          </p>
          <div className="mt-10 flex items-center gap-x-6 justify-start lg:justify-start">
            <a target="_blank" href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a">
              <Button>Hire Me</Button>
            </a>
            <a  href="#Projects">
            <Button variant="secondary">Projects</Button>
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
export default Hero