"use client"
import CopyToClipboard from 'react-copy-to-clipboard';
import { toast } from 'sonner'
import { BiCopy } from "react-icons/bi"

function CopyEmail() {

  return (
<div>
      <CopyToClipboard text="gastonfr24@gmail.com">
        <button className='flex items-center hover:text-skyblue-100 transition duration-300'
        onClick={()=> toast("email copiado")}
        >
        gastonfr24@gmail.com <BiCopy className="text-[18px] ml-1" />
        </button>
      </CopyToClipboard>
</div>

  )
}

export default CopyEmail