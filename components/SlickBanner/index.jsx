'use client';
import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickBanner.style.css";
import Slider from "react-slick";
import Image from "next/image";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        //style={{ ...style, display: "block", background: "red" }}
        style={{ ...style }}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        //className={`${className} !bg-red-600`}
        className={`${className}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
}

export const SlickBanner = () => {

    var settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        dotsClass: "slick-dots slick-dots-custom",
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <Slider {...settings} className=" w-full h-full ">
            <div className='text-white'>
                <Image
                    src={"/assets/images/slider.png"}
                    alt="banner-title"
                    width={1920}
                    height={600}
                />
            </div>
            <div className='text-white'>
                <Image
                    src={"/assets/images/slider1.png"}
                    alt="banner-title"
                    width={1920}
                    height={600}
                />
            </div>
            <div className='text-white'>
            <Image
                    src={"/assets/images/slider3.png"}
                    alt="banner-title"
                    width={1920}
                    height={600}
                />
            </div>
        </Slider>
    )
}
