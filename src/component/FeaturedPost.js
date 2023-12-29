import React from 'react'
import { FeaturedCard } from './FeaturedCard'
import { useSelector } from 'react-redux'
import LatestSkeleton from './skeleton/LatestSkeleton'
import { STATUSES } from '../store/Blogslice'
function FeaturedPost() {
    const { data, status } = useSelector(state => state.blog)
    const latestBlog = [...data].reverse().slice(0, 4)
    return (
        <div>
            <div className="container mx-auto lg:px-24">
                <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-12 mb-5 dark:text-white'>Latest Post</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                        status === STATUSES.LOADING ?
                            <>
                                <LatestSkeleton />
                                <LatestSkeleton />
                                <LatestSkeleton />
                                <LatestSkeleton />
                            </>
                            :
                            latestBlog.map((item) => {
                                return <FeaturedCard item={item}/>
                            })
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default FeaturedPost