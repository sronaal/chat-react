import React, { useState, useEffect } from 'react'
import InputSearch from './InputSearch'
import FriendItem from './FriendItem'
import { obtenerUsuarios } from '../../services/UserApi'

function Friends({ setFriend }) {

  const [usuarios, setUsuario] = useState([])

  useEffect(() => {

    obtenerUsuarios()
      .then(({ data }) => {
        setUsuario(data.usuarios)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  console.log(usuarios)

  return (
    <div className={`grid grid-rows-[auto_1fr] h-screen border-r border-gray-200`} >

      <section className='border-b border-gray-200 p-4'>
        <h1 className='text-xl font-bold mb-4'>Chat</h1>
        <InputSearch />
      </section>

      <section className='overflow-y-scroll custom-scrollbar'>
        {
          usuarios.map((usuarios) => (
            <FriendItem setFriend={setFriend} key={usuarios._id} {...usuarios} />
          ))
        }
      </section>

    </div>
  )
}

export default Friends