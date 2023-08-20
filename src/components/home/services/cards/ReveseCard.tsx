import Image from "next/image"
import portfolio from "public/assets/images/demo/portfolio_up.png"

function ReverseCard() {
  return (
    <div className="relative flex lg:h-[420px] w-full gap-2 overflow-hidden rounded-lg shadow-lg">

    <div className="m-4 lg:m-0 flex flex-col items-start justify-center gap-4 p-4 lg:ml-10 lg:w-[95%]">
      <h2 className="text-2xl font-semibold text-rose-400">Portfolio Personal</h2>
      <p className="text-sm lg:text-base text-gray-100">
      Destaca tus logros y atrae la atención de potenciales clientes y colaboradores con un Portafolio Web personalizado.<br/><br/>
       Transforma tus proyectos en una vitrina digital impresionante que cautiva a tus visitantes y resalta tu talento de manera única.
       Obtén tu Portafolio Web ahora mismo y abre la puerta a nuevas oportunidades para mostrar tu expertise al mundo.
      </p>
      <button className="mt-4 bg-rose-400 px-5 py-2 text-graydark font-bold shadow-xl transition-all duration-300 hover:bg-[#38B6FF]">
        Saber más
      </button>
      <span className="text-sm font-bold text-gray-300">
       $100k - $400k
      </span>
    </div>

    <div className="hidden lg:block h-[140%] w-full">
    <Image
    alt="mock up de portfolio - pagina web personal demo"
      src={portfolio}
      className="object-cover scale-125"
    />
    </div>

  </div>
  )
}

export default ReverseCard