import Image from "next/image"
import ecommerce from "public/assets/images/demo/ecommerce_up.png"



function EcommerceCard() {
  return (
    <div className="relative flex lg:h-[420px] w-full gap-2 overflow-hidden rounded-lg shadow-lg">
    <div className="hidden lg:block h-[140%] w-full">
    <Image
    alt="mock up de viperpy - pagina web ecommcerce"
      src={ecommerce}
      className="object-cover scale-125"
    />
    </div>
    <div className="flex flex-col items-start justify-center gap-4 p-4 m-4 lg:m-0 lg:mr-10 lg:w-[95%]">
      <h2 className="text-2xl font-semibold text-violet-400">E-commerce</h2>
      <p className="text-sm lg:text-base text-gray-100">
      Llega a más personas con un Ecommerce llamativo y fácil de usar. Diseñado para capturar la atención
       y ofreciendo una experien
       cia intuitiva que guía a tus clientes hacia la compra.<br/><br/>
       Además, brinda a tus clientes opciones seguras y variadas para el pago 
       como MercadoPago, tarjeta de crédito y hasta criptomonedas como Ethereum (ETH)
      </p>
      <button className="mt-4 bg-violet-400 px-5 py-2 text-graydark font-extrabold shadow-xl transition-all duration-300 hover:bg-[#38B6FF]">
        Saber más
      </button>
      <span className="text-sm font-bold text-gray-300">
       $350k - $950k
      </span>
    </div>
  </div>
  )
}

export default EcommerceCard