import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SingleBlogSkeleton() {
    return (
        <div className='w-4/5 mx-auto'>
            <Skeleton width={90} className='mb-3' />
            <Skeleton count={2} height={30} className='mb-2' />
            <Skeleton height={300} className='mb-2' />
            <Skeleton count={6}  />
        </div>
    )
}

export default SingleBlogSkeleton