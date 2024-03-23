import React from "react";
import Image from "next/image";
import Link from 'next/link';
import style from "../contact/contact.module.scss";
import { MapPinned, Package, MailPlus, PhoneIncoming } from 'lucide-react';


export default function contact() {
    return (
        <>

            <section className="bg-[url('/assets/images/bnr1.jpg')] bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:opacity-100 after:w-full after:h-full after:top-0 after:left-0 lg:h-[300px] sm:h-[400px] h-[300px] overflow-hidden bg-cover bg-center">

                <div className="container table h-full relative z-[1] text-center">
                    <div className="dz-bnr-inr-entry align-middle table-cell">
                        <h2 className="font-lobster text-white 2xl:text-[70px] md:text-[60px] text-[40px] leading-[1.2]">Contact Us</h2>

                    </div>
                </div>
            </section>

            <section class="section-wrapper-8 sm:pt-[100px] pt-[20px] lg:pb-[100px] sm:pb-10 pb-5 md:px-[30px] px-[15px] 2xl:mx-[100px] lg:mx-[50px] bg-[#2222220a] rounded-[30px] 2xl:mb-[100px] lg:mb-[70px] 2xl:mt-[170px] lg:mt-[90px]">
                <div class="container sm:p-0">
                    <div class="row lg:flex block inner-section-wrapper items-center 2xl:mb-[20px] lg:mb-[20px] md:mb-[30px] mb-[25px] 2xl:mt-[-215px] lg:mt-[-170px] mt-0">
                        <div class="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                            <div class="icon-bx-wraper relative mb-[30px] xl:pb-[20px] lg:pb-[25px] lg:pt-0 lg:px-0 py-[30px] px-5 lg:rounded-none rounded-[10px] lg:shadow-none shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:z-auto z-[1] text-center duration-500 style-5 hover-aware box-hover lg:overflow-visible overflow-hidden group">
                               
                                
                                <div class="icon-content xl:pt-[30px] lg:pt-[65px] xl:px-10 lg:px-5 lg:pb-[30px] lg:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:rounded-[10px] lg:bg-white lg:relative lg:overflow-hidden z-[1] group-hover:text-white">
                                <MapPinned size={56} color="#c8ff00" strokeWidth={0.75}  className="w-full text-center mb-2"/>
                                    <h5 class="mb-[10px] font-lobster text-xl">Location</h5>
                                    <p class="text-base max-2lg:text-sm max-xl:break-words mb-4 font-rubik leading-[1.5] group-hover:text-white">6952 Shelley St <br></br>Melbource</p>
                                    <div class="effect absolute block rounded-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%] bg-lime-700 w-0 h-0 duration-500 group-hover:w-[300%] group-hover:h-[300%]"></div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                            <div class="icon-bx-wraper relative mb-[30px] xl:pb-[20px] lg:pb-[25px] lg:pt-0 lg:px-0 py-[30px] px-5 lg:rounded-none rounded-[10px] lg:shadow-none shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:z-auto z-[1] text-center duration-500 style-5 hover-aware box-hover lg:overflow-visible overflow-hidden group">
                               
                                <div class="icon-content xl:pt-[30px] lg:pt-[65px] xl:px-10 lg:px-5 lg:pb-[30px] lg:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:rounded-[10px] lg:bg-white lg:relative lg:overflow-hidden z-[1] group-hover:text-white">
                                <PhoneIncoming size={56} color="#c8ff00" strokeWidth={0.75} className="w-full text-center mb-2"/>
                                    <h5 class="mb-[10px] font-lobster text-xl">Phone Number</h5>
                                    <p class="text-base max-2lg:text-sm max-xl:break-words mb-4 font-rubik leading-[1.5] group-hover:text-white">+(800) 800-900-100 <br></br>+222 33 567 8665</p>
                                    <div class="effect absolute block rounded-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%] bg-lime-700 w-0 h-0 duration-500 group-hover:w-[300%] group-hover:h-[300%]"></div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                            <div class="icon-bx-wraper relative mb-[30px] xl:pb-[20px] lg:pb-[25px] lg:pt-0 lg:px-0 py-[30px] px-5 lg:rounded-none rounded-[10px] lg:shadow-none shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:z-auto z-[1] text-center duration-500 style-5 hover-aware box-hover lg:overflow-visible overflow-hidden group">
                               
                                <div class="icon-content xl:pt-[30px] lg:pt-[65px] xl:px-10 lg:px-5 lg:pb-[30px] lg:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:rounded-[10px] lg:bg-white lg:relative lg:overflow-hidden z-[1] group-hover:text-white">
                                <MailPlus size={56} color="#c8ff00" strokeWidth={0.75} className="w-full text-center mb-2"/>
                                    <h5 class="mb-[10px] font-lobster text-xl">Email Address</h5>
                                    <p class="text-base max-2lg:text-sm max-xl:break-words mb-4 font-rubik leading-[1.5] group-hover:text-white">Info@Webmail.com <br></br>Info@Example.web.com</p>
                                    <div class="effect absolute block rounded-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%] bg-lime-700 w-0 h-0 duration-500 group-hover:w-[300%] group-hover:h-[300%]"></div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-1/4 sm:w-1/2 w-full px-[15px]">
                            <div class="icon-bx-wraper relative mb-[30px] xl:pb-[20px] lg:pb-[25px] lg:pt-0 lg:px-0 py-[30px] px-5 lg:rounded-none rounded-[10px] lg:shadow-none shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:z-auto z-[1] text-center duration-500 style-5 hover-aware box-hover lg:overflow-visible overflow-hidden group">
                               
                                <div class="icon-content xl:pt-[30px] lg:pt-[65px] xl:px-10 lg:px-5 lg:pb-[30px] lg:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:rounded-[10px] lg:bg-white lg:relative lg:overflow-hidden z-[1] group-hover:text-white">
                                <Package size={56} color="#c8ff00" strokeWidth={0.75} className="w-full text-center mb-2"/>
                                    <h5 class="mb-[10px] font-lobster text-xl">Open & Closing</h5>
                                    <p class="text-base max-2lg:text-sm max-xl:break-words mb-4 font-rubik leading-[1.5] group-hover:text-white">Mon - Fri: 09:00am <br></br>to  07.00pm </p>
                                    <div class="effect absolute block rounded-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%] bg-lime-700 w-0 h-0 duration-500 group-hover:w-[300%] group-hover:h-[300%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="2xl:mb-[20px] mb-[15px] relative mx-auto text-center mb-4">
                        <h1 className="title font-lobster text-black2 text-6xl mb-4">
                            Reservation
                        </h1>
                        <div className="flex justify-center mb-4">
                <Image
                  src={`/assets/images/decorateLine.png`}
                  alt=""
                  width={180}
                  height={180}
                />
              </div>
                    </div>

                    <form class="" method="POST" action="#" />
                    <div class="dzFormMsg"></div>
                    <input type="hidden" class="form-control font-rubik" name="dzToDo" value="Contact" />
                    <div class="row lg:flex block">
                        <div class="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
                            <label class="form-label text-md font-medium mb-[10px] text-primary font-rubik">Your Name</label>
                            <div class="input-group m-0 relative flex flex-wrap items-center border-b border-gray-600 input-line input-black">
                                <input name="dzName" required type="text" class="form-control font-rubik bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none" placeholder="John Doe" />
                            </div>
                        </div>
                        <div class="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
                            <label class="form-label text-md font-medium mb-[10px] text-primary font-rubik">Your Email</label>
                            <div class="input-group m-0 relative flex flex-wrap items-center border-b border-gray-600 input-line input-black">
                                <input name="dzEmail" required type="text" class="form-control font-rubik bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none" placeholder="info@example.com" />
                            </div>
                        </div>
                    </div>
                    <div class="row lg:flex block">
                        <div class="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
                            <label class="form-label text-md font-medium mb-[10px] text-primary font-rubik">Your Number</label>
                            <div class="input-group m-0 relative flex flex-wrap items-center border-b border-gray-600 input-line input-black">
                                <input name="dzPhoneNumber" required type="text" class="form-control font-rubik bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none dz-number" placeholder="9876543210" />
                            </div>
                        </div>
                        <div class="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
                            <label class="form-label text-md font-medium mb-[10px] text-primary font-rubik">Members</label>
                            <div class="input-group m-0 relative flex flex-wrap items-center border-b border-gray-600 input-line input-black">
                                <input name="dzOther[Person]" required type="text" class="form-control font-rubik bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none" placeholder="1 Person" />
                            </div>
                        </div>
                    </div>

                    <div class="row lg:flex block">
                        <div class="w-full px-[15px] mb-[40px]">
                            <label class="form-label text-primary font-rubik">Message</label>
                            <div class="input-group m-0 relative flex flex-wrap items-center border-b border-gray-600 input-line input-black">
                                <textarea name="dzMessage" required class="form-control font-rubik bg-transparent resize-none h-[105px] w-full leading-6 p-0 pb-[10px] border-0 placeholder:text-black2" placeholder="Hi, do you Have a moment to talk About !"></textarea>
                            </div>
                        </div>
                        <div class="w-full px-[15px] mb-5">
                            <div class="input-recaptcha">
                                <div class="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback" /></div>
                            <input class="form-control font-rubik hidden" data-recaptcha="true" required data-error="Please complete the Captcha" />
                        </div>
                    </div>
                <div class="w-full px-[15px] text-center">
                <div>
              <Link href="#" target="_blank" className={style.themeBtn}> Book a Table </Link>
              </div>
                </div>
            </div>
        </section >
        </>

    );
}

