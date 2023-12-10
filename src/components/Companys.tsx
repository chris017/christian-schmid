import styles from './styles/Home.module.css'
import GD from "../assets/img/gd.svg";
import Avast  from "../assets/img/avast.svg";
import Lobeco from "../assets/img/lobeco.svg";


export default function Companys() {
    return (
      <div className={`py-24 sm:py-32 `}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8" id='Company'>
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          <span className={styles.heading}>My Work Experience Includes</span>
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={GD}
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Avast}
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src={Lobeco}
              alt="Tuple"
              width={158}
              height={48}
            />
            <svg className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              width={158}
              fill="red"
              height={48} focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M10.399 3.03A2.183 2.183 0 0 1 12 2.363c.623 0 1.156.223 1.601.667.445.445.667.979.667 1.601 0 .623-.222 1.162-.667 1.617A2.162 2.162 0 0 1 12 6.932a2.152 2.152 0 0 1-1.601-.684 2.24 2.24 0 0 1-.667-1.617c0-.621.222-1.155.667-1.6ZM5.098 17.002h10.537v-1.367H5.098v-5.068c0-.556.239-1.073.717-1.55.478-.479 1.017-.718 1.617-.718h9.137c.578 0 1.112.223 1.601.667.49.445.734.979.734 1.601v.9H8.367v1.367h10.537v5.102c0 .6-.228 1.128-.684 1.584a2.25 2.25 0 0 1-1.651.684H7.432c-.645 0-1.195-.205-1.651-.617-.456-.411-.684-.961-.684-1.65v-.935h.001Z"></path></svg>
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://www.telefonica.de/static/layout/2021_telefonica/header/logo_telefonica_o2_blue.svg"
              alt="Telefonica"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    )
  }
  