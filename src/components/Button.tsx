import React from 'react'

interface ButtonProps{
    name:string
    key:number
}

const Button = ({name}:ButtonProps) => {
  return (
    <div>
        <button className='cursor-pointer whitespace-nowrap bg-gray-200 p-1 px-3 m-2 rounded-lg font-medium'>{name}</button>
    </div>
  )
}

export default Button