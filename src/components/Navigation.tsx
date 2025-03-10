import { useState, useEffect } from "react";
import paras from "../clients/Para";

interface NavigationProps {
  isLogged: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export default function Navigation({ setIsModalOpen, isLogged }: NavigationProps) {  
  const [result, setResult] = useState('')

  useEffect(() => {
    if(paras){
      const address = paras.getAddress() as string
      setResult(address)
    } 
  }, [])
  
  return (
    <div>
      <nav className="bg-white dark:bg-green-800 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo.jpg"
              className="h-8"
              alt="Paras"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Capsule-Safe
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLogged && ( 
              <label htmlFor="" className=" text-center invisible flex md:visible text-white mr-2 justify-center p-auto items-center">
                {result}
              </label>
             )}
            <button
              type="button"
              className="text-white bg-green-600 hover:bg-transparent hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-blue-800"
              onClick={() => setIsModalOpen(true)}
            >
              { isLogged ? "Connected" : "Sign in" }
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
  }
