import { Container } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './WorkCarouser.css';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

const WorkCarousel = () => {
    return (
        <Container>
            <>
                <Swiper 
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                 slidesPerView={3} spaceBetween={30} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide><img src={carousel1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={carousel2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={carousel3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={carousel4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={carousel5} alt="" /></SwiperSlide>
                </Swiper>
            </>
        </Container>
    );
};

export default WorkCarousel;