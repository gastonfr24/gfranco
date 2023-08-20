// Styles
import Header from '@/components/contact/Header'
import style from './page.module.css'

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