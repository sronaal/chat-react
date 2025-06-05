import React from 'react'
import Friends from '../components/chat/Friends'
import Messages from '../components/chat/Messages'

function LayoutChat() {
  return (
    <div className='grid grid-cols-[1fr_4fr] h-screen'>
      <Friends/>
      <Messages/>

    </div>
  )
}

export default LayoutChat
