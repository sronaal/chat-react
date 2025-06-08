import { useState } from "react";
import { BiSend } from "react-icons/bi";
import EmojiPicker from 'emoji-picker-react';
import { FaRegSmileBeam } from "react-icons/fa";
import { usuarioAutenticado } from "../../libs/utils";


function InputMessage({ socket }) {

  const [showPickerEmoji, setShowPickerEmoki] = useState(false)
  const [messsage, setMessage] = useState("")
  

  const handleSendMessage = async () => {

    console.log(messsage)

    const mensaje = {
      receiver:"684356a2c247287a2312d19b",
      sender: usuarioAutenticado.id,
      content: messsage
    }

    socket.emit('enviar-mensajes', mensaje)

    setMessage('')
    setShowPickerEmoki(false)
  }
  const emojiData = (emoji) => {
    setMessage((prev) => prev + emoji.emoji)
  }
  return (


    <footer className="border-t border-gray-300 p-4 flex gap-2 items-center">
      <div className='relative'>
        <button className='bg-black cursor-pointer p-3' onClick={() => setShowPickerEmoki((prev) => !prev)}>
          <FaRegSmileBeam className='text-white text-xl' />
        </button>
        <div className='absolute bottom-12'>
          <EmojiPicker open={showPickerEmoji} onEmojiClick={emojiData} />
        </div>
      </div>
      <input
        value={messsage}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Escribe un mensaje"
        className=" border rounded-md w-full p-3"
      />
      <button onClick={handleSendMessage} className="bg-black cursor-pointer">
        enviar
      </button>
    </footer>

  )
}

export default InputMessage
