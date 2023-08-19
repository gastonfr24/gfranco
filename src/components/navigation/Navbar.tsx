"use client"

//Images
import logo from "public/assets/images/logo.png"
import Image from "next/image"

// Hooks
import { useEffect } from "react";

// Styles
import style from './page.module.css'
import Link from "next/link";
import { usePathname } from 'next/navigation';


interface NavItem {
  name: string;
  href: string;
}

interface Navigation {
  name: string;
  description: string;
  href: string;
  navitems?: NavItem[];
  current?: boolean;
  // icon?: React.ElementType; // Si deseas incluir la información del tipo de icono
}


export const ScrollFunction = () => {
  const scrollFunction = () => {
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 30) {
        navbarElement.classList.remove('bg-transparent');
        navbarElement.classList.add('bg-graydark');
        navbarElement.classList.add('shadow-lg');
      } else {
        navbarElement.classList.remove('bg-graydark');
        navbarElement.classList.remove('shadow-lg');
        navbarElement.classList.add('bg-transparent');
      }
    }
  };

  useEffect(() => {
    window.onscroll = scrollFunction;

    return () => {
      window.onscroll = null;
    };
  }, []);

  return null; // No necesitas renderizar nada en este componente
};


function Navbar() {
  const currentRoute = usePathname();
  const navigation: Navigation[] = [
    {
      name: 'home',
      description: '¿Tienes preguntas o estás interesado en trabajar juntos?',
      href: '/',
      // icon: MdEmail,
       current: currentRoute==='/' ? true:false
    },

    {
      name: 'services',
      description: '¿Tienes preguntas o estás interesado en trabajar juntos?',
      href: '/services',
       current: currentRoute==='/services' ? true:false,
      // icon: FaUserAlt,
    },
    {
      name: 'contacto',
      description: '¿Tienes preguntas o estás interesado en trabajar juntos?',
      href: '/contacto',
       current: currentRoute==='/contact' ? true:false,
      // icon: MdEmail,
    },
  ];

  return (
    <nav
      id="navbar"
      className="fixed w-full
      px-16
      bg-transparent py-8 transition-all duration-500 z-[10] text-white"
    >
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <a href='/' className="">
        <Image src={logo} alt="logo gastonfr" className="w-auto h-[45px]" />
        </a>
        {/* Rutas */}
        <ul className="flex">
        {navigation.map((item) => (
          <li className="uppercase font-semibold text-xs mx-[32px]">
              <Link key={item.name} href={item.href}
                      className={`${style.underline} group flex items-center ${item.current?'text-skyblue-100':''}`}>
                {item.name}
        </Link>
          </li>
          ))}
        </ul>
      </div>
      <ScrollFunction/>
    </nav>

  )
}

export default Navbar