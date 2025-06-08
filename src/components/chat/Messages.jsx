import React from 'react'
import HeaderMessage from './HeaderMessage'
import InputMessage from './InputMessage'
import MessagesChat from './MessagesChat'
import { useSocket } from '../../hooks/useSocket'
import { URLSOCKET } from '../../libs/utils'



function Messages() {


  const { socket } = useSocket(URLSOCKET)
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
