import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { STATUSES } from '../store/Blogslice'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Category = () => {
    const navigate = useNavigate()
    const { category, status } = useSelector(state => state.blog)
    const gotoCategory = (item) => {
      navigate('/category/' + item.name)
    }
  return (
    <>
    <div className='container mx-auto lg:px-24'>
    <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-12 mb-5 dark:text-white'>Categories</h2>
    <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
             {
            status === STATUSES.LOADING ?
              <>
                <SwiperSlide >
                  <Skeleton className='w-full rounded-xl w-full h-60 '/>
                </SwiperSlide >
                <SwiperSlide >
                  <Skeleton className='w-full rounded-xl w-full h-60 '/>
                </SwiperSlide >
                <SwiperSlide >
                  <Skeleton className='w-full rounded-xl w-full h-60 '/>
                </SwiperSlide >
                <SwiperSlide >
                  <Skeleton className='w-full rounded-xl w-full h-60 '/>
                </SwiperSlide >
              </>
              :
              category.map((item) => {
                return <SwiperSlide onClick={() => gotoCategory(item)}>
                  <div className='slick_card rounded-xl overflow-hidden group cursor-pointer'>
                    <img src={`http://localhost:3001/images/${item.image}`}
                      className='w-full rounded-xl w-full h-60 relative group-hover:scale-110 duration-300 group-hover:blur-sm' alt="" />
                    <h2 className='text-center font-semibold text-2xl p-1.5 rounded-md absolute top-44 inset-x-12 bg-white group-hover:top-24 transition-all duration-500'>{item.name}</h2>
                  </div>
                </SwiperSlide>
              })
          }
        </Swiper>
    </div>
    </>
  )
}

export default Category
