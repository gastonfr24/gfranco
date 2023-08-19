import React from 'react'

function Header() {
  return (
<div className="h-screen py-28 lg:mx-6 text-center lg:text-left">
  <div className="mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
    <div className=" mt-20">
      <h1 className="text-[40px] lg:text-[45px] xl:text-[40px] font-bold leading-tight mt-5 sm:mt-0 ">
        Gaston Franco
      </h1>
        <h2 className='text-skyblue-100 font-bold text-2xl'>
        Web Developer Ssr
        </h2>
      <p className="mt-5 text-[15px] ">
      Soy desarrollador web profesional, mi objetivo es que puedas tener un sitio web moderno y atractivo en un corto plazo y a un costo accesible.
            </p>
      <div className="flex gap-4 mt-10">
      <a
        href=""
        className="a-neon mx-auto lg:mx-4"
        style={{ "--clr": "#8adfe0", "--i": 0 }}
      >
        <span className="inline-flex text-base text-graydark font-bold text-center justify-center">
          Empezar

        </span>
      </a>
{/*       <a
        href=""
        className="px-8 py-4 rounded-full bg-skyblue-100 hover:bg-sky-300"
      >
        <span className="inline-flex text-base text-graydark font-bold text-center justify-center">
          Empezar

        </span>
      </a> */}
      </div>
    </div>
    <div className="hidden lg:flex sm:mt-0 pt-12 sm:px-0">
      <img
        className="w-[380px] h-[380px] object-cover scale-x-[-1] rounded-full ml-auto"
        src="./assets/images/me.jpg"
        alt=""
      />
    </div>
  </div>
</div>

  )
}

export default Header