// Components
import SimpleCard from './cards/SimpleCard'
import ReverseCard from './cards/ReveseCard'
import EcommerceCard from './cards/EcommerceCard'
import BlogCard from './cards/BlogCarg'


function Services() {
  return (
    <div className='lg:py-20'>

<div className="">
          <h2 className="text-center lg:text-left text-2xl lg:text-4xl text-gray-100 font-semibold">
          Servicios
            </h2>

            <p className="text-center lg:text-left text-gray-400 text-xm lg:text-lg mb-12 mt-4 lg:w-2/3">
            Explora mis servicios y descubre cómo puedo transformar tus objetivos en realidades digitales. Desde desarrollo web hasta soluciones personalizadas, estoy aquí para brindarte resultados excepcionales
            </p>
        </div>

                  {/* Blog */}
                  <div className='mt-10 w-auto backdrop-blur-sm bg-opacity-[0.03] bg-gray-300 drop-shadow-lg rounded-2xl'>
      <div className="flex flex-col gap-10">
<BlogCard/>
</div>
    </div>

                    {/* Empresarial */}
      <div className='my-10 w-auto backdrop-blur-sm bg-opacity-[0.03] bg-gray-300 drop-shadow-lg rounded-2xl'>
      <div className="flex flex-col gap-10">
<SimpleCard/>
</div>
    </div>

                    {/* Portfolio */}
      <div className='mt-10 w-auto backdrop-blur-sm bg-opacity-[0.03] bg-gray-300 drop-shadow-lg rounded-2xl'>
      <div className="flex flex-col gap-10">
<ReverseCard/>
</div>
    </div>

                {/* Ecommerce */}
      <div className='mt-10 w-auto backdrop-blur-sm bg-opacity-[0.03] bg-gray-300 drop-shadow-lg rounded-2xl'>
      <div className="flex flex-col gap-10">
<EcommerceCard/>
</div>
    </div>

    </div>
  )
}

export default Services