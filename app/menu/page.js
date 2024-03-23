'use client';
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import style from "../contact/contact.module.scss";
import { Bike, Star, CopyX, ShoppingBag } from 'lucide-react';


export default function Menu() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>


            <main>
                {/* <!-- Banner  --> */}
                <section className="bg-[url('/assets/images/bnr1.jpg')] bg-fixed relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-[#222222e6] after:opacity-100 after:w-full after:h-full after:top-0 after:left-0  pt-[50px] lg:h-[300px] sm:h-[400px] h-[300px] overflow-hidden bg-cover bg-center">
                    <div className="container table h-full relative z-[1] text-center">
                        <div className="dz-bnr-inr-entry align-middle table-cell">
                            <h2 className="font-lobster text-white 2xl:text-[70px] md:text-[60px] text-[40px] leading-[1.2]">Menu Card</h2>

                        </div>
                    </div>
                </section>
                {/* <!-- Banner End --> */}


                {/* <!-- Search Section --> */}
                <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[20px] sm:pb-10 pb-5 relative bg-white">
                    <div className="container">
                        <div className="row search-wraper style-1 text-center lg:mt-[-135px] sm:mt-[-100px] mt-[-90px] xl:mb-[40px] lg:mb-[40px] sm:mb-[50px] mb-[40px]">
                            <div className="lg:w-2/3 w-full px-[15px] m-auto">
                                <form>
                                    <div className="input-group relative flex flex-wrap items-stretch z-[1] w-full">
                                        <input required="required" type="text" className="font-rubik form-control bg-white py-[25px] pl-[30px] sm:pr-[150px] pr-20 border-none rounded-[10px] lg:h-[80px] h-[60px] w-full shadow-[0px_15px_55px_rgba(34,34,34,0.15)] text-[#666666] text-[15px] outline-none" placeholder="Type Here" />
                                        <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                                            <Link href="#" target="_blank" className={style.themeBtn}> Search </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row lg:flex block">
                            <div className="lg:w-1/4 w-full px-[15px]">
                                <aside className="lg:sticky top-[100px] lg:pr-5 pb-[1px]">
                                    <div className="shop-filter">
                                        <div className="widget mb-[20px] widget_tag_cloud">
                                            <div className="flex justify-between">
                                                <div className="xl:mb-[10px] mb-2 pb-3 relative">
                                                    <h4 className="text-xl font-rubik mb-4"> Current Search</h4>
                                                    <Image
                                                        src={`/assets/images/line.png`}
                                                        alt=""
                                                        width={60}
                                                        height={60}
                                                    />
                                                </div>

                                                <a href="#" className="btn-close style-1 text-xl font-black text-primary p-0 lg:hidden block"><i className="la la-close font-black"></i></a>
                                            </div>
                                            <div className="tagcloud table">
                                                <a href="product-detail.html" className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a] font-rubik font-bold">Burger</a>
                                                <a href="product-detail.html" className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a] font-rubik font-bold">Restaurant</a>
                                                <a href="product-detail.html" className="relative py-[9px] px-[15px] inline-block mr-[10px] mb-[10px] text-sm font-normal leading-[1.4] bg-white rounded-lg text-[#666666] border border-[#2222221a] font-rubik font-bold">Pizza</a>
                                            </div>
                                        </div>
                                        <div className="widget dz-widget_services mb-[50px] dz-widget_services">
                                            <div className="xl:mb-[30px] mb-5 pb-3 text-lg relative">
                                                <h4 className="text-xl font-rubik mb-4">Refine By Categories</h4>
                                                <Image
                                                    src={`/assets/images/line.png`}
                                                    alt=""
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                            <div className="form-check mb-[15px] block">
                                                <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left" type="checkbox" value="" />
                                                <label className="form-check-label ml-[15px] text-[15px] inline-block font-rubik">
                                                    Pizza
                                                </label>
                                            </div>
                                            <div className="form-check mb-[15px] block">
                                                <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left" type="checkbox" value="" />
                                                <label className="form-check-label ml-[15px] text-[15px] inline-block font-rubik">
                                                    Hamburger
                                                </label>
                                            </div>
                                            <div className="form-check mb-[15px] block">
                                                <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left" type="checkbox" value="" />
                                                <label className="form-check-label ml-[15px] text-[15px] inline-block font-rubik">
                                                    Cold Drink
                                                </label>
                                            </div>
                                            <div className="form-check mb-[15px] block">
                                                <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left" type="checkbox" value="" />
                                                <label className="form-check-label ml-[15px] text-[15px] inline-block font-rubik">
                                                    Sandwich
                                                </label>
                                            </div>
                                            <div className="form-check mb-[15px] block">
                                                <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left" type="checkbox" value="" />
                                                <label className="form-check-label ml-[15px] text-[15px] inline-block font-rubik">
                                                    Muffin
                                                </label>
                                            </div>
                                            <div className="form-check mb-[15px] block">
                                                <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left" type="checkbox" value="" />
                                                <label className="form-check-label ml-[15px] text-[15px] inline-block font-rubik">
                                                    Burrito
                                                </label>
                                            </div>
                                            <div className="form-check mb-[15px] block">
                                                <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left" type="checkbox" value="" />
                                                <label className="form-check-label ml-[15px] text-[15px] inline-block font-rubik">
                                                    Taco
                                                </label>
                                            </div>
                                            <div className="form-check mb-[15px] block">
                                                <input className="form-check-input w-5 h-5 rounded border border-[#2222224d] float-left" type="checkbox" value="" />
                                                <label className="form-check-label ml-[15px] text-[15px] inline-block font-rubik">
                                                    Hot Dog
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </aside>
                            </div>
                            <div className="lg:w-3/4 w-full px-[15px] lg:order-2 order-1 mb-[30px] sm:p-0">
                                <div className="flex justify-between items-center">
                                    <h5 className="md:mb-4 lg:mb-6 mb-5 lg:block hidden font-rubik">Search Results</h5>
                                    <strong className="filter-item-show mb-5 font-medium font-rubik">Search: 51,740 items</strong>
                                    <a href="#offcanvasFilter" id="filter-button2" className="font-rubik btn btn-primary filter-btn lg:hidden block mb-[15px] py-[5px] px-[18px] text-white">
                                        Filter
                                    </a>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <Image src={"/assets/images/pics1.jpg"} height={100} width={108} alt="/" className="h-full" />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-2 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg className="mr-[10px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <span
                                                    className="text-black font-rubik font-medium cursor-pointer"

                                                    onClick={() => setShowModal(true)}
                                                >
                                                    Double Patty Burger
                                                </span>
                                            </h6>

                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star"></i> 4.5
                                            </div>
                                        </div>

                                        <div className="sm:flex block justify-between">
                                            <ul className="flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik">By <span className="text-primary font-medium font-rubik"> Burger Farm</span></li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik flex"><Bike size={24} color="#519400" strokeWidth={0.75} />&nbsp; 30 min</li>
                                            </ul>
                                            <p className="mb-0"><span className="text-lime-800 font-weight-800 font-rubik">$15.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <Image src={"/assets/images/pics2.jpg"} height={100} width={108} alt="/" className="h-full" />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg className="mr-[10px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="#" className="menuDetailModal font-rubik">Chicken Patty Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star"></i> 4.5
                                            </div>
                                        </div>
                                        <div className="sm:flex block justify-between">
                                            <ul className="flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik">By <span className="text-primary font-medium font-rubik"> Burger Farm</span></li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik"> 20 min</li>
                                            </ul>
                                            <p className="mb-0"><span className="text-lime- font-weight-500 font-rubik">$10.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <Image src={"/assets/images/pics3.jpg"} height={100} width={108} alt="/" className="h-full" />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg className="mr-[10px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="#" className="menuDetailModal font-rubik">Veg Cripsy Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star"></i> 4.5
                                            </div>
                                        </div>
                                        <div className="sm:flex block justify-between">
                                            <ul className="flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik">By <span className="text-primary font-medium font-rubik"> Burger Farm</span></li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik"> 40 min</li>
                                            </ul>
                                            <p className="mb-0"><span className="text-lime- font-weight-500 font-rubik">$25.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <Image src={"/assets/images/pics4.jpg"} height={100} width={108} alt="/" className="h-full" />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg className="mr-[10px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="#" className="menuDetailModal font-rubik">Aloo Tikki Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star"></i> 4.5
                                            </div>
                                        </div>
                                        <div className="sm:flex block justify-between">
                                            <ul className="flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik">By <span className="text-primary font-medium font-rubik"> Burger Farm</span></li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik"> 15 min</li>
                                            </ul>
                                            <p className="mb-0"><span className="text-lime- font-weight-500 font-rubik">$05.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <Image src={"/assets/images/pics1.jpg"} height={100} width={108} alt="/" className="h-full" />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg className="mr-[10px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="#" className="menuDetailModal font-rubik">Pure Veg Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star"></i> 4.5
                                            </div>
                                        </div>
                                        <div className="sm:flex block justify-between">
                                            <ul className="flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik">By <span className="text-primary font-medium font-rubik"> Burger Farm</span></li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik"> 55 min</li>
                                            </ul>
                                            <p className="mb-0"><span className="text-lime- font-weight-500 font-rubik">$35.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dz-shop-card style-1 flex border border-[#0000001a] rounded-[10px] mb-5 overflow-hidden duration-500 hover:border-transparent hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] relative">
                                    <div className="dz-media w-[100px] min-w-[100px]">
                                        <Image src={"/assets/images/pics2.jpg"} height={100} width={108} alt="/" className="h-full" />
                                    </div>
                                    <div className="dz-content sm:p-5 p-2 flex flex-col w-full">
                                        <div className="dz-head mb-4 flex items-center justify-between">
                                            <h6 className="dz-name mb-0 flex items-center text-base">
                                                <svg className="mr-[10px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
                                                    <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                </svg>
                                                <a href="#" className="menuDetailModal font-rubik">Chicken Burger</a>
                                            </h6>
                                            <div className="rate bg-[#FE9F10] text-white rounded-[5px] py-[2px] px-[5px] font-medium text-[13px] leading-[18px] inline-block sm:static absolute bottom-[10px] right-3">
                                                <i className="fa-solid fa-star"></i> 4.5
                                            </div>
                                        </div>
                                        <div className="sm:flex block justify-between">
                                            <ul className="flex mx-[-10px]">
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik">By <span className="text-primary font-medium font-rubik"> Burger Farm</span></li>
                                                <li className="leading-[21px] mx-[10px] text-sm text-[#727272] font-rubik"> 25 min</li>
                                            </ul>
                                            <p className="mb-0"><span className="text-lime- font-weight-500 font-rubik">$45.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Search Section --> */}
            </main>


            <>

                {showModal ? (

                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                    {/*body*/}
                                    <span
                                        className="absolute p-2 top-0 right-0 z-50 text-black text-xl cursor-pointer"

                                        onClick={() => setShowModal(false)}
                                    >
                                        <CopyX size={28} color="#000000" strokeWidth={1.25} />
                                    </span>
                                    <div className="modal-content p-4 relative flex flex-col rounded-2xl w-full bg-white pointer-events-auto bg-clip-padding">
                                        <div className="modal-body product-detail lg:flex block rounded-md relative p-[6px]">
                                            <Image src={"/assets/images/pics1.jpg"} width={250} height={250} alt="/" className="rounded-md sm:mt-6 lg:h-full sm:h-[400px] h-[150px] w-full object-cover" />

                                            <div className="detail-info  lg:pr-5 lg:pl-[35px] p-[15px] relative">
                                                <span className="badge p-[2px] font-medium text-sm leading-5 text-[#666666] flex items-center rounded-[10px] font-rubik">
                                                    <svg className="mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" y="0.5" width="16" height="16" stroke="#0F8A65" />
                                                        <circle cx="8.5" cy="8.5" r="5.5" fill="#0F8A65" />
                                                    </svg>
                                                    Pure veg
                                                </span>
                                                <div className="dz-head">
                                                    <h4 className="mb-2 font-rubik font-bold">Double Patty Veg Burger</h4>
                                                    <div className="rating text-sm leading-[21px] flex font-rubik">
                                                        <Star size={20} color="#ffea00" strokeWidth={1.25} />&nbsp; <span className=""><strong className="font-medium">4.5</strong> - 20 Reviews</span>
                                                    </div>
                                                </div>
                                                <p className="text-[15px] mt-2 mb-4 font-rubik">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
                                                <ul className="flex my-[25px]">
                                                    <li className="mr-[45px] text-[15px] font-medium leading-[22px]  font-rubik">Price <span className="text-primary flex text-xl font-semibold leading-[30px] mt-[5px] text-lime-600">$20.00</span></li>
                                                    {/* <li className="mr-[45px] text-[15px] font-medium leading-[22px]  font-rubik">Quantity
                                                        <div className={style.input_group}>
                                                            <input type="number" step="1" value="1" name="quantity" className={style.quantityField}/>
                                                            <span className="flex justify-between p-[2px] absolute w-full">
                                                                <input type="button" value="-" className="button-minus" data-field="quantity" />
                                                                <input type="button" value="+" className="button-plus" data-field="quantity" />
                                                            </span>
                                                        </div>
                                                    </li> */}
                                                </ul>

                                                <ul className="modal-btn-group flex  mx-[-7px]">
                                                    <li className="mx-[7px] lg:mb-0 mb-[10px]">
                                                        <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 align-item-center via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none flex focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-rubik">Add to Cart &nbsp;
                                                        <span> <ShoppingBag color="#000000" strokeWidth={0.75}/></span>
                                                        </button>

                                                    </li>
                                                    <li className="mx-[7px] lg:mb-0 mb-[10px] font-rubik">
                                                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                                Buy Now
                                                            </span>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    {/*footer*/}

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>
        </>

    );
}
