"use client"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { items } from "./servicesData"
import ServiceCard from "./ServiceCard"
import styles from "./page.module.css"


function AllServices() {
    const [selectedId, setSelectedId] = useState("")
    const selectedItem = items.find((item) => item.id === selectedId);

    // Manejar clics fuera del contenido seleccionado para cerrarlo
    const handleOutsideClick = (event:any) => {
        if (selectedId && !event.target.closest(".selected-content")) {
            setSelectedId("")
        }
    }

    // Agregar el manejador de eventos al montar el componente
    useEffect(() => {
        document.addEventListener("click", handleOutsideClick)
        return () => {
            document.removeEventListener("click", handleOutsideClick)
        }
    }, [selectedId])

    return (
        <div className="">
            <div className="lg:grid grid-cols-2">
                {items.map(item => (
                    <motion.div
                        key={item.id}
                        layoutId={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className='cursor-pointer p-6 m-4 rounded-lg bg-[#222222]
                        border border-transparent hover:border-[#454545]
                        '
                        style={{
                            motionDistance: "black"
                        }}
                        >
                        
                        <motion.p className="text-2xl text-skyblue-100">{item.title}</motion.p>
                        <motion.p className="text-gray-500 mt-4">{item.subtitle}</motion.p>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        key="overlay"
                        className="fixed pt-32 inset-0 flex justify-center items-center backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            layoutId={selectedId}
                            onClick={() => setSelectedId("")}
                            className="lg:w-8/12 h-auto dark:bg-[#222222] rounded-lg border-[#454545] selected-content"
                        >
                            <motion.div
                            className="flex flex-col gap-10"
                            >
                                {selectedItem ? <ServiceCard item={selectedItem} /> : null}
                        </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default AllServices
