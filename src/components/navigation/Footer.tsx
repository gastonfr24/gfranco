//Images
import logo from "public/assets/images/logo.png"
import Image from "next/image"

// Icons
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai"


function Footer() {
  return (
    <div className="bg-graydark pt-20">
<footer className="relative border-t u-bg-white border-gray-600">
  <div className="absolute inset-x-0 flex items-center justify-center -top-3">
    <div className="relative flex justify-center h-10 w-14">
      <div className="absolute w-full h-full inset-0 -top-[2px] blur-[6px] u-bg-white rounded-full"></div>
      <Image src={logo}
              width={135}
              height={90}
              className="relative w-5 h-5 u-text-gray-200"
      alt="logo gastonfr"/>
    </div>
  </div>
  <div className="container py-6 px-10">
    <div className="sm:relative flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      <div className="flex flex-col-reverse items-center gap-3 sm:flex-row sm:w-40 md:w-60">

        {/* modo oscuro */}

        <span className="text-sm text-gray-400">
          © 2023 gfranco - MIT License
        </span>
      </div>
      <ul className="flex flex-wrap justify-center text-sm gap-x-6 gap-y-2">

{/*         <li>
          <a
            href="/enterprise/support"
            className="md:ml-[74px] font-medium text-gray-400 hover:text-gray-100 focus:text-gray-100"
          >
            Enterprise
          </a>
        </li>
        <li>
          <a
            href="/design-kit"
            className="font-medium text-gray-400 hover:text-gray-100 focus:text-gray-100"
          >
            Design Kit
          </a>
        </li>
        <li>
          <a
            href="https://nuxtlabs.com"
            rel="noopener noreferrer"
            className="font-medium text-gray-400 hover:text-gray-100 focus:text-gray-100"
          >
            NuxtLabs
          </a>
        </li>
        <li>
          <a
            href="https://nuxt.studio"
            rel="noopener noreferrer"
            className="font-medium text-gray-400 hover:text-gray-100 focus:text-gray-100"
          >
            Nuxt Studio
          </a>
        </li> */}

      </ul>
      <ul className="flex items-center justify-end gap-1 -mr-4 sm:-mr-0 sm:gap-3 z-10 sm:w-40 md:w-60">
        <li>
        <a
          href="https://www.linkedin.com/in/gaston-franco/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-2xl"
          title="Follow Gaston Franco"
          data-v-d64ec27c=""
        >
          <AiFillLinkedin
                      className="text-gray-100 transition duration-500 hover:text-blue-500 hover:scale-110"
                      width="1em"
                                 height="1em"
          />

          <span data-v-d64ec27c="">
            {/*[*/}
            <span className="sr-only">Follow Gaston Franco Linkedin</span>
            {/*]*/}
          </span>
          {/**/}
        </a>
        </li>
        <li>
        <a
          href="https://github.com/gastonfr24"
          rel="noopener noreferrer"
          target="_blank"
          className="text-2xl"
          title="Follow Gaston Franco"
          data-v-d64ec27c=""
        >
          <AiFillGithub
                      className="text-gray-100 transition duration-500 hover:text-violet-500 hover:scale-110"
                      width="1em"
                                 height="1em"
          />
        </a>
        </li>
        <li>
        <a
          href="https://www.instagram.com/gastonfr24/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-2xl"
          title="Follow Gaston Franco"
          data-v-d64ec27c=""
        >
          <AiFillInstagram
                      className="text-gray-100 transition duration-500 hover:text-pink-400 hover:scale-110"
                      width="1em"
                                 height="1em"
          />
        </a>
        </li>

      </ul>
    </div>
  </div>
</footer>
    </div>

  )
}

export default Footer

