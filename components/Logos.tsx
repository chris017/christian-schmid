'use client'
import Image from "next/image"
import Slider from 'react-infinite-logo-slider'

export const Logos = () => {
    return(
        
        <div className="pt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
        >
            <Slider.Slide>
            <Image width={100} height={100} alt="avast" src="/avast.svg" className="dark:invert"></Image>
            </Slider.Slide>
            <Slider.Slide>
            <Image width={100} height={100} alt="g+d" src="/gd.svg" className="dark:invert"></Image>
            </Slider.Slide>
            <Slider.Slide>
            <Image width={100} height={100} alt="Telefonica" src="/tef.svg" className="dark:invert"></Image>
            </Slider.Slide>
            <Slider.Slide>
            <Image width={100} height={100} alt="Lobeco" src="/lobeco.svg" className="dark:invert"></Image>
            </Slider.Slide>
            <Slider.Slide>
            <Image width={100} height={100} alt="Sparkasse" src="/ssk.svg" className="dark:invert"></Image>
            </Slider.Slide>
            <Slider.Slide>
            <Image width={100} height={100} alt="Bauhaus" src="/bau.svg" className="dark:invert"></Image>
            </Slider.Slide>
            <Slider.Slide>
            <Image width={100} height={100} alt="Hoffmann" src="/hg.svg" className="dark:invert"></Image>
            </Slider.Slide>
            <Slider.Slide>
            <Image width={100} height={100} alt="Cyberpromote" src="/cp.svg" className="dark:invert"></Image>
            </Slider.Slide>
        </Slider>
</div>
    )}