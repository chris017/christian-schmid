"use client"

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center  justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              CS
            </a>
          </div>
          
          {/* Render Bars3Icon only when mobileMenuOpen is false */}
          {!mobileMenuOpen && (
            <div className="flex  lg:hidden">
              <a>
              <ModeToggle />
            </a>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              
            </div>
          )}

          <div className="hidden lg:flex  lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold leading-6 ">
              Home
            </Link>
            <Link href="/dashboard" className="text-sm font-semibold leading-6 ">
              Dashboard
            </Link>
            
          </div>
          <div className={` hidden lg:gap-x-6 lg:flex lg:flex-1 lg:justify-end text-lg font-semibold leading-6 items-center`}>
          <a>
              <ModeToggle />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a/">
              <AiFillLinkedin />
            </a>
            <a target="_blank" href="https://github.com/chris017">
              <AiFillGithub />
            </a>
            <a target="_blank" href="https://twitter.com/Chris120321">
              <RiTwitterXFill />
            </a>
          </div>
        </nav>
        <Dialog as="div" className=" lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="bg-white text-black dark:bg-black dark:text-white fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm ">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">CS</span>
                <a href="/" className="-m-1.5 p-1.5" >
                  CS
                </a>
              </a>
              {/* Render XMarkIcon when mobileMenuOpen is true */}
              {mobileMenuOpen && (
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
            <div className="mt-6 flow-root list-none">
              <div className="-my-6 divide-y ">
                <div className="space-y-2 py-6">
                  <li>
                    <Link href="/" className="text-sm font-semibold leading-6 " onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  
                  <li>
                    <Link href="/dashboard" className="text-sm font-semibold leading-6 " onClick={closeMobileMenu}>
                      Dashboard
                    </Link>
                  </li>
                </div>
                <div className="py-6 flex flex-row space-x-4">
                  
                  <a target="_blank" href="https://www.linkedin.com/in/christian-schmid-8b4b1b16a/">
                    <AiFillLinkedin />
                  </a>
                  <a target="_blank" href="https://github.com/chris017">
                    <AiFillGithub />
                  </a>
                  <a target="_blank" href="https://twitter.com/Chris120321">
                    <RiTwitterXFill />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}