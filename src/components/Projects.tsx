

import Link from "next/link";

export default function Projects() {
  return (
    <div className="relative isolate px-6 lg:px-8" id="Projects">
      
      <section>
        <div className=" py-24 mx-auto">
          <div className="flex text-right justify-end flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
                <span>Some of my Projects</span>
              </h1>
            
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 w-full p-4 group relative block h-64  lg:h-80">
              <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white opacity-0 group-hover:opacity-100"></span>

              <div className="relative flex h-full transform items-end border-2 border-black dark:border-white  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    ETH-Certificate
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    ETH-Certificate
                  </h3>

                  <p className="mt-4 text-sm sm:text-base">
                    I earned my Ethereum Dev Bootcamp certificate from Alchemy
                    University through my Skill Share project.
                  </p>

                  <p className="mt-8 font-bold">
                    <a
                      target="blank"
                      href="https://polygonscan.com/tx/0x166e0988ec3637fb08f742808cba53328b918e43927c4e2910b897ad1505cba4"
                    >
                      Blockchain Proof
                      <span aria-hidden="true" className="pl-2">
                        {"\u2192"}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 w-full p-4 group relative block h-64 lg:h-80">
              <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white opacity-0 group-hover:opacity-100"></span>

              <div className="relative flex h-full transform items-end border-2 border-black dark:border-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Escrow DApp
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Escrow DApp
                  </h3>

                  <p className="mt-4 text-sm sm:text-base">
                    Blockchain-based escrow app ensures secure, user-friendly
                    transactions
                  </p>

                  <p className="mt-8 font-bold">
                    <a
                      target="blank"
                      href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%205%20-%20Sodality/Assignment%20-%20Decentralized%20Escrow%20Application"
                    >
                      GitHub
                      <span aria-hidden="true" className="pl-2">
                        {"\u2192"}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 w-full p-4 group relative block h-64 lg:h-80">
              <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white opacity-0 group-hover:opacity-100"></span>

              <div className="relative flex h-full transform items-end border-2 border-black dark:border-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Messenger DApp
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    Messenger DApp
                  </h3>

                  <p className="mt-4 text-sm sm:text-base">
                    Utilizes Polygon smart contract for secure messaging & skill
                    exchange.
                  </p>

                  <p className="mt-8 font-bold">
                    <Link href="/messenger">
                      Messenger
                      <span aria-hidden="true" className="pl-2">
                        {"\u2192"}
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 w-full p-4 group relative block h-64 lg:h-80">
              <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white opacity-0 group-hover:opacity-100"></span>

              <div className="relative flex h-full transform items-end border-2 border-black dark:border-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>

                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    ECDSA Nodeo
                  </h2>
                </div>

                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                  <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                    ECDSA Nodeo
                  </h3>

                  <p className="mt-4 text-sm sm:text-base">
                    Enhances security with client-server architecture & public
                    key cryptography.
                  </p>

                  <p className="mt-8 font-bold">
                    <a
                      target="blank"
                      href="https://github.com/chris017/alchemy-ethereum-bootcamp/tree/master/Week%201%20-%20Blockchain%20Cryptography/Assignment%20-%20keytesting"
                    >
                      GitHub
                      <span aria-hidden="true" className="pl-2">
                        {"\u2192"}
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
