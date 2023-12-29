import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function TopContent() {
    const navigate = useNavigate()
    const data = useSelector(state => state.blog.data)
    const randomBlog = [...data].sort(() => Math.random() - 0.5)
    const blog1 = randomBlog.slice(0, 1)
    const blog2 = randomBlog.slice(1, 3)
    const gotoBlog = (item) => {
        navigate('/blog/'+ item._id)
      }
    return (
        <div>
            <div className="container mt-4 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-4">
                    {
                        blog1.map((item) => {
                            return <div className='relative image-part group overflow-hidden '>
                                <img src={`http://localhost:3001/images/${item.image}`} className='w-full !rounded-lg   object-fill ' alt="" style={{height: '610px'}} />
                                <h3 className='absolute bottom-5 px-6 text-xl lg:text-3xl text-white font-bold group-hover:underline cursor-pointer' onClick={() => gotoBlog(item)}>{item.title}</h3>
                            </div>        
                        })
                    }
                    <div className="grid lg:grid-rows-2 gap-4">
                    {
                        blog2.map((item) => {
                            return <div className='relative image-part group overflow-hidden'>
                                <img src={`http://localhost:3001/images/${item.image}`} className='w-full !rounded-lg h-60  object-fill' alt="" style={{height: '300px'}}/>
                                <h3 className='absolute bottom-5 px-6 cursor-pointer text-xl lg:text-3xl text-white font-bold group-hover:underline' onClick={() => gotoBlog(item)}>{item.title}</h3>
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopContent