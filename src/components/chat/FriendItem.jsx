import React from 'react'

function FriendItem() {
  return (
       <div>


            <article className="flex items-center gap-x-4 py-4 px-5 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                <img
                    src='https://lh3.googleusercontent.com/a/ACg8ocKxESgokM1qYOlI7E8eT7TeEr_0Sqw7QkJZsvmzJoQzpYXUpRvy=s288-c-no'
                    alt=""
                    className="w-12 h-12 rounded-md"
                />
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg ">Ronal</h3>
                    <p className="text-sm truncate">Hola que tal bro , estas bien? lorem lorem lorel </p>
                </div>
            </article>
            
          
    
        </div>
  )
}

export default FriendItem