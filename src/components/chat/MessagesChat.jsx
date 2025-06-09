import { useEffect, useState, useRef } from 'react'
import MessageSender from './MessageSender'
import MessageReceiver from './MessageReceiver'
import { obtenerMensajes } from '../../services/ChatApi'

const MessagesChat = ({ socket }) => {

  const [messages, setMessages] = useState([])
  const usuarioAutenticado = JSON.parse(localStorage.getItem('user'))
  const bottomRef = useRef(null); // <== Aquí

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });

  }, [messages]);



  useEffect(() => {


    socket.on('enviar-mensaje', (data) => {
      console.log(data)


      if (typeof data.sender === 'string') {
        data.sender = {
          _id: data.sender,
          username: usuarioAutenticado.username // puedes incluirlo si quieres mostrarlo
        };
      }

      setMessages((prevMessages) => [...prevMessages, data])
    })

    obtenerMensajes()
      .then((respuesta) => {
        //console.log(respuesta.data.mensajes)
        setMessages(respuesta.data.mensajes)
      })
  }, [socket, usuarioAutenticado.username])

  console.log(messages)

  return (
    <main className="bg-indigo-100 p-4 space-y-2 overflow-y-auto h-full">
      {messages.map((mensaje) => {
        //console.log('Mensaje:', mensaje.content, 'Sender:', mensaje.sender._id, 'User:', usuarioAutenticado.id)
        return mensaje.sender._id === usuarioAutenticado.id ? (
          <MessageSender key={mensaje._id} mensaje={mensaje.content} />
        ) : (
          <MessageReceiver key={mensaje._id} mensaje={mensaje.content} />
        );
      })}
      <div ref={bottomRef} /> {/* Este div sirve para hacer scroll automático */}


    </main>
  )
}

export default MessagesChat
