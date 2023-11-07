import GD from '../../public/gd.svg';
import Avast from '../../public/avast.svg';
import style from '../app/home.module.css'
export default function Firms() {
    return (
      <div className="bg-white py-24 sm:py-32 " id="Companies">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 animate-fade animate-ease-linear">
        <div className="text-center text-lg font-semibold leading-8 text-gray-900 ">
            A few companies I have worked for
          </div>
          <div className="w-20 h-1 mx-auto mt-2">
            <div className={`h-full rounded ${style.gradient}`}></div>
          </div>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              src="https://static3.avast.com/10003351/web/i/v3/components/avast-logos/avast-logo-default.svg"
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              alt="Reform"
              width={158}
              height={48}
            />
            <GD
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              alt="Transistor"
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
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://lobeco.org/wp-content/uploads/2019/03/LOB_Logo_Neu_ohneClaim_2x.png"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://rz-container.com/.cm4all/uproc.php/0/Design_2020/Logo/.asfm-Logo.png/picture-1200?_=170a0b64a10"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  