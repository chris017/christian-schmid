import { useState } from 'react'
import React from "react";
import styles from '../components/Hero.module.css'
import { useEffect } from 'react'
import { PresentationControls, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { ReactComponent as GD} from '../img/gd.svg';
import { ReactComponent as Avast} from '../img/avast.svg';
import { ReactComponent as Lobeco} from '../img/lobeco.svg';
import {ReactComponent as Bauhaus} from '../img/bauhaus.svg';
import escrow from "../img/escrow.png";
import ecdsa from "../img/ecdsa.png";
import pfgUploader from "../img/pdf_uploader.png";
import gui from "../img/pygui.png";
import skillshare from "../img/skillshare1.png";

export default function Example() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="bg-background dark:bg-background">
      <header className="absolute inset-x-0 top-0 z-50 sticky bg-background dark:bg-background">
      <div className="p-6 lg:px-8">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={`text-text dark:text-text text-3xl`}
              style={{ fontFamily: 'Pinyon Script, cursive' }}
              href="#pablo"
            >
              CS
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-text dark:text-text hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-text dark:text-text opacity-75"></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-text dark:text-text hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-text dark:text-text opacity-75"></i><span className="ml-2">Companies</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-text dark:text-text hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-text dark:text-text opacity-75"></i><span className="ml-2">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-text dark:text-text hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-text dark:text-text opacity-75"></i><span className="ml-2">Messenger</span>
                </a>
              </li>
              <li className="nav-item">
                <button id="theme-toggle" type="button" className="px-4 py-1 flex items-center text-xs uppercase font-bold leading-snug text-text dark:text-text hover:opacity-75" onClick={handleThemeSwitch}>
                
                <svg id="theme-toggle-dark-icon" xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${theme === 'dark' ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100-2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
                <svg id="theme-toggle-light-icon" xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${theme === 'light' ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
      </header>


      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 pb-16  sm:px-16 md:pb-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="text-left mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-text dark:text-text sm:text-5xl">
            Hi, I am <span className={styles.gd}>Christian Schmid&nbsp;&nbsp;</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-text dark:text-text">
            Your tech wizard who transforms ideas into reality. Feel free to check out my projects and don't hesitate to get in touch. Let's make something amazing!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-secondary dark:bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 btnHero"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="rounded-md bg-primary dark:bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Projects
              </a>
            </div>
          </div>
          <div className='lg:pl-20'>
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

      
      <div className="pb-10" id="Companies">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-fade animate-ease-linear">
        <div className="text-center text-lg font-semibold leading-8 text-text dark:text-text  title-font">
          A few companies I have <span className={styles.gd}>worked for</span>
        </div>
        <div className="w-20 h-1 mx-auto mt-2">
            <div className={`h-full rounded ${styles.hd}`}></div>
          </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Avast
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            alt="Reform"
            fill = {theme === 'dark' ? 'white' : 'black'}
            width={158}
            height={48}
          />
          <GD
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            alt="Transistor"
            fill = {theme === 'dark' ? 'white' : 'black'}
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://www.telefonica.de/static/layout/2021_telefonica/header/logo_telefonica_o2_blue.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <Lobeco
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            alt="SavvyCal"
            width={158}
            height={48}
            fill = {theme === 'dark' ? 'white' : 'black'}
          />
          <Bauhaus
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>



    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-text dark:text-text">Some of my <span className={styles.gd}>Projects</span></h1>
            <div className={`h-1 w-20  rounded ${styles.hd}`}></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="p-6 rounded-lg shadow-xl bg-primary dark:bg-primary">
              <video controls className="h-40 rounded w-full object-cover object-center mb-6" src={require('../img/certificate.mp4')}/>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Web3.0</span>
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Certificate</span>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-white dark:text-black">ETH-Certificate</h2>
              <p className="leading-relaxed text-white dark:text-black">I earned my Ethereum Dev Bootcamp certificate from Alchemy University through my Skill Share project.</p>
              <a target="_blank" href="https://polygonscan.com/tx/0x166e0988ec3637fb08f742808cba53328b918e43927c4e2910b897ad1505cba4" className={`text-sm font-semibold leading-6 text-gray-900 ${styles.projects} text-white dark:text-black`}>
              Blockchain Proof <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4 ">
            <div className="p-6 rounded-lg shadow-xl bg-primary dark:bg-primary">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={skillshare} alt="skillshare" />
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Web3.0</span>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Solidity</span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Dapp</span>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">NextJs</span>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-white dark:text-black">Skill-Share</h2>
              <p className="leading-relaxed text-white dark:text-black">Utilizes Polygon smart contract for secure messaging & skill exchange.</p>
              <a target="_blank" href="https://skillshare-six.vercel.app/" className={`text-sm font-semibold leading-6 text-gray-900 ${styles.projects} text-white dark:text-black`}>
                Live Preview <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
          <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="p-6 rounded-lg shadow-xl bg-primary dark:bg-primary">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={ecdsa} alt="content" />
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Web3.0</span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Dapp</span>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Keccak256</span>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-white dark:text-black">ECDSA Nodeo</h2>
              <p className="leading-relaxed text-white dark:text-black">Enhances security with client-server architecture & public key cryptography.</p>
              <a target="_blank" href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%201%20-%20Blockchain%20Cryptography/Assignment%20-%20keytesting" className={`text-sm font-semibold leading-6 text-gray-900 ${styles.projects} text-white dark:text-black`}>
              Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>


          <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="p-6 rounded-lg shadow-xl bg-primary dark:bg-primary">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src={escrow} alt="content" />
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Web3.0</span>
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Hardhat</span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Dapp</span>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-white dark:text-black">Decentralized Escrow Application</h2>
              <p className="leading-relaxed text-white dark:text-black">Blockchain-based escrow app ensures secure, user-friendly transactions</p>
              <a target="_blank" href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%205%20-%20Sodality/Assignment%20-%20Decentralized%20Escrow%20Application" className={`text-sm font-semibold leading-6 text-gray-900 ${styles.projects} text-white dark:text-black`}>
              Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
    </div>

  )
}



