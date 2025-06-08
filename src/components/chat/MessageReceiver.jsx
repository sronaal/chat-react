import React from 'react'

const MessageReceiver = ({mensaje}) => {
  return (
     <article className='flex gap-x-2 flex-row-reverse'>
        <img className='rounded-full size-10' src="https://randomuser.me/api/portraits/thumb/men/67.jpg" alt="" />
        <div className='bg-white rounded-md p-2 text-gray-700 max-w-[70%]'>
          <p>{mensaje}
          </p>
          <p className='text-right text-xs '>right now</p>
        </div>
      </article>
  )
}

export default MessageReceiver
