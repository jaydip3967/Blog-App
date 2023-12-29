import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function LatestSkeleton() {
    return (
        <div className='flex'>
            <div className='mb-2'></div>
            <Card className="w-full max-w-[48rem] flex-row mt-6 group">
                <CardHeader className="m-0 w-2/5 shrink-0 rounded-r-none" >
                    <Skeleton height={230} width={290} />
                </CardHeader>
                <CardBody className="p-3 relative">
                    <Skeleton width={90} className='mb-2' />
                    <div className='w-[140px] md:w-[250px]'>
                        <Skeleton count={2}  />
                    </div>
                    <div className="my-2">
                        <Skeleton count={3} />
                    </div>
                    <Skeleton width={120} height={30} className='mb-2' />
                </CardBody>
            </Card>
        </div>
    )
}

export default LatestSkeleton