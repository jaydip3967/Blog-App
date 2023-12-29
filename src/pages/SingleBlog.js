import React from 'react'
import AlsoLikeCard from '../component/AlsoLikeCard'
import {  useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar } from '@chakra-ui/react'
import parse from 'html-react-parser';
import { STATUSES } from '../store/Blogslice';
import SingleBlogSkeleton from '../component/skeleton/SingleBlogSkeleton'
import AlsoLikeCardSkeleton from '../component/skeleton/AlsoLikeCardSkeleton'
import { FaCalendar } from "react-icons/fa";

function SingleBlog() {
    let date = new Date()
    const params = useParams();
    const {data, status} = useSelector(state => state.blog)
    const navigate = useNavigate()
    const gotoCategory = (item) => {
        navigate('/category/' + item.category.name)
    }
    const singleBlog = data.filter((el) => {
        return el._id === params.id
    })
    function wordsLen(str) {
        const array = str.trim().split(/\s+/);
        return array.length;
    }
    const copyData = data.filter((el) => {
        return el._id !== params.id
    }).sort(() => Math.random() - 0.5).slice(0, 4);

    return (
        <div>
            <div className="container pt-28 lg:px-24">
                {
                    status === STATUSES.LOADING ?
                    <>
                        <SingleBlogSkeleton />
                    </>
                    :
                    singleBlog.map((item) => {
                        return <div>
                            <div className='w-4/5 mx-auto'>
                                <div className="border-2 inline-block px-3 md:py-2 py-1 rounded-full md:text-base text-sm text-black border-black hover:bg-black hover:text-white font-medium mb-3 transition-all duration-500 cursor-pointer dark:text-white dark:border-white" onClick={() => gotoCategory(item)}>{item.category.name}</div>
                                <h1 className='md:text-4xl lg:text-5xl text-3xl font-extrabold leading-tight dark:text-white'>{item.title}</h1>
                                <div className='mt-6 '>
                                    <Avatar name={item.author.username} size='sm' />
                                    <span className='ms-2 leading-8 text-[#2D3350] font-semibold dark:text-white'>
                                        {/* <i className="fa-solid fa-user"></i> */}
                                        {item.author.username}</span>
                                    <span className='ms-5 text-[#2D3350] md:inline-block block dark:text-white'>
                                    <FaCalendar className="icon inline-flex mb-1" /> {date.toLocaleDateString('en-US')}</span>
                                    <span className='ms-5 text-[#2D3350] dark:text-white'><i className="fa-regular fa-clock"></i> {Math.ceil((wordsLen(item.description + item.title) / 238) + 0.083)} min read</span>
                                    {/* Reading Time = Total Word Count / 238 + (Number of Images * 0.083) */}
                                </div>
                            </div>
                            <div className='w-4/5 mx-auto mt-16'>
                                <img src={`http://localhost:3001/images/${item.image}`} className='rounded-xl w-full' alt="" />
                            </div>
                            <div className='w-4/5 mx-auto mt-16'>
                                <p className='md:text-2xl text-xl mt-10 text-[#2D3350] whitespace-pre-wrap blog_description first-line:uppercase first-letter:text-7xl first-letter:font-bold dark:first-letter:text-white
  first-letter:mr-3 first-letter:float-left dark:text-white'>{parse(item.description)}</p>
                            </div>

                        </div>
                    })
                }

                <h2 className='my-12 text-4xl font-semibold dark:text-white'>You might also like</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {
                        status === STATUSES.LOADING ?
                        <>
                            <AlsoLikeCardSkeleton />
                            <AlsoLikeCardSkeleton />
                            <AlsoLikeCardSkeleton />
                            <AlsoLikeCardSkeleton />
                        </>
                        :
                        copyData.map((item) => {
                            return <AlsoLikeCard item={item} />
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default SingleBlog