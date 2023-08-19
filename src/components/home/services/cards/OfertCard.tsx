import React from 'react'

function OfertCard() {
  return (
    <div className="group relative flex h-[520px] w-full cursor-pointer items-start gap-2 overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-2xl">
    <div className="absolute left-0 top-0 h-16 w-16">
      <div className="absolute left-[-34px] top-[32px] z-10 w-[170px] -rotate-45 transform bg-gray-600 py-1 text-center font-semibold text-white">
        Featured
      </div>
    </div>
    <img
      src="https://p1.pxfuel.com/preview/778/373/101/nature-landscape-rocks-formation-cave-beauty.jpg"
      className="h-full w-full object-cover transition-all duration-300 group-hover:opacity-90"
    />
    <div className="flex flex-col items-start justify-center gap-4 p-4">
      <h2 className="text-2xl font-semibold">Card Title</h2>
      <p className="text-base">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <button className="rounded-md bg-blue-600 px-5 py-2 text-white shadow-xl transition-all duration-300 hover:bg-blue-700">
        Button
      </button>
    </div>
  </div>
  )
}

export default OfertCard