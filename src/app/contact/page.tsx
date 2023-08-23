// Styles
import Header from '@/components/contact/Header'
import style from './page.module.css'

export const metadata = {
  title: 'Gastón Franco | Contacto',
  description: 'Enviar una cotización para recibir precios sobre mis servicios de desarrollo web y marketing',
  keywords: "web design, blog, ecommerce, portfolio, marketing, pricing, price, precio, product, productos",
}

function page() {
  return (
    <div
    className={`${style.background} ${style.backgroundgray}`}
    >
<div style={{zIndex:'10'}}>
<Header/>
</div>
</div>
  )
}

export default page