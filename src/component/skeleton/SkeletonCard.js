import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function SkeletonCard() {
    return (
        <div>
            <Skeleton height={200} className='mb-3' />
            <Skeleton width={90} className='mb-2'/>
            <Skeleton count={2} />
            <div className='mb-2'></div>
            <Skeleton count={3}  />
        </div>
    )
}

export default SkeletonCard