import React from 'react'
import Friends from '../components/chat/Friends'
import Messages from '../components/chat/Messages'
function LayoutChat() {
  return (

    <>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr]  h-auto md:h-[600px text-gray-700'>
        <Friends />
        <Messages />

      </div>
    </>
  )
}

export default LayoutChat
