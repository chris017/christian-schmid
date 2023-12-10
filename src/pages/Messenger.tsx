import SendMessage from "../components/SendMessage";
import style from '../components/styles/Home.module.css'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Messenger() {
  return (
    <div className="bg-white h-full ">
        <Nav />
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div className="mx-auto max-w-2xl pt-12 sm:pt-18 lg:pt-26">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-left lg:text-center">
            <h1 className={`${style.heading} text-4xl font-bold tracking-tight  sm:text-6xl`}>
            Secure <span className={style.cs}>messaging</span>
            </h1>
            <p className={`mt-6 text-lg leading-8 ${style.heading}`}>
            Send and receive secure messages on the blockchain with my self-written smart contract using the Polygon chain. Make sure you are connected to your wallet.
            </p>
          </div>
        </div>
        <SendMessage />
      </div>
      <Footer />
    </div>
  );
}