import { useState } from "react";
import { BiSend } from "react-icons/bi";
import EmojiPicker from 'emoji-picker-react';
import { FaRegSmileBeam } from "react-icons/fa";

function InputMessage({ socket }) {

  const [showPickerEmoji, setShowPickerEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const usuarioAutenticado = JSON.parse(localStorage.getItem('user'))
  const handleSendMessage = () => {
    if (!message.trim()) return;

    console.log("Usuario", usuarioAutenticado)
    const mensaje = {
      receiver: "684357fd6b1b2ebe33074c80", 
      sender: usuarioAutenticado.id,
      content: message
    };

    console.log("Mensaje", mensaje)
    socket.emit('enviar-mensajes', mensaje);

    setMessage('');
    setShowPickerEmoji(false);
  };

  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <footer className="border-t border-gray-300 p-4 flex gap-2 items-center">
      <div className="relative">
        <button
          className="bg-black cursor-pointer p-3 rounded-md"
          onClick={() => setShowPickerEmoji(prev => !prev)}
        >
          <FaRegSmileBeam className="text-white text-xl" />
        </button>
        {showPickerEmoji && (
          <div className="absolute bottom-12 z-10">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Escribe un mensaje"
        className="border rounded-md w-full p-3"
      />
      <button
        onClick={handleSendMessage}
        className="bg-black text-white p-3 rounded-md hover:bg-gray-800 transition"
      >
        <BiSend size={20} />
      </button>
    </footer>
  );
}

export default InputMessage;
