import React from 'react'
import HeaderMessage from './HeaderMessage'
import InputMessage from './InputMessage'
import MessagesChat from './MessagesChat'
import { useSocket } from '../../hooks/useSocket'
import { URLSOCKET } from '../../libs/utils'



function Messages({friend}) {


  const { socket } = useSocket(URLSOCKET)
  return (
    <>
      <div className="grid grid-rows-[auto_3fr_auto] h-screen">
        <HeaderMessage friend={friend} />
        <MessagesChat socket={socket} />
        <InputMessage socket={socket} />
      </div>
    </>
  )
}

export default Messages
