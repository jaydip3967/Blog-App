import React from 'react'
import { BlogCard } from './BlogCard'
import { useDispatch, useSelector } from 'react-redux'
import { STATUSES } from '../store/Blogslice'
import SkeletonCard from './skeleton/SkeletonCard'

function Blogs() {
    const dispatch = useDispatch()
    const { data, status } = useSelector(state => state.blog)
    if (status === STATUSES.ERROR) {
        return <h2>Error</h2>
    }

    return (
        <div>
            <div className="container mt-16 lg:px-24">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-medium text-center mb-8 dark:text-white'>See what we’ve
                    <span className='font-black dark:text-white'> written lately </span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4">
                    {
                        status === STATUSES.LOADING ?
                            <>
                                <SkeletonCard />
                                <SkeletonCard />
                                <SkeletonCard />
                            </>
                            :
                            [...data].reverse().slice(4).map((item, inx) => {
                                return <BlogCard item={item}/>
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs