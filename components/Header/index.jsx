"use client";
import { useEffect, useState } from "react";
import style from "../Header/Header.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import {
    MdSearch,
    MdOutlineHome,
    MdOutlineLiveTv,
    MdSettingsSuggest,
} from "react-icons/md";

const Header = () => {
    const [showModal, setShowModal] = React.useState(false);

    //navSticky
    const [clientWindowHeight, setClientWindowHeight] = useState(0);
    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    //Mobile Menu
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    //Serach Menu
    const [visible, setVisible] = React.useState(false);

    //profile menu dropdown
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className={style.header}>
                <div className="p-0 container-fluid">
                    {/* <nav className={`${style.navBg}`}> */}
                    <nav
                        className={`${style.navBg} ${
                            clientWindowHeight > 5 && style.navSticky
                        }`}
                    >
                        <div className={`${style.mainHeader} `}>
                            <div className={`${style.navBar}`}>
                                <div
                                    className={`${style.mobileMenu}  ${
                                        showMobileMenu && style.mobileMenuBg
                                    }`}
                                >
                                    <button
                                        type="button"
                                        className={`${style.mobileButton}`}
                                        aria-controls="mobile-menu"
                                        aria-expanded="false"
                                        onClick={() => {
                                            setShowMobileMenu(!showMobileMenu);
                                        }}
                                    >
                                        <FaBars />
                                    </button>
                                </div>

                                {/* logo Menu start */}
                                <div className={`${style.logoMenu}`}>
                                    <div className={`${style.Logo}`}>
                                        <Image
                                            className={style.logoImages}
                                            src={`/assets/images/logo/logobg.png`}
                                            alt="Dawat E Kashmir Logo"
                                            width={274}
                                            height={274}
                                        />
                                    </div>
                                    <div className={style.menuBar}>
                                        <div className={style.menuList}>
                                            <Link
                                                href="/"
                                                className={style.menuItem}
                                            >
                                                Home
                                            </Link>
                                            <Link
                                                href="/menu"
                                                className={style.menuItem}
                                            >
                                                Menu
                                            </Link>
                                            <Link
                                                href="/about"
                                                className={style.menuItem}
                                            >
                                                About Us
                                            </Link>
                                            <Link
                                                href="/contact"
                                                className={style.menuItem}
                                            >
                                                Contact
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Search Menu start */}
                                <div className={style.rightMenu}>
                                    <div className={style.cart}>
                                        <Link href="/cartDetail"><FaCartShopping /></Link>
                                    </div>

                                    <div>
                                        {/* <Link href="#" className={style.themeBtn}> onClick={() => setShowModal(true)} Login </Link> */}
                                        <button
                                            className={style.themeBtn}
                                            type="button"
                                            onClick={() => setShowModal(true)}
                                        >
                                            Login
                                        </button>
                                    </div>

                                    {/* Profile section start */}
                                    {/* <div className={style.profileMenu}>
                  <div className="">
                    <div>
                    <button className={style.profileMenuToggle} onClick={toggleDropdown}>
                        <span className="sr-only">Open user menu</span>
                        <Image className={style.userImg} src={`https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png`} alt=" tv Asia"
                          width={30}
                          height={30}
                        />
                      </button>
                    </div>
                  
                    {isOpen && (
                    <div

                      className={`${style.profileMenuCard} ${style.slideDdownAnimation}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                      <Link href="manageaccount" className={style.profileItem} role="menuitem" tabIndex="-1" id="user-menu-item-0">Account Info</Link>
                      <Link href="transaction" className={style.profileItem} role="menuitem" tabIndex="-1" id="user-menu-item-1">Transaction History</Link>
                   
                      <Link href="login" className={style.profileItem} role="menuitem" tabIndex="-1" id="user-menu-item-4">Logout</Link>
                    </div>
                     )}
                  </div>
                </div> */}
                                </div>
                            </div>
                        </div>

                        {/* Mobile menu, show/hide based on menu state.  */}
                        {showMobileMenu && (
                            <div className={`${style.mobileMenus}`}>
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    <Link href="" className={style.mobileItem}>
                                       Home
                                    </Link>
                                    <Link href="/about" className={style.mobileItem}>
                                       About Us
                                    </Link>
                                    <Link href="/menu" className={style.mobileItem}>
                                       Order Now
                                    </Link>
                                    <Link href="/contact" className={style.mobileItem}>
                                       Contact Us
                                    </Link>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </header>

            <>
                {showModal ? (
                    <>
                        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                            <div className="relative w-auto max-w-3xl mx-auto my-6 ">
                                {/*content*/}
                                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                    {/*body*/}
                                    <div className="bg-[url('/assets/images/login-bg.png')] "></div>
                                    <div className="p-0 overflow-y-auto">
                                        <div className="lg:py-[60px] lg:px-[70px] py-[20px] px-[40px]">
                                            <div className="text-center login-head">
                                                <h4 className="text-[30px] mb-[5px] font-lobster">
                                                    Welcome Back
                                                </h4>
                                                <p className="mb-[35px] text-base font-rubik">
                                                You `&apos;`re one step away from getting started<br></br> with Dawat-E-Kashmir.

                                                </p>
                                            </div>

                                            <form>
                                                <div className="mb-[15px]">
                                                    <label
                                                        for="dzEmail"
                                                        className="form-lable font-rubik"
                                                    >
                                                        Email*
                                                    </label>
                                                    <input
                                                        name="dzEmail"
                                                        id="dzEmail"
                                                        required=""
                                                        type="text"
                                                        className="input-group mt-2.5 flex relative border border-[#dddddd] w-full rounded-md py-2.5 px-5 focus:ring-primary"
                                                        placeholder="Enter Your Email"
                                                    />
                                                </div>
                                                <div className="mb-[30px]">
                                                    <div className="relative input-group">
                                                        <label
                                                            for="dzEmail"
                                                            className="form-lable font-rubik"
                                                        >
                                                            Password*
                                                        </label>

                                                        <input
                                                            name="dzPassword"
                                                            id="dzPassword"
                                                            required=""
                                                            type="text"
                                                            className="dzPassword mt-2.5 flex relative border border-[#dddddd] w-full rounded-md py-2.5 px-5 focus:ring-primary"
                                                            placeholder="Enter Your Password"
                                                        />
                                                        <div className="show-pass">
                                                            {/* <svg className="eye-close" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#8ea5c8"><path d="M11 17.188a8.71 8.71 0 0 1-1.576-.147.69.69 0 0 1-.579-.678.7.7 0 0 1 .817-.676 7.33 7.33 0 0 0 1.339.127c4.073 0 7.61-3.566 8.722-4.812a18.51 18.51 0 0 0-2.434-2.274.69.69 0 0 1 .335-1.226.69.69 0 0 1 .268.019c.087.024.169.064.24.12a18.79 18.79 0 0 1 3.036 2.939.69.69 0 0 1 0 .848c-.185.234-4.581 5.763-10.167 5.763zm7.361-13.549a.69.69 0 0 0-.972 0l-2.186 2.186a10.68 10.68 0 0 0-2.606-.864c-.527-.099-1.061-.149-1.597-.149-5.585 0-9.982 5.528-10.166 5.763a.69.69 0 0 0 0 .848c.897 1.09 1.915 2.075 3.033 2.936.529.415 1.083.796 1.66 1.142l-1.888 1.887c-.066.063-.118.139-.154.223a.69.69 0 0 0 .145.757.67.67 0 0 0 .226.15c.085.034.175.052.266.051a.69.69 0 0 0 .265-.056c.084-.036.16-.088.223-.154l13.75-13.75a.69.69 0 0 0 0-.972zm-13.65 9.636A18.51 18.51 0 0 1 2.278 11C3.39 9.754 6.927 6.187 11 6.187a7.31 7.31 0 0 1 1.348.127 8.92 8.92 0 0 1 1.814.55L12.895 8.13c-.661-.437-1.453-.632-2.241-.552a3.44 3.44 0 0 0-2.085.989c-.56.56-.91 1.297-.989 2.085a3.44 3.44 0 0 0 .552 2.241l-1.601 1.604a14.43 14.43 0 0 1-1.82-1.222zm4.432-1.392c-.134-.275-.204-.577-.206-.883a2.07 2.07 0 0 1 .6-1.456 2.12 2.12 0 0 1 2.338-.392l-2.731 2.731z"></path>
								</svg> */}
                                                            {/* <svg className="eye-open" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8ea5c8"><path d="M19.873 9.611c-.179-.244-4.436-5.985-9.873-5.985S.305 9.367.127 9.611a.66.66 0 0 0 0 .778c.178.244 4.436 5.985 9.873 5.985s9.694-5.74 9.873-5.984a.66.66 0 0 0 0-.778zM10 15.055c-4.005 0-7.474-3.81-8.501-5.055C2.525 8.753 5.986 4.945 10 4.945c4.005 0 7.473 3.809 8.501 5.055-1.025 1.247-4.487 5.054-8.501 5.054zm0-9.011A3.96 3.96 0 0 0 6.044 10 3.96 3.96 0 0 0 10 13.956 3.96 3.96 0 0 0 13.956 10 3.96 3.96 0 0 0 10 6.044zm0 6.593A2.64 2.64 0 0 1 7.363 10 2.64 2.64 0 0 1 10 7.363 2.64 2.64 0 0 1 12.637 10 2.64 2.64 0 0 1 10 12.637z"></path>
								</svg> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-full">
                                                <button
                                                    name="submit"
                                                    value="submit"
                                                    type="submit"
                                                    className={style.themeBtn}
                                                >
                                                    <span>Sign In</span>
                                                </button>
                                            </div>
                                            <p className="text-center mt-[30px] text-base font-rubik mb-4">
                                                Not registered? &nbsp;
                                                <a
                                                    id="register"
                                                    className="font-medium register text-primary font-rubik"
                                                    href="#offcanvasLogin"
                                                >
                                                    Register here
                                                </a>
                                            </p>
                                            <span
                                                className="block w-full py-2 text-center cursor-pointer font-rubik text-lime-500"
                                                onClick={() =>
                                                    setShowModal(false)
                                                }
                                            >
                                                Skip
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                    </>
                ) : null}
            </>
        </>
    );
};

export default Header;
