import React, { useState } from 'react'
import InputSearch from './InputSearch'
import FriendItem from './FriendItem'

function Friends() {

  return (
    <div className={`grid grid-rows-[auto_1fr] h-screen border-r border-gray-200`} >

      <section className='border-b border-gray-200 p-4'>
        <h1 className='text-xl font-bold mb-4'>Chat</h1>
        <InputSearch/>
      </section>

      <section className='overflow-y-scroll custom-scrollbar'>
        {
          Array.from({length: 10}).map((item,i) => (
              <FriendItem key={i}/>

          ))
        }
      </section>
      
    </div>
  )
}

export default Friends