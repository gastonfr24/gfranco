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
import Dropdown from "./Dropdown";


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
        navbarElement.classList.add('dark:bg-graydark');
        navbarElement.classList.add('bg-gray-50');
        navbarElement.classList.add('shadow-lg');
      } else {
        navbarElement.classList.add('bg-transparent');
        navbarElement.classList.remove('dark:bg-graydark');
        navbarElement.classList.remove('bg-gray-50');
        navbarElement.classList.remove('shadow-lg');
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
      href: '/contact',
       current: currentRoute==='/contact' ? true:false,
      // icon: MdEmail,
    },
  ];

  return (
    <nav
      id="navbar"
      className="
      fixed w-full
      lg:px-16
      px-10
      bg-transparent lg:py-8 transition-all duration-500 z-[10] 
      text-slate-800
      dark:text-white"
    >
      <div className="
      relative
      flex
      w-11/12 mx-auto
       justify-between items-center">
        <a href='/' className="">
        <Image src={logo} alt="logo gastonfr" className="w-auto h-[45px]" />
        </a>
        {/* Rutas */}
        <ul className="hidden lg:flex">
        {navigation.map((item) => (
          <li key={item.name} className="uppercase font-semibold text-xs mx-[32px]">
              <Link href={item.href}
                      className={`${style.underline} group flex items-center ${item.current?'text-sky-500 dark:text-skyblue-100':'text-gray-800 dark:text-white'}`}>
                {item.name}
        </Link>
          </li>
          ))}
        </ul>
        <div className="lg:hidden">
        <Dropdown navigation={navigation}/>
        </div>

      </div>
      <ScrollFunction/>
    </nav>

  )
}

export default Navbar