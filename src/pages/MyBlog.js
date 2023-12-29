import React from 'react'
import { useSelector } from 'react-redux'
import { MyBlogCard } from '../component/MyBlogCard'
// import { useNavigate } from 'react-router-dom'
import { STATUSES } from '../store/Blogslice'
import SkeletonCard from '../component/skeleton/SkeletonCard'

function MyBlog() {
    // const navigate = useNavigate()
    let author = localStorage.getItem('author')
    const {data, status} = useSelector(state => state.blog)
    return (
        <div>
            <div className="container pt-28 ">
            <h2 className=' text-3xl md:text-4xl lg:text-5xl font-bold mt-12 mb-5 dark:text-white'>My Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4">
                    {
                        status === STATUSES.LOADING ?
                        <>
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </>
                        :
                            data.filter((el) => {
                                return author === el.author._id
                            })
                            .map((item, inx) => {
                                return <MyBlogCard item={item} />
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default MyBlog