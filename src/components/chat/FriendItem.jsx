import React from 'react'

function FriendItem({username, photoURL}) {
    return (
        <div>
            <article className="flex items-center gap-x-4 py-4 px-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                <img
                    src={photoURL}
                    alt=""
                    className="w-12 h-12 rounded-md"
                />
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg ">{username}</h3>
                    <p className="text-sm truncate">Hola que tal bro , estas bien? lorem lorem lorel </p>
                </div>
            </article>



        </div>
    )
}

export default FriendItem