import React from 'react'

const MessageSender = () => {
    return (
        <article className='flex gap-x-2'>
            <img className='rounded-full size-10' src="https://randomuser.me/api/portraits/thumb/men/67.jpg" alt="" />
            <div className='bg-white rounded-md p-2 text-gray-700 max-w-[70%]'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, in sint officiis neque fuga dolores eum tempora. Nostrum blanditiis distinctio sunt delectus, minima eveniet ullam, veniam, quisquam totam vitae mollitia!
                </p>
                <p className='text-right text-xs '>right now</p>
            </div>
        </article>
    )
}

export default MessageSender
