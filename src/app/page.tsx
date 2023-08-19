
import Header from "@/components/home/header/Header";
import Services from "@/components/home/services/Services";
import Who from "@/components/home/who/Who";
import SroollSmoth from "@/components/tools/SrollSmooth";


export default function Home() {

  return (
    <main className="
    px-28
    background-gray text-gray-200 
    background">
      <div style={{zIndex:'10'}}>
      <Header/>
      <Who/>
      <Services/>
      </div>
      <SroollSmoth/>
    </main>
  )
}
