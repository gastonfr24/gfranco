"use client"

// 3D
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stage } from "@react-three/drei"
import WebDesign from "./Webdesign"

//Images


function Header() {
  return (
    <div className='h-screen w-auto lg:flex pt-20 my-auto pb-20 lg:pb-0 text-gray-100 text-center lg:text-left'>
        <div className="lg:my-auto lg:w-5/12 pt-36 lg:pt-0">

  <h1 className="text-[40px] lg:text-[45px] xl:text-[55px] font-bold leading-tight mt-5 sm:mt-0 text-skyblue-100">
    Servicios de Desarrollo Web
  </h1>
<p className="mt-5 text-lg text-gray-200">
Diseño cautivador, desarrollo experto y soluciones a medida 
son solo el comienzo de lo que puedo ofrecerte.
 ¡Descubre cómo puedo convertir tu visión en una presencia en línea excepcional!
</p>
        </div>
        <div className="hidden lg:block lg:w-7/12">
<Canvas>
  <Stage environment="city" intensity={0.6}>
  <WebDesign/>
  </Stage>
  <OrbitControls enableZoom={false}>
  </OrbitControls>
</Canvas>
        </div>
    </div>
  )
}

export default Header