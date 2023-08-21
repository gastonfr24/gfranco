"use client"

import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import style from "./page.module.css"
import Link from 'next/link'


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

  interface NavigationProps {
    navigation: Navigation[];
  }

function Dropdown({navigation}: NavigationProps) {
    const [isOpened, setIsOpened] = useState(false);

    const toggleMenu = () => {
      setIsOpened((prevIsOpened) => !prevIsOpened);
    };

  return (
<div className="">
      <Menu as="div" className=" inline-block text-left">
        <div>
          <Menu.Button           
      className={`${style.menu} ${isOpened ? style.opened : ''} w-12 h-auto`}
      onClick={toggleMenu}
      aria-label="Main Menu"
    >
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path
          className={`${style.line} ${style.line1} stroke-gray-900 dark:stroke-white`}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path className={`${style.line} ${style.line2} stroke-gray-900 dark:stroke-white`} d="M 20,50 H 80" />
        <path
          className={`${style.line} ${style.line3} stroke-gray-900 dark:stroke-white`}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>


          </Menu.Button>
        </div>
        <Transition
          show={isOpened}
          as={Fragment}
          enter="transition ease-out duration-300 transform origin-top-right"
          enterFrom="opacity-0 scale-95 translate-x-full"
          enterTo="opacity-100 scale-100 translate-x-0"
          leave="transition ease-in duration-200 transform origin-top-right"
          leaveFrom="opacity-100 scale-100 translate-x-0"
          leaveTo="opacity-0 scale-95 translate-x-full"
        >
          <Menu.Items className="
          absolute
          bg-white dark:bg-graydark
           h-screen
          -right-[64px] w-56 mt-[6px]
           divide-gray-100
           shadow-lg ring-1 ring-black 
           ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            {navigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
              <Link href={item.href}
                    onClick={() => setIsOpened(false)}
                    className={`${
                      active ? 'bg-blue-300 dark:text-white' : 'dark:text-gray-200'
                    } group flex w-full items-center rounded-md px-6 py-3
                    capitalize text-sm`}
                  >
                    {item.name}
        </Link>
                )}
              </Menu.Item>
            ))}
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Dropdown