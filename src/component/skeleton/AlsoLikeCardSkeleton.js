import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function AlsoLikeCardSkeleton() {
    return (
        <div>
            <div className='h-52 '>
            <Skeleton height={200} className='mb-2' />

            </div>
            <Skeleton count={2} />
        </div>
    )
}

export default AlsoLikeCardSkeleton