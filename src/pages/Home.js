import React from 'react'
import TopContent from '../component/TopContent'
import Category from '../component/Category'
import FeaturedPost from '../component/FeaturedPost'
import Blogs from '../component/Blogs'

const Home = () => {
  return (
    <div>
      <div className='pt-28'>
        <TopContent/>
        <Category/>
        <FeaturedPost/>
        <Blogs/>
      </div>
    </div>
  )
}

export default Home
