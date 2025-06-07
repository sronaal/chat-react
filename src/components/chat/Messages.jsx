import React from 'react'
import HeaderMessage from './HeaderMessage'
import InputMessage from './InputMessage'
import MessagesChat from './MessagesChat'

function Messages() {
  return (
   <>
    <div className="grid grid-rows-[auto_3fr_auto] h-screen">
      <HeaderMessage/>
      <MessagesChat/>
      <InputMessage/>
    </div>
   </>
  )
}

export default Messages
