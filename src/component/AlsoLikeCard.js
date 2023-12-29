import React from 'react'
import { useNavigate } from 'react-router-dom'

function AlsoLikeCard({item}) {
  const navigate = useNavigate()

  const gotoBlog = () => {
    navigate('/blog/'+ item._id)
  }
  return (
    <div>
        <img src={`http://localhost:3001/images/${item.image}`} alt="" className='w-full rounded-xl h-52' />
        <div className='mt-4 text-lg md:text-xl font-semibold hover:underline cursor-pointer dark:text-white' onClick={gotoBlog}>{item.title}</div>
    </div>
  )
}

export default AlsoLikeCard