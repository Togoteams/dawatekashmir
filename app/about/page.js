import React from "react";
import Image from "next/image";
import { FaPlay} from "react-icons/fa6";

export default function About() {
  return (
    <main>
      {/* <!-- Banner  --> */}
      <section className="bg-[url('/assets/images/bnr1.jpg')] bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:opacity-100 after:w-full after:h-full after:top-0 after:left-0  lg:h-[100px] sm:h-[100px] h-[300px] overflow-hidden bg-cover bg-center">
        <div className="container table h-full relative z-[1] text-center">
          <div className="table-cell align-middle dz-bnr-inr-entry">
            <h2 className="font-lobster text-white 2xl:text-[70px] md:text-[60px] text-[40px] leading-[1.2]">About Us</h2>
           
          </div>
        </div>
      </section>
      {/* <!-- Banner End --> */}

      {/* <!-- Visit Restaurant --> */}
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden pb-0">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[35px] relative mx-auto text-center">
            <div className="2xl:mb-[20px] mb-[15px] relative mx-auto text-center">
              <h1 className="mb-4 text-4xl title font-lobster text-black2 lg:text-6xl">
                We Invite you to Visit Our Restaurant


              </h1>
              <div className="flex justify-center mb-4">
                <Image
                  src={`/assets/images/decorateLine.png`}
                  alt=""
                  width={280}
                  height={280}
                />
              </div>
            </div>
            <p className="max-w-[815px] m-auto lg:text-base text-sm lg:leading-[1.6rem] font-rubik">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry &apos; s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="row">
            <div className="w-full px-[15px]">
              <div className="about-media dz-media relative overflow-hidden rounded-[10px]">
                <Image src={"/assets/images/pic11.jpg"} alt="/" height={470} width={1920} className="lg:h-[430px] sm:h-[380px] h-[300px] " />
                <a
                                        className="video video-btn popup-youtube absolute top-[50%] left-[50%] 2xl:w-[87px] md:w-[70px] w-[55px] 2xl:h-[87px] md:h-[70px] h-[55px] bg-amber-500 text-white rounded-full 2xl:text-2xl md:text-lg text-base flex items-center justify-center translate-x-[-50%]  translate-y-[-50%] duration-500 hover:scale-125"
                                        href="https://www.youtube.com/watch?v=XJb1G9iRoL4"
                                    >
                                        <FaPlay />
                                    </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* <!-- Visit Restaurant --> */}
      {/* <!-- Service Section --> */}
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container ">
          <div className="2xl:mb-[20px] mb-[15px] relative mx-auto text-center mb-4">
            <h1 className="mb-4 text-6xl title font-lobster text-black2">
              What We Do


            </h1>
            <hr></hr>
          </div>
          <div className="block row lg:flex">
            <div className="lg:w-1/4 sm:w-1/2 w-full mb-[30px] px-[15px]">
              <div className="icon-bx-wraper style-3 rounded-[10px] bg-lime-200 text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px]">
                <div className="icon-bx w-[95px] h-[95px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
                  <div className="icon-cell">
                    <Image src={"/assets/images/fresh.png"} height={200} width={200} ali="fresh"/>
                  </div>
                </div>
                <div className="icon-content">
                  <h5 className="mb-2 text-xl font-lobster"><a href="#">Fresh Products</a></h5>
                  <p className="font-rubik">Lorem Ipsum is simply dummy text of the printing and </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full mb-[30px] px-[15px]">
              <div className="icon-bx-wraper style-3 rounded-[10px] bg-lime-200 text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px]">
                <div className="icon-bx w-[75px] h-[75px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
                  <div className="icon-cell">
                  <Image src={"/assets/images/chefs.png"} height={180} width={180} ali="fresh"/>
                  </div>
                </div>
                <div className="icon-content">
                  <h5 className="mb-2 text-xl font-lobster"><a href="#">Skilled Chefs</a></h5>
                  <p className="font-rubik">Lorem Ipsum is simply dummy text of the printing and </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full mb-[30px] px-[15px]">
              <div className="icon-bx-wraper style-3 rounded-[10px] bg-lime-200 text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px]">
                <div className="icon-bx w-[75px] h-[75px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
                  <div className="icon-cell">
                  <Image src={"/assets/images/matcha-latte.png"} height={150} width={150} ali="fresh"/>
                  </div>
                </div>
                <div className="icon-content">
                  <h5 className="mb-2 text-xl font-lobster"><a href="#">Healthy Drink</a></h5>
                  <p className="font-rubik">Lorem Ipsum is simply dummy text of the printing and </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 w-full mb-[30px] px-[15px]">
              <div className="icon-bx-wraper style-3 rounded-[10px] bg-lime-200 text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px]">
                <div className="icon-bx w-[95px] h-[95px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
                  <div className="icon-cell">
                  <Image src={"/assets/images/dish.png"} height={150} width={150} ali="fresh"/>
                  </div>
                </div>
                <div className="icon-content">
                  <h5 className="mb-2 text-xl font-lobster"><a href="#">Vegan Cuisine</a></h5>
                  <p className="font-rubik">Lorem Ipsum is simply dummy text of the printing and </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Service Section --> */}

    </main>
  );
}
