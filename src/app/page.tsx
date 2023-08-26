import Header from "@/components/home/header/Header";
import AllServices from "@/components/home/services/AllServices";
import Services from "@/components/home/services/Services";
import Who from "@/components/home/who/Who";


export default function Home() {

  return (
    <main className="
    transition-colors duration-700 ease-in-out
    lg:px-28 px-10
    bg-gray-100
    background-gray dark:text-gray-200 
    background">
      <div style={{zIndex:'10'}}>
      <Header/>
      <Who/>
      {/* <Services/> */}
      <AllServices/>
      </div>
    </main>
  )
}
