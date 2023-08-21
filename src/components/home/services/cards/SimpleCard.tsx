import Image from "next/image"
import viper from "public/assets/images/demo/viperpup.png"
import Link from "next/link"


function SimpleCard() {
  return (
    <div className="relative flex lg:h-[420px] w-full gap-2 overflow-hidden rounded-lg shadow-lg ">
    <div className="hidden lg:block h-[140%] w-full">
    <Image
    alt="mock up de viperpy - pagina web empresarial"
      src={viper}
      className="object-cover scale-125"
    />
    </div>
    <div className="m-4 lg:m-0 flex flex-col items-start justify-center gap-4 p-4 lg:mr-10 lg:w-[95%]">
      <h2 className="text-2xl font-semibold text-sky-500 dark:text-skyblue-100">Página Web Empresarial</h2>
      <p className="text-sm lg:text-base text-gray-900 dark:text-gray-100">
      ¿Buscas potenciar tu presencia en línea? ¡Adquiere tu Página Web Empresarial ahora mismo!
     Atrae a tu audiencia con un diseño cautivador y conviértelos en clientes fieles.<br/><br/> Con nuestra solución, obtendrás un eficaz embudo de ventas, 
      brindando a los visitantes una visión completa de tus servicios y la oportunidad de suscribirse para recibir las últimas novedades.
      </p>
      <Link href="/contact"  className="mt-4 bg-skyblue-200 px-5 py-2 text-graydark font-extrabold shadow-xl transition-all duration-300 hover:bg-[#38B6FF]">
        Saber más
      </Link>
      <span className="text-sm font-bold text-gray-900 dark:text-gray-300">
       $200k - $850k
      </span>
    </div>
  </div>
  )
}

export default SimpleCard