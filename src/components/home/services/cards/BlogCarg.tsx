import Image from "next/image"
import Link from "next/link"
import blog from "public/assets/images/demo/blog_up.png"

function BlogCard() {
  return (
    <div className="relative flex lg:h-[420px] w-full gap-2 overflow-hidden rounded-lg shadow-lg">

    <div className="flex flex-col items-start justify-center gap-4 p-4 m-4 lg:m-0 lg:ml-10 lg:w-[95%]">
      <h2 className="lg:text-2xl font-semibold text-lime-300">Blog Profesional
      <span className="lg:block hidden italic text-gray-500 font-semibold text-sm ml-6">empresarial o personal</span>
      </h2>
      <p className="text-sm lg:text-base text-gray-100">
      ¿Deseas compartir tus ideas y llegar a una audiencia más amplia? Con mi servicio de creación de blogs profesionales,
       podrás alcanzar un público vasto y diverso.<br/><br/> Potenciado por estrategias de SEO que mejoran tu visibilidad en línea,
        este blog te posicionará en la cima. Además, los visitantes tendrán la opción de suscribirse para mantenerse al día
         con las últimas novedades.

         
      </p>
      <Link href="/contact" className="mt-4 bg-lime-300 px-5 py-2 text-graydark font-bold shadow-xl transition-all duration-300 hover:bg-[#38B6FF]">
        Saber más
      </Link>
      <span className="text-sm font-bold text-gray-300">
       $80k - $400k
      </span>
    </div>

    <div className="hidden lg:block h-[140%] w-full">
    <Image
    alt="mock up de portfolio - pagina web personal demo"
      src={blog}
      className="object-cover scale-125"
    />
    </div>

  </div>
  )
}

export default BlogCard