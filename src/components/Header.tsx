'use client';
import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import Logo from '../../public/logo-cropped.svg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'
import style from '../app/home.module.css'
import Link from 'next/link'
import Image from 'next/image'
const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Companies', href: '#Companies' },
    { name: 'Projects', href: '#Projects' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
    
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
    
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
    };

    return (
<header className="absolute inset-x-0 top-0 z-50 animate-fade animate-ease-linear sticky">
        <nav className={`flex items-center justify-between p-6 lg:px-8" aria-label="Global ${scrolled ? 'bg-white' : ''}`}>
          <div className="flex lg:flex-1">
            <a href="#" id="Home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo
                 width={32}
                 height={32}
                 className={style.svgl}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className={`text-sm font-semibold leading-6 text-gray-900 ${style.linkMenu}`}>
                {item.name}
              </a>
            ))}
          </div>
          <div className={`hidden lg:gap-x-6 lg:flex lg:flex-1 lg:justify-end text-lg font-semibold leading-6 text-gray-900`}>
                <a target="_blank"
                className={style.linkMenu}
                  href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a/">
                  <AiFillLinkedin/>
                </a>
                <a target="_blank"
                className={style.linkMenu}
                  href="https://github.com/chris017">
                  <AiFillGithub/>
                </a>
                <a target="_blank"
                className={style.linkMenu}
                  href="https://twitter.com/Chris120321">
                  <RiTwitterXFill/>
                </a>
          {/* <ConnectButton
                chainStatus="icon"
                showBalance={{
                  smallScreen: false,
                  largeScreen: true,
                }}
                accountStatus={{
                  smallScreen: 'avatar',
                  largeScreen: 'avatar',
                }}
              /> */}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a id="Home" href="#" className="">
                <span className="sr-only">Your Company</span>
                <Image
                  className={style.svgl}
                  src="/logo-cropped.svg"
                  width={32}
                  height={32}
                  onClick={closeMobileMenu}
                  alt=""/>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={` -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 ${style.linkMenu}`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                  <a target="_blank"
                  className={` -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 ${style.linkMenu}`}
                  href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a/">
                  <AiFillLinkedin/>
                </a>
                <a target="_blank"
                 className={` -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 ${style.linkMenu}`}
                  href="https://github.com/chris017">
                  <AiFillGithub/>
                </a>
                <a target="_blank"
                 className={` -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 ${style.linkMenu}`}
                  href="https://twitter.com/Chris120321">
                  <RiTwitterXFill/>
                </a>
                </div>
              </div>
            </div> 
          </Dialog.Panel>
        </Dialog>
      </header>
          )
        }