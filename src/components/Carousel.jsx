// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/images/slide1.jpg'
import bgimg2 from '../assets/images/slide2.jpg'
import bgimg3 from '../assets/images/slide3.jpg'

export default function Carousel() {
  return (
    <div className=' px-10 py-2 mx-auto '>
      <Swiper
        
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]} 
        
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            title='Lost? Found? Let’s Fix That!'
            text='Our mission is to bring lost items back to their rightful owners. Browse listings, post found objects, 
            and make connections effortlessly. Together, we can close the gap between lost and found'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            title='Reunite with What Matters Most'
            text="Discover a seamless way to report, search, and recover lost items. Whether you've misplaced 
            something or found an item, our platform makes reuniting people with their belongings easy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            title='Lost & Found Made Simple'
            text='Your trusted platform for recovering what’s lost and sharing what’s found.Join a community 
            where lost items find their way home. Search, post, and reconnect effortlessly.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
