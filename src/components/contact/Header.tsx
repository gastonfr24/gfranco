import Form from "./Form"
import Information from "./Information"


function Header() {
  return (
<div className="relative flex items-top justify-center min-h-screen sm:items-center pt-24 mx-10 lg:mx-0">
  <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
    <div className="mt-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
<Information/>
<Form/>
      </div>
    </div>
  </div>
</div>
  )
}

export default Header