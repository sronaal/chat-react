import React from 'react'
import HeaderMessage from './HeaderMessage'
import InputMessage from './InputMessage'

function Messages() {
  return (
   <>
    <div className="bg-gray-200 flex flex-col h-auto md:h-screen justify-between p-5">
      <HeaderMessage/>
      <InputMessage/>
    </div>
   </>
  )
}

export default Messages
