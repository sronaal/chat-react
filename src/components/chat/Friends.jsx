import React from 'react'
import InputSearch from './InputSearch'
import FriendItem from './FriendItem'

function Friends() {
  return (
    <div className='grid grid-rows-[auto_1fr] h-screen border-r ' >

      <section className='border-b p-4'>
        <h1 className='text-xl font-bold text-gray-700 mb-4'>Chat</h1>
        <InputSearch/>
      </section>

      <section className='overflow-y-scroll custom-scrollbar'>
        <FriendItem/>
        <FriendItem/>
      </section>
      
    </div>
  )
}

export default Friends