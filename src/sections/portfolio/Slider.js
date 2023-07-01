import React from "react";
import {BsArrowUpRightSquareFill} from 'react-icons/bs';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css';

export default function Slider({slides}){
    return(
        <>
            <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect={"cube"}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.96,
      }}
    >
    
      {slides.map((slide)=>(
                    <SwiperSlide key={slide.id} className="cards">
                    <h2>{slide.title}</h2>
                    <div className='card-text'><p>{slide.desc}</p></div>
                    <div className='links'>
                        <a href={slide.link1}>Visit <BsArrowUpRightSquareFill className='arrowup'/></a>
                        <a href={slide.link2}>Source <BsArrowUpRightSquareFill className='arrowup'/></a>
                    </div>
                    </SwiperSlide>
                ))}
    </Swiper>
        </>
    )
}