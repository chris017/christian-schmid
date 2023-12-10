import style from '../components/styles/Home.module.css'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
      <>
        <main className=" bg-white px-6 py-24 sm:py-56 lg:px-8">
          <div className="text-center">
            <p className={`text-base font-semibold ${style.heading}`}>404</p>
            <h1 className={`mt-4 text-3xl font-bold tracking-tight  sm:text-5xl ${style.heading}`}>Page <span className={style.cs}>not found</span></h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/">
              <a
                className={` ${style.btn} rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
              >
                Go back home
              </a>
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }