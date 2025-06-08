import { useEffect, useState } from 'react'
import MessageSender from './MessageSender'
import MessageReceiver from './MessageReceiver'
import { obtenerMensajes } from '../../services/ChatApi'
import { usuarioAutenticado } from '../../libs/utils'

const MessagesChat = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    obtenerMensajes()
      .then((respuesta) => {
        console.log(respuesta.data.mensajes)
        setMessages(respuesta.data.mensajes)
      })
  }, [])



  return (
    <main className="bg-indigo-100 p-4 space-y-2 overflow-y-auto h-full">
      {messages.map((mensaje) =>
        mensaje.sender._id === usuarioAutenticado.id ?
          (

            <MessageSender key={mensaje._id} mensaje={mensaje.content} />
          ) :
          (
            <MessageReceiver key={mensaje._id} mensaje={mensaje.content} />
          )
      )}
    </main>
  )
}

export default MessagesChat
