import { HashLink as Link } from 'react-router-hash-link';

export default function Footer () {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <a href="#" className="-m-1.5 p-1.5" style={{ fontFamily: "Pinyon Script, cursive" }}>
              CS
            </a>
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-right text-center">
          <div className="w-full px-4">
            <nav className="list-none mb-10">
              <li>
                <Link to='/#' className={`text-sm font-semibold leading-6 text-gray-900 `}>Home</Link>
              </li>
              <li>
                <Link to='/#Company' className={`text-sm font-semibold leading-6 text-gray-900 `}>Companies</Link>
              </li>
              <li>
                <Link to='/#Projects' className={`text-sm font-semibold leading-6 text-gray-900 `}>Projects</Link>
              </li>
              <li>
                <Link to='/messenger' className={`text-sm font-semibold leading-6 text-gray-900 `}>Messenger</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
