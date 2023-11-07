
import styles from "../app/home.module.css";
import skillshare from "../../public/img/skillshare1.png";
import Model from "../components/Model";
import { PresentationControls, Float } from "@react-three/drei";
import Image from "next/image";
import escrow from "../../public/img/escrow.png";
import ecdsa from "../../public/img/ecdsa.png";
import pfgUploader from "../../public/img/pdf_uploader.png";
import gui from "../../public/img/pygui.png";
import style from "../app/home.module.css";
import { Canvas } from "@react-three/fiber";
export default function Projects() {
  return (
    <div className="relative isolate px-6 lg:px-8" id="Projects">
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 -botton-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-botton-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate+x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Some of my Projects</h1>
            <div className={`h-1 w-20  rounded ${styles.gradient}`}></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="p-6 rounded-lg shadow-xl">
              <video controls className="h-40 rounded w-full object-cover object-center mb-6" src={require('../../public/img/certificate.mp4')}/>
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Web3.0</span>
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Certificate</span>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">ETH-Certificate</h2>
              <p className="leading-relaxed text-base">I earned my Ethereum Dev Bootcamp certificate from Alchemy University through my Skill Share project.</p>
              <a target="_blank" href="https://polygonscan.com/tx/0x166e0988ec3637fb08f742808cba53328b918e43927c4e2910b897ad1505cba4" className={`text-sm font-semibold leading-6 text-gray-900 ${style.projects}`}>
              Blockchain Proof <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="p-6 rounded-lg shadow-xl">
              <Image className="h-40 rounded w-full object-cover object-center mb-6" src={skillshare} alt="skillshare" />
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Web3.0</span>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Solidity</span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Dapp</span>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-700/10">NextJs</span>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Skill-Share</h2>
              <p className="leading-relaxed text-base">Utilizes Polygon smart contract for secure messaging & skill exchange.</p>
              <a target="_blank" href="https://skillshare-six.vercel.app/" className={`text-sm font-semibold leading-6 text-gray-900 ${style.projects}`}>
                Live Preview <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
          <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="p-6 rounded-lg shadow-xl">
              <Image className="h-40 rounded w-full object-cover object-center mb-6" src={ecdsa} alt="content" />
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Web3.0</span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Dapp</span>
              <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Keccak256</span>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">ECDSA Nodeo</h2>
              <p className="leading-relaxed text-base">Enhances security with client-server architecture & public key cryptography.</p>
              <a target="_blank" href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%201%20-%20Blockchain%20Cryptography/Assignment%20-%20keytesting" className={`text-sm font-semibold leading-6 text-gray-900 ${style.projects}`}>
              Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>


          <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="p-6 rounded-lg shadow-xl">
              <Image className="h-40 rounded w-full object-cover object-center mb-6" src={escrow} alt="content" />
              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">Web3.0</span>
              <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-700/10">Hardhat</span>
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Dapp</span>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Decentralized Escrow Application</h2>
              <p className="leading-relaxed text-base">Blockchain-based escrow app ensures secure, user-friendly transactions</p>
              <a target="_blank" href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%205%20-%20Sodality/Assignment%20-%20Decentralized%20Escrow%20Application" className={`text-sm font-semibold leading-6 text-gray-900 ${style.projects}`}>
              Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          
          
        </div>
      </div>
    </section>
  </div>
  );
};
