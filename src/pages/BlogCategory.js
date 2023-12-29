import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BlogCard } from '../component/BlogCard';
import { useParams } from 'react-router-dom'

function BlogCategory() {
    const params = useParams();
    const data = useSelector(state => state.blog.data)
    const filetrCategory = data.filter((el) => {
        return el.category.name === params.name
    })
    return (
        <div>
            <div className="container pt-28 lg:px-24 ">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-medium  mb-8 dark:text-white'>{params.name}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4">
                    {
                        filetrCategory.length > 0 ?
                            filetrCategory.reverse().map((item, inx) => {
                                return <BlogCard item={item} />
                            }) :
                            <>
                                <div style={{height: "309px"}} className='dark:text-white'>
                                    <h1 className='text-xl pt-5'>No Blogs available in this category.</h1>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogCategory