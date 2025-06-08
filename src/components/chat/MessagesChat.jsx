import React from 'react'
import MessageSender from './MessageSender'
import MessageReceiver from './MessageReceiver'

const MessagesChat = () => {
  return (

    <main className="bg-indigo-100 p-4 space-y-2">
      


     <MessageSender/>
     <MessageReceiver/>
    </main>

  )
}

export default MessagesChat
