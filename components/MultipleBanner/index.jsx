"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultipleBanner.style.css";

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

export const MultipleBanner = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>

                    
                    <div className="bg-lime-600 m-2 p-4">
                        <h3>1</h3>
                    </div>
                    <div className="bg-lime-600 m-2 p-4">
                        <h3>2</h3>
                    </div>
                    <div className="bg-lime-600 m-2 p-4">
                        <h3>3</h3>
                    </div>
                    <div className="bg-lime-600 m-2 p-4">
                        <h3>4</h3>
                    </div>
                    <div className="bg-lime-600 m-2 p-4">
                        <h3>5</h3>
                    </div>
                    <div className="bg-lime-600 m-2 p-4">
                        <h3>6</h3>
                    </div>
                    <div className="bg-lime-600 m-2 p-4">
                        <h3>7</h3>
                    </div>
                    <div className="bg-lime-600 m-2 p-4">
                        <h3>8</h3>
                    </div>
                </Slider>
            </div>
        </>
    );
};
