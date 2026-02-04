import React from 'react'
import SpecialTitle from './SpecialTitle'
import { testimonials } from '../constants/constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Testimonials = () => {
  return (
    <div>
      <div className="pt-[100px]" id="testimonials">
        <div className="container">
        <SpecialTitle title='Testimonials' />

        <div className="">

        <Swiper
        navigation={true} modules={[Navigation]} className="mySwiper"
      >

        {
            testimonials.map((testimonial,index)=>(

                <SwiperSlide className='cursor-grab'>
                    <img className='w-[500px] max-w-full mx-auto' key={index} src={testimonial.image} alt="testimonial" />
                </SwiperSlide>

            ))
        }

        </Swiper>
           
        </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
