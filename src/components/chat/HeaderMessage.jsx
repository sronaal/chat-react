import React from 'react'

function HeaderMessage({ friend }) {

  return (
    <>
      <div className='bg-gray-100 rounded-lg p-4 flex gap-3 items-center '>
        <img src={friend?.photoURL} className='w-12 h-12 rounded-lg'></img>
        <h2 className=''>{friend?.username}</h2>
      </div>
    </>

  )
}

export default HeaderMessage