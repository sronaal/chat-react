import { useState } from 'react'
import Friends from '../components/chat/Friends'
import Messages from '../components/chat/Messages'



function LayoutChat() {

  const [friend, setFriend] = useState({})
  return (

    <>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_3fr]  h-auto md:h-[600px text-gray-700'>
        <Friends setFriend={setFriend} />
        <Messages friend={friend} />

      </div>
    </>
  )
}

export default LayoutChat
