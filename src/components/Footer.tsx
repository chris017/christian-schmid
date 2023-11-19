import React from 'react';
import style from '../app/home.module.css'
import Logo from '../../public/logo-cropped.svg'
export default function Footer () {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Logo
                 width={32}
                 height={32}
                 className={style.svgl}
                alt=""
              />
            <span className={`ml-3 text-xl ${style.cs}`}>Christian Schmid</span>
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-right text-center">
          <div className="w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <a href='/' className={`text-sm font-semibold leading-6 text-gray-900 ${style.linkMenu}`}>Home</a>
              </li>
              <li>
                <a href='/#Companies' className={`text-sm font-semibold leading-6 text-gray-900 ${style.linkMenu}`}>Companies</a>
              </li>
              <li>
                <a href='/#Projects' className={`text-sm font-semibold leading-6 text-gray-900 ${style.linkMenu}`}>Projects</a>
              </li>
              <li>
                <a href='/messenger' className={`text-sm font-semibold leading-6 text-gray-900 ${style.linkMenu}`}>Messenger</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

