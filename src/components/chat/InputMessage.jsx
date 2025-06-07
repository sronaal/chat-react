import { BiSend } from "react-icons/bi";


function InputMessage() {
  return (
    <div>
      <form className='flex items-center gap-4 '>
        <input className='outline-none ring-1 ring-[#808080] w-full rounded-lg p-2' placeholder='Escribir su mensaje'/>
        <BiSend className="w-10 h-10 cursor-pointer text-[#5b5b5b]"/>
      </form>
    </div>
  )
}

export default InputMessage
