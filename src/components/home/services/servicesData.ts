// Images
import { StaticImageData } from "next/image";
import blog from "public/assets/images/demo/blog_up.png"
import ecommerce from "public/assets/images/demo/ecommerce_up.png"
import portfolio from "public/assets/images/demo/portfolio_up.png"
import empresarial from "public/assets/images/demo/viperpup.png"

// Icons
import { BsFilePost } from "react-icons/bs"

// servicesData.ts
export interface ServiceItem {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    span: string;
    color: string;
    thumbnail: StaticImageData
    icon: string
}

export const items: ServiceItem[] = [
    {
        id: "item_3",
        title: "Página Web Empresarial",
        subtitle: "¿Buscas potenciar tu presencia en línea? ¡Adquiere tu Página Web Empresarial ahora mismo! Atrae a tu audiencia con un diseño cautivador y conviértelos en clientes fieles.",
        content: 'Con nuestra solución, obtendrás un eficaz embudo de ventas, brindando a los visitantes una visión completa de tus servicios y la oportunidad de suscribirse para recibir las últimas novedades.',
        span: '2',
        thumbnail:empresarial,
        color: "#8adfe0",
        icon: BsFilePost
    },
    {
        id: "item_1",
        title: "Blog Profesional",
        subtitle: "¿Deseas compartir tus ideas y llegar a una audiencia más amplia? Con mi servicio de creación de blogs profesionales, podrás alcanzar un público vasto y diverso.",
        content: 'Potenciado por estrategias de SEO que mejoran tu visibilidad en línea, este blog te posicionará en la cima. Además, los visitantes tendrán la opción de suscribirse para mantenerse al díacon las últimas novedades.',
        span: '4',
        thumbnail:blog,
        color: "#a3e635",
        icon: BsFilePost
    },
    {
        id: "item_4",
        title: "Portfolio Personal",
        subtitle: " Destaca tus logros y atrae la atención de potenciales clientes y colaboradores con un Portafolio Web personalizado.",
        content: 'Transforma tus proyectos en una vitrina digital impresionante que cautiva a tus visitantes y resalta tu talento de manera única. Obtén tu Portafolio Web ahora mismo y abre la puerta a nuevas oportunidades para mostrar tu expertise al mundo.',
        span: '2',
        thumbnail:portfolio,
        color: "#fb7185",
        icon: BsFilePost
    },
    {
        id: "item_2",
        title: "E-commerce",
        subtitle: "Llega a más personas con un Ecommerce llamativo y fácil de usar. Diseñado para capturar la atención y ofreciendo una experiencia intuitiva que guía a tus clientes hacia la compra.",
        content: 'Además, brinda a tus clientes opciones seguras y variadas para el pago como MercadoPago, tarjeta de crédito y hasta criptomonedas como Ethereum (ETH)',
        span: '4',
        thumbnail:ecommerce,
        color: "#a78bfa",
        icon: BsFilePost
    },
];
