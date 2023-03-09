import React from 'react'
import './index.scss'
import { sliderImgs } from '../../utils/images'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export const HeaderSlider = () => {

    let settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        SlidesToScroll: 1
    }

    return (
        <div className='slider'>
            <div className='container'>
                <div className='slider-content overflow-x-hidden'>
                    <Slider {...settings}>
                        <div className='slider-item'>
                            <img src={sliderImgs[0]} alt='Imagen' />
                        </div>
                        <div className='slider-item'>
                            <img src={sliderImgs[1]} alt='Imagen' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
