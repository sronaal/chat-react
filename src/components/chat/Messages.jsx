import React from 'react'
import HeaderMessage from './HeaderMessage'
import InputMessage from './InputMessage'
import MessagesChat from './MessagesChat'

function Messages({ socket }) {
  return (
    <>
      <div className="grid grid-rows-[auto_3fr_auto] h-screen">
        <HeaderMessage />
        <MessagesChat />
        <InputMessage socket={socket} />
      </div>
    </>
  )
}

export default Messages
