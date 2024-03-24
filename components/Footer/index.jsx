import React from "react";
import style from "./Footer.module.scss";
import {
    FaSquareFacebook,
    FaSquareTwitter,
    FaInstagram,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const index = () => {
    return (
        <>
            {/* // <!-- Footer --> */}
            <section className="relative bg-logo site-footer style-1">
                <div className="xl:pt-[75px] md:pt-[60px] pt-[50px]  pb-0 relative z-[2]">
                    <div className="container">
                        <div className="block row lg:flex">
                            <div className="xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full px-[15px]">
                                <div className=" sm:mb-[30px] mb-2.5">
                                  
                                    <ul>
                                        <li>
                                            
                                            <div className={`${style.Logo}`}>
                                                <Image
                                                    className={style.logoImages}
                                                    src={`/assets/images/logo 2.png`}
                                                    alt=" tv Asia"
                                                    width={274}
                                                    height={274}
                                                />
                                            </div>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/6 sm:w-1/2 w-full px-[15px]">
                                <div className=" sm:mb-[30px] mb-2.5">
                                    <h5 className="footer-title lg:mb-[20px] mb-2 text-white lg:text-2xl text-xl capitalize font-semibold">
                                        our links
                                    </h5>
                                    <ul>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300  before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    Home
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300  before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    About Us
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300  before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    Services
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300  before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    Team
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300 before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    Blog
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                                <div className="widget widget_services mb-[30px]">
                                    <h5 className="footer-title lg:mb-[20px] mb-2 text-white lg:text-2xl text-xl capitalize font-semibold">
                                        Our Services
                                    </h5>
                                    <ul>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300  before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    Strategy & Research
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300  before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    Fast Delivery
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300  before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    Seat Reservation
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300  before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    Pickup In Store
                                                </span>
                                            </a>
                                        </li>
                                        <li className="pb-[4px] group">
                                            <a href="#">
                                                <span className="font-rubik text-[#CCCCCC] relative before:content-[''] before:w-0 before:bg-primary before:duration-300 before:absolute before:h-[1px] before:left-0 before:bottom-0 group-hover:before:w-full group-hover:text-primary duration-300 text-[15px]">
                                                    Our Menu
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                                <div className="sm:mb-[30px] mb-2.5">
                                    <h5 className="footer-title lg:mb-[20px] mb-2 text-white lg:text-2xl text-xl capitalize font-semibold">
                                        help center
                                    </h5>
                                    <ul>
                                    <li className="relative mb-[25px] ">
                                            <i className="flaticon-placeholder absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]"></i>
                                            <p className="text-[#CCCCCC] tracking-wide leading-6 font-rubik">
                                                1247/Plot No. 39, 15th Phase,
                                                Colony, Kkatpally, Hyderabad
                                            </p>
                                        </li>
                                        <li className="relative mb-[25px] ">
                                            <i className="flaticon-telephone absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]"></i>
                                            <p className="text-[#CCCCCC] tracking-wide leading-6 font-rubik">
                                                +91 987-654-3210
                                            </p>
                                        </li>
                                        <li className="relative mb-[25px] ">
                                            <i className="flaticon-email-1 absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]"></i>
                                            <p className="text-[#CCCCCC] tracking-wide leading-6 font-rubik">
                                                info@example.com
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-bottom relative py-5 border-t border-[#ffffff1a]">
                        <div className="row ">
                            <div className="md:w-full md:text-left mx-auto px-[15px]">
                                <p className="text-sm text-[#999999] font-rubik text-center">
                                    Copyright 2024 All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Image
                    src={"/assets/images/pic5.png"}
                    height={205}
                    width={194}
                    alt=""
                    className="bg1 bottom-[10px] left-0 absolute max-2xl:hidden animate-dz"
                /> */}
                <Image
                    src={"/assets/images/pic6.png"}
                    height={205}
                    width={194}
                    alt=""
                    className="top-[15px] right-[10px] absolute max-2xl:hidden animate-dz"
                />
            </section>
            {/* <!-- Footer End --> */}
        </>
    );
};

export default index;
