'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Button = ({buttonName,linkTo}:any) => {
  const router = useRouter()
  const handleClick=()=>{
    router.push(linkTo);
  }
  return (
    <button className='btn h-16 mb-6  bg-blue-800 rounded-md text-white font-bold w-36 h-30 relative
    before:w-full before:h-full before:scale-x-[1.15] before:scale-y-[1.35]  before:absolute before:top-[50%] before:left-[50%]
    before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
    before:from-red-500 before:to-blue-500 before:bg-gradient-to-br
    before:rounded-md 
    hover:bg-blue-9500 transition-all duration-300 m-2' onClick={()=>handleClick()}>{buttonName}</button>
  )
}

export default Button