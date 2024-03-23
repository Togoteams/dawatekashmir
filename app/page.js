"use client";
import React from "react";
import Image from "next/image";
import "./home.scss";
import { FaPlay, FaRegUser } from "react-icons/fa6";
import { SlickBanner } from "@/components/SlickBanner";
import { ShoppingCart } from 'lucide-react';

export default function Home() {
    return (
        <>
            <section>
                <SlickBanner />
            </section>
            {/* <section>
                <Image
                    src={"/assets/images/slider.png"}
                    alt="banner-title"
                    width={1920}
                    height={600}
                />
            </section> */}

            <section className="content-inner sm:pt-[100px] pt-[50px] overflow-hidden pb-10 bg-lime-100">
                <div className="container">
                    <div className="block row lg:flex">
                        <div className="lg:w-2/6 w-full px-[15px] mb-[30px]">
                            <div className="adv-box bg-[#054F48] text-center overflow-unset relative rounded-[10px] h-full bg-[url('/assets/images/pic2.png')]">
                                <div className="adv-content px-5 pt-[30px] xl:mb-0 lg:mb-[30px] mb-[45px]">
                                    <span className="text-xl font-bold text-white special">
                                        FRIDAY SPECIAL
                                    </span>
                                    <h4 className="title font-extrabold xl:text-[43px] text-[33px] text-[#FECC48] lg:leading-[64px] leading-[44px] font-poppins mb-2">
                                        TASTY Biryani
                                    </h4>
                                </div>
                                <div className="adv-media relative overflow-unset xl:w-[400px] w-full  left-0 top-0 ml-auto">
                                    <Image
                                        src={"/assets/images/pic1.png"}
                                        height={300}
                                        width={400}
                                        alt="banner-title"
                                        className="main-media ml-auto w-[400px] max-xl:w-[500px] h-[300px] max-xl:h-auto"
                                    />
                                    <div className="item-media offer-label absolute right-5 bottom-5 w-[100px] h-[100px]">
                                        <Image
                                            src={"/assets/images/label.png"}
                                            height={300}
                                            width={400}
                                            alt="/"
                                            className="absolute top-0 left-0"
                                        />
                                        <span className="text-[#222222] text-[22px] font-bold top-[54%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute block leading-[1.2]">
                                            50% OFF
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-8/12 w-full px-[15px]">
                            <div className="2xl:mb-[20px] mb-[15px] relative mx-auto text-left">
                                <h1 className="pb-2 text-4xl title font-lobster text-black2 lg:text-6xl">
                                    The Number
                                    <span className="text-lime-600">
                                        #1 Choice Your Hunger Solution..!!
                                    </span>
                                </h1>
                                <p className="leading-7 text-justify text-md font-rubik">
                                    Embark on an unparalleled culinary journey
                                    through the tantalizing flavors of the South
                                    with Mava &apos;s Nellore Chepala Pulusu &apos; —a
                                    tribute to the discerning palates of the DFW
                                    metroplex. Master Chef Mava, a maestro
                                    hailing from Nellore.
                                </p>
                            </div>
                            <div className="w-full px-[15px]">
                                <div className="adv-box offer relative rounded-[10px] h-[100%] sm:flex block text-center items-center overflow-unset bg-[#138919] justify-between px-[30px] pt-[30px] pr-[30px] pb-0 max-xl:pr-5 max-xl:p-0 bg-[url('/assets/images/pic16.png')]">
                                    <div className="adv-media relative w-[250px] max-xl:w-[200px] min-w-[250px] max-xl:min-w-[200px] h-[150px] overflow-unset sm:mx-0 mx-auto">
                                        <Image
                                            src={"/assets/images/pic4.png"}
                                            height={250}
                                            width={250}
                                            alt="/"
                                            className="absolute top-[-55px] max-xl:top-[-20px] left-[-90px] max-xl:left-[-70px] object-cover"
                                        />
                                    </div>
                                    <div className="adv-content">
                                        <span className="text-lg font-semibold text-white special">
                                            FOR LIMITED TIME ONLY
                                        </span>
                                        <h4 className="price font-extrabold text-[54px] max-xl:text-[40px] leading-[81px] max-xl:leading-[50px] block text-white mb-2">
                                            35% Offer
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20 pb-10 mt-10 mb-10 description">
                <div className="container">
                    <div>
                        <div className="block row lg:flex">
                            <div className="xl:w-7/12 w-full px-[15px] mb-[30px]">
                                <div className="about-media dz-media relative overflow-hidden rounded-[10px]">
                                    <Image
                                        src={"/assets/images/pic11.jpg"}
                                        alt="/"
                                        height={530}
                                        width={800}
                                        className="lg:h-[430px] sm:h-[380px] h-[300px]"
                                    />
                                    <a
                                        className="video video-btn popup-youtube absolute top-[50%] left-[50%] 2xl:w-[87px] md:w-[70px] w-[55px] 2xl:h-[87px] md:h-[70px] h-[55px] bg-amber-500 text-white rounded-full 2xl:text-2xl md:text-lg text-base flex items-center justify-center translate-x-[-50%]  translate-y-[-50%] duration-500 hover:scale-125"
                                        href="https://www.youtube.com/watch?v=XJb1G9iRoL4"
                                    >
                                        <FaPlay />
                                    </a>
                                </div>
                            </div>
                            <div className="xl:w-5/12 px-[15px] w-full">
                                <div className="2xl:mb-[20px] mb-[15px] relative mx-auto text-left">
                                    <h1 className="text-4xl title font-lobster text-black2 lg:text-6xl">
                                        We invite you to <br></br>
                                        visit our restaurant
                                    </h1>
                                </div>
                                <div className="flex justify-center mb-4">
                                    <Image
                                        src={`/assets/images/decorateLine.png`}
                                        alt=""
                                        width={180}
                                        height={180}
                                    />
                                </div>
                                <p className="leading-7 text-justify text-md">
                                    Embark on an unparalleled culinary journey
                                    through the tantalizing flavors of the South
                                    with Mava &apos; s Nellore Chepala Pulusu 
                                    tribute to the discerning palates of the DFW
                                    metroplex. Master Chef Mava, a maestro
                                    hailing from Nellore, deeply steeped in the
                                    time-honored techniques and rich aromas that
                                    define the essence of this authentic South
                                    Indian fish delicacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Todays special menu */}
            <section className="bg-[url('/assets/images/bg.png')] bg-fixed sm:pt-[50px] pt-[50px] lg:pb-[50px] sm:pb-10 pb-20 relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-black-blur after:opacity-100 after:w-full after:h-full after:top-0 after:left-0 after:backdrop-blur-[6px] 2xl:mx-[100px] 2xl:rounded-[30px] overflow-hidden">
                <div className="container">
                    <div className="2xl:mb-[25px] mb-[25px] relative mx-auto text-center">
                        <h1 className="text-4xl text-white title font-lobster lg:text-6xl">
                            Today &apos;s Special Menu
                        </h1>
                    </div>
                    <div className="row sm:block lg:flex ">
                        <div className="lg:w-1/4 sm:w-2/4 w-full px-[15px]">
                            <div className="dz-img-box4 bg-white rounded-[10px] xl:p-[15px] p-2.5 mb-[30px] flex flex-col relative overflow-hidden z-[1] style-5">
                                <div className="dz-content mb-[15px]">
                                    <div className="weight mb-[5px] flex justify-between items-center text-xs text-bodycolor font-rubik">
                                        <span> Air Fryer Chicken Biryani</span>
                                        <span>756g</span>
                                    </div>
                                    <div className="price mb-[5px] flex justify-between items-center font-rubik">
                                        <h6 className="text-[#000]">
                                            Air Fryer Chicken Biryani
                                        </h6>
                                        <h6 className="text-primary">
                                            ₹150.00
                                        </h6>
                                    </div>
                                </div>
                                <div className="dz-media rounded-[10px] mt-auto w-full h-full overflow-hidden relative">
                                    <Image
                                        src={"/assets/images/pics1.jpg"}
                                        height={240}
                                        width={227}
                                        alt="/"
                                        className="block w-full h-full"
                                    />
                                    <a
                                        className="detail-btn top-[-50px] z-[2] left-[50%] translate-x-[-50%] opacity-0 rounded-xl"
                                        href="#"
                                    >
                                        <i className="text-white fa-solid fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 sm:w-2/4 w-full px-[15px]">
                            <div className="dz-img-box4 bg-white rounded-[10px] xl:p-[15px] p-2.5 mb-[30px] flex flex-col relative overflow-hidden z-[1] style-5">
                                <div className="dz-content mb-[15px]">
                                    <div className="weight mb-[5px] flex justify-between items-center text-xs text-bodycolor font-rubik">
                                        <span>Chicken Barbeque Kebabs </span>
                                        <span>756g</span>
                                    </div>
                                    <div className="price mb-[5px] flex justify-between items-center font-rubik">
                                        <h6 className="text-[#000]">
                                            Chicken Barbeque Kebabs
                                        </h6>
                                        <h6 className="text-primary">
                                            ₹280.00
                                        </h6>
                                    </div>
                                </div>
                                <div className="dz-media rounded-[10px] mt-auto w-full h-full overflow-hidden relative">
                                    <Image
                                        src={"/assets/images/pics2.jpg"}
                                        height={240}
                                        width={227}
                                        alt="/"
                                        className="block w-full h-full"
                                    />
                                    <a
                                        className="detail-btn top-[-50px] z-[2] left-[50%] translate-x-[-50%] opacity-0 rounded-xl"
                                        href="#"
                                    >
                                        <i className="text-white fa-solid fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 sm:w-2/4 w-full px-[15px]">
                            <div className="dz-img-box4 bg-white rounded-[10px] xl:p-[15px] p-2.5 mb-[30px] flex flex-col relative overflow-hidden z-[1] style-5">
                                <div className="dz-content mb-[15px]">
                                    <div className="weight mb-[5px] flex justify-between items-center text-xs text-bodycolor font-rubik">
                                        <span>Tandoori Grilled Chicken </span>
                                        <span>756g</span>
                                    </div>
                                    <div className="price mb-[5px] flex justify-between items-center font-rubik">
                                        <h6 className="text-[#000]">
                                            Tandoori Grilled Chicken
                                        </h6>
                                        <h6 className="text-primary">
                                            ₹410.00
                                        </h6>
                                    </div>
                                </div>
                                <div className="dz-media rounded-[10px] mt-auto w-full h-full overflow-hidden relative">
                                    <Image
                                        src={"/assets/images/pics3.jpg"}
                                        height={240}
                                        width={227}
                                        alt="/"
                                        className="block w-full h-full"
                                    />
                                    <a
                                        className="detail-btn top-[-50px] z-[2] left-[50%] translate-x-[-50%] opacity-0 rounded-xl"
                                        href="#"
                                    >
                                        <i className="text-white fa-solid fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/4 sm:w-2/4 w-full px-[15px]">
                            <div className="dz-img-box4 bg-white rounded-[10px] xl:p-[15px] p-2.5 mb-[30px] flex flex-col relative overflow-hidden z-[1] style-5">
                                <div className="dz-content mb-[15px]">
                                    <div className="weight mb-[5px] flex justify-between items-center text-xs text-bodycolor font-rubik">
                                        <span>Air Fryer Chicken Curry</span>
                                        <span>756g</span>
                                    </div>
                                    <div className="price mb-[5px] flex justify-between items-center font-rubik">
                                        <h6 className="text-[#000]">
                                            Air Fryer Chicken <br></br>Curry
                                        </h6>
                                        <h6 className="text-primary">
                                            ₹512.00
                                        </h6>
                                    </div>
                                </div>
                                <div className="dz-media rounded-[10px] mt-auto w-full h-full overflow-hidden relative">
                                    <Image
                                        src={"/assets/images/pics4.jpg"}
                                        height={240}
                                        width={227}
                                        alt="/"
                                        className="block w-full h-full"
                                    />
                                    <a
                                        className="detail-btn top-[-50px] z-[2] left-[50%] translate-x-[-50%] opacity-0 rounded-xl"
                                        href="#"
                                    >
                                        <i className="text-white fa-solid fa-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* End of Todays special menu */}
            <section className="features sm:pt-[50px] pt-[70px] sm:mt-[50px] mt-[50px] sm:mb-[50px] mb-[50px]">
                <div className="container mx-auto">
                    <div className="2xl:mb-[20px] mb-[25px] relative mx-auto text-center">
                        <h1 className="text-4xl title font-lobster text-black2 lg:text-6xl">
                            Our Featured Food
                        </h1>
                    </div>

                    {/* <MultipleBanner /> */}
                    <div class="row lg:flex block pt-6">
                        <div class="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px] ">
                            <div class="rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box">
                                <div class="w-full min-w-full h-full">
                                    <Image
                                        src={"/assets/images/pics1.jpg"}
                                        height={240}
                                        width={227}
                                        alt="/"
                                        className="block w-full h-full"
                                    />
                                </div>
                                <span class="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">top seller</span>
                                <div class="content bg-white text-center py-[16px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
                                    <h5 class="font-bold">
                                        <a href="#">
                                            Pasta
                                        </a>
                                    </h5>

                                </div>
                                <div class="hover-content flex justify-between py-5 px-[30px] bg-black absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                                    <div class="info relative">
                                        <h5 class="mb-0">
                                            <a class="text-white font-rubik " href="#">
                                                Pasta
                                            </a>
                                        </h5>
                                        <span class="text-xl text-yellow-200 font-bold leading-[30px] font-rubik">$35.00</span>
                                    </div>
                                    <a href="#">
                                        <ShoppingCart size={24} color="#000000" strokeWidth={1.25} className="bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] p-2 flex items-center relative justify-center text-2xl text-center" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
                            <div class="rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box">
                                <div class="w-full min-w-full h-full">
                                    <Image
                                        src={"/assets/images/pics2.jpg"}
                                        height={240}
                                        width={227}
                                        alt="/"
                                        className="block w-full h-full"
                                    />
                                </div>
                                <span class="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">top seller</span>
                                <div class="content bg-white text-center py-[16px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
                                    <h5 class="mb-0">
                                        <a href="#">
                                            Oreo Shake
                                        </a>
                                    </h5>

                                </div>
                                <div class="hover-content flex justify-between py-5 px-[30px] bg-black absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                                    <div class="info relative">
                                        <h5 class="mb-0">
                                            <a class="text-white font-rubik " href="#">
                                                Pasta
                                            </a>
                                        </h5>
                                        <span class="text-xl text-yellow-200 font-bold leading-[30px] font-rubik">$35.00</span>
                                    </div>
                                    <a href="#">
                                        <ShoppingCart size={24} color="#000000" strokeWidth={1.25} className="bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] p-2 flex items-center relative justify-center text-2xl text-center" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
                            <div class="rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box">
                                <div class="w-full min-w-full h-full">
                                    <Image
                                        src={"/assets/images/pics3.jpg"}
                                        height={240}
                                        width={227}
                                        alt="/"
                                        className="block w-full h-full"
                                    />
                                </div>
                                <span class="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">top seller</span>
                                <div class="content bg-white text-center py-[16px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
                                    <h5 class="mb-0">
                                        <a href="#">
                                            Dal Fry
                                        </a>
                                    </h5>

                                </div>
                                <div class="hover-content flex justify-between py-5 px-[30px] bg-black absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                                    <div class="info relative">
                                        <h5 class="mb-0">
                                            <a class="text-white font-rubik " href="#">
                                                Pasta
                                            </a>
                                        </h5>
                                        <span class="text-xl text-yellow-200 font-bold leading-[30px] font-rubik">$35.00</span>
                                    </div>
                                    <a href="#">
                                        <ShoppingCart size={24} color="#000000" strokeWidth={1.25} className="bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] p-2 flex items-center relative justify-center text-2xl text-center" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/4 sm:w-1/2 w-full pl-[15px] pr-[15px] pb-[30px]">
                            <div class="rounded-[10px] shadow-[0_15px_55px_rgba(35,35,35,0.15)] duration-500 relative z-[1] overflow-hidden group dz-img-box">
                                <div class="w-full min-w-full h-full">
                                    <Image
                                        src={"/assets/images/pics4.jpg"}
                                        height={240}
                                        width={227}
                                        alt="/"
                                        className="block w-full h-full"
                                    />
                                </div>
                                <span class="absolute top-0 bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-2.5 font-semibold text-xs leading-[18px] z-[2]">top seller</span>
                                <div class="content bg-white text-center py-[16px] px-[15px] block duration-500 absolute w-full bottom-0 mb-0 group-hover:bottom-[-150px] group-hover:opacity-0">
                                    <h5 class="mb-0">
                                        <a href="#">
                                            Pizza
                                        </a>
                                    </h5>

                                </div>
                                <div class="hover-content flex justify-between py-5 px-[30px] bg-black absolute bottom-0 opacity-0 z-[2] w-full items-center duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                                    <div class="info relative">
                                        <h5 class="mb-0">
                                            <a class="text-white font-rubik " href="#">
                                                Pasta
                                            </a>
                                        </h5>
                                        <span class="text-xl text-yellow-200 font-bold leading-[30px] font-rubik">$35.00</span>
                                    </div>
                                    <a href="#">
                                        <ShoppingCart size={24} color="#000000" strokeWidth={1.25} className="bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] p-2 flex items-center relative justify-center text-2xl text-center" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                {/* <!-- Service Section --> */}
                <section className="background-light-green lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[50px] sm:pb-10   relative overflow-hidden mx-[100px] max-2xl:mx-0 rounded-[30px] max-2xl:rounded-none bg-[url('/assets/images/pic10.png')] bg-fixed">
                    <div className="container">
                        <div className="2xl:mb-[20px] mb-[15px] relative mx-auto text-center">
                            <h1 className="text-4xl title font-lobster text-black2 lg:text-6xl">
                                Why Choose Us ?
                            </h1>
                        </div>
                        <div className="block row lg:flex">
                            <div className="lg:w-1/4 md:w-2/4 w-full px-[15px]">
                                <div className="icon-bx-wraper2 text-center min-h-[180px] pt-5 pb-[30px] px-3 relative">
                                    <div className="mb-5 icon-bx">
                                        <div className="icon-cell w-[65px] h-[65px] min-w-[65px] leading-[65px] m-auto">
                                            <Image
                                                src={
                                                    "/assets/images/catering.png"
                                                }
                                                alt=""
                                                height={240}
                                                width={240}
                                            />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden icon-content">
                                        <p className="xl:text-lg text-[15px] font-medium leading-[27px] text-[#222222] font-rubik">
                                            24/7 Fast Services
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-2/4 w-full px-[15px]">
                                <div className="icon-bx-wraper2 text-center min-h-[180px] pt-5 pb-[30px] px-3 relative">
                                    <div className="mb-5 icon-bx">
                                        <div className="icon-cell w-[65px] h-[65px] min-w-[65px] leading-[65px] m-auto">
                                            <Image
                                                src={
                                                    "/assets/images/timing.png"
                                                }
                                                alt=""
                                                height={240}
                                                width={240}
                                            />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden icon-content">
                                        <p className="xl:text-lg text-[15px] font-medium leading-[27px] text-[#222222] font-rubik">
                                            Our Restaurant is Open Around the
                                            Clock
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-2/4 w-full px-[15px]">
                                <div className="icon-bx-wraper2 text-center min-h-[180px] pt-5 pb-[30px] px-3 relative">
                                    <div className="mb-5 icon-bx">
                                        <div className="icon-cell w-[65px] h-[65px] min-w-[65px] leading-[65px] m-auto">
                                            <Image
                                                src={"/assets/images/chef.png"}
                                                alt=""
                                                height={240}
                                                width={240}
                                            />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden icon-content">
                                        <p className="xl:text-lg text-[15px] font-medium leading-[27px] text-[#222222] font-rubik">
                                            Best Chef
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-2/4 w-full px-[15px]">
                                <div className="icon-bx-wraper2 text-center min-h-[180px] pt-5 pb-[30px] px-3 relative">
                                    <div className="mb-5 icon-bx">
                                        <div className="icon-cell w-[65px] h-[65px] min-w-[65px] leading-[65px] m-auto">
                                            <Image
                                                src={
                                                    "/assets/images/chicken.png"
                                                }
                                                alt=""
                                                height={240}
                                                width={240}
                                            />
                                        </div>
                                    </div>
                                    <div className="overflow-hidden icon-content">
                                        <p className="xl:text-lg text-[15px] font-medium leading-[27px] text-[#222222] font-rubik">
                                            We Have The Freshest Product
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Service Section --> */}
            </section>

            {/* <!-- Our Blog  --> */}
            <section className="content-inner lg:pb-[70px] pb-10 overflow-hidden relative">
                <div className="container">
                    <div className="block row lg:flex">
                        <div className="xl:w-7/12 px-[15px] w-full">
                            <div className="2xl:mb-[20px] mb-[15px] relative mx-auto text-left pb-4">
                                <h1 className="pb-4 text-4xl title font-lobster text-black2 lg:text-6xl">
                                    Recent News & Updates
                                </h1>
                            </div>

                            <div className="dz-card style-2 blog-half rounded-lg overflow-hidden duration-500 bg-[#2222220d] md:flex relative mb-[30px]">
                                <div className="dz-media overflow-hidden relative md:w-[270px] md:min-w-[270px] w-full  h-[250px]">
                                    <a href="#" className="block h-full">
                                        <Image
                                            src={"/assets/images/pics1.jpg"}
                                            height={270}
                                            width={234}
                                            alt="/"
                                            className="w-full min-w-auto"
                                        />
                                    </a>
                                    <div className="p-2 bg-yellow-500">12 Feb 2024</div>
                                </div>
                                <div className="dz-info flex flex-col relative p-[25px] ">
                                    <h4 className="mb-[10px] text-2xl font-rubik font-medium">
                                        <a href="#">
                                            Chill Out with <br></br> These
                                            Refreshing
                                        </a>
                                    </h4>
                                    <p className="text-md font-rubik justify-content">Lorem Ipsum has been the industry &apos;s standard dummy text ever since a type specimen book.</p>

                                    <div className="mt-auto btn-wrapper">
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-lime-600 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="dz-card style-2 blog-half rounded-lg overflow-hidden duration-500 bg-[#2222220d] md:flex relative mb-[30px]">
                                <div className="dz-media overflow-hidden relative md:w-[270px] md:min-w-[270px] w-full md:h-auto h-[250px]">
                                    <a href="#" className="block h-full">
                                        <Image
                                            src={"/assets/images/pics2.jpg"}
                                            height={270}
                                            width={234}
                                            alt="/"
                                            className="w-full min-w-auto"
                                        />
                                    </a>
                                    <div className="p-2 bg-yellow-500">24 Feb 2024</div>
                                </div>
                                <div className="dz-info flex flex-col relative p-[25px] ">
                                    <h4 className="mb-[10px] text-2xl font-rubik font-medium">
                                        <a href="#">
                                            Taste Excitement: A Sneak <br></br>{" "}
                                            Peek into the
                                        </a>
                                    </h4>
                                    <p className="text-md font-rubik justify-content">Lorem Ipsum has been the industry &apos;s standard dummy text ever since a type specimen book.</p>


                                    <div className="mt-auto btn-wrapper">
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-lime-600 font-rubik hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-5/12 w-full px-[15px] mb-[30px]">
                            <div className="dz-card style-3 dz-card-large blog-half relative sm:min-h-[570px] min-h-[450px] h-full overflow-hidden rounded-lg flex flex-col">
                                <video
                                    autoplay
                                    loop
                                    muted
                                    className="absolute top-0 left-0 object-cover w-full h-full"
                                >
                                    <source
                                        src={"/assets/images/video.mp4"}
                                        type="video/mp4"
                                    ></source>
                                </video>
                                <div className="dz-info p-[35px] z-[1] mt-auto">
                                    <h3 className="mb-[15px] text-xl font-rubik">
                                        <a href="#" className="text-4xl text-white">
                                            Exploring the World of Pizza
                                        </a>
                                    </h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Our Blog End  --> */}
        </>
    );
}
