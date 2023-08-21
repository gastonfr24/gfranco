"use client"

// Hooks
import { useState } from "react"

// Styles
import style from "./page.module.css"

// Toast
import { Toaster, toast } from 'sonner'

function Form() {

// Form
const [loading, setLoading] = useState(false)
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
})
const {
name,
email,
message,
  } = formData

  const onChange = (e:any) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  // Send Mail
  const onSubmit = async (e:any) =>{
    e.preventDefault()
      setLoading(true)
       const response = await fetch('api/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }
      )
      if (response.status === 200){
        toast.success(`${name} gracias por ponerte en contacto!`)
        setFormData({
          name: '',
          email: '',
          message: '',
        })
        setLoading(false)
      }else{
        toast('No se pudo enviar el email, intenta mas tarde')
        setLoading(false)
      }
  }

  return (
    <form className="py-4 px-6 flex flex-col justify-center" onSubmit={e=>onSubmit(e)}>
    <div className="flex flex-col">
      <label htmlFor="name" className="hidden">
        Full Name
      </label>
      <input
      value={name}
      required
      onChange={e=>onChange(e)}
        type="name"
        name="name"
        id="name"
        placeholder="Full Name"
        className="w-100 mt-2 py-3 px-3 rounded-lg dark:bg-opacity-[0.03] dark:backdrop-blur-sm bg-white dark:bg-graydark border boder-gray-600 dark:border-gray-400 text-gray-800 dark:text-gray-300 font-semibold focus:border-skyblue-100 focus:outline-none"
      />
    </div>
    <div className="flex flex-col mt-2">
      <label htmlFor="email" className="hidden">
        Email
      </label>
      <input
        type="email"
        name="email"
        value={email}
        required
        onChange={e=>onChange(e)}
        id="email"
        placeholder="Email"
        className="w-100 mt-2 py-3 px-3 rounded-lg dark:bg-opacity-[0.03] dark:backdrop-blur-sm bg-white dark:bg-graydark border boder-gray-600 dark:border-gray-400 text-gray-800 dark:text-gray-300 font-semibold focus:border-skyblue-100 focus:outline-none"
      />
    </div>
    <div className="flex flex-col mt-2">
      <label htmlFor="content" className="hidden">
        Number
      </label>
      <textarea
      style={{ resize: 'none' }}
      rows={6}
        name="message"
        value={message}
        required
        onChange={e=>onChange(e)}
        id="content"
        placeholder="Contenido del email"
        className="w-100 mt-2 py-3 px-3 rounded-lg dark:bg-opacity-[0.03] dark:backdrop-blur-sm bg-white dark:bg-graydark border boder-gray-600 dark:border-gray-400 text-gray-800 dark:text-gray-300 font-semibold focus:border-skyblue-100 focus:outline-none"
      />
    </div>
    {loading ?
       <button className={`${style.sendbutton} mt-6`}>
       <span className={`${style.sendbutton_lg}`}>
         <span className={`${style.sendbutton_text}`}>Enviando...</span>
       </span>
       </button> 
    :
    <button className={`${style.sendbutton} mt-6`} type="submit">
<span className={`${style.sendbutton_lg}`}>
  <span className={`${style.sendbutton_sl}`}></span>
  <span className={`${style.sendbutton_text}`}>Enviar</span>
</span>
</button>
    }
<Toaster position="bottom-left" />
  </form>
  )
}

export default Form