import React from 'react'

function Information() {
  return (
    <div className="md:p-6 mr-2 
    dark:backdrop-blur-sm dark:bg-opacity-[0.03] shadow-xl
    bg-white dark:bg-gray-100 sm:rounded-lg">
        <div className="p-12">
      <h1 className="text-2xl sm:text-3xl text-gray-900 dark:text-gray-100 font-bold tracking-tight">
      ¿Quieres cotizar un proyecto?
      </h1>
      <p className="text-normal text-base font-medium text-gray-600 dark:text-gray-400  mt-5">
      Enviar una cotización es el primer paso hacia la realización de tu visión digital.
      </p>
      <p className="text-normal text-base font-medium text-gray-600 dark:text-gray-400  my-5">
       ¡Comparte tus ideas y requisitos conmigo y juntos crearemos un plan
       que se adapte perfectamente a tus necesidades!

      </p>
      <div className="flex items-center text-gray-300 mt-10">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-gray-700 dark:text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <div className="ml-4 text-gray-900 dark:text-gray-100 text-md tracking-wide font-semibold w-40">
          gastonfr24@gmail.com
        </div>
      </div>
      </div>
    </div>
  )
}

export default Information