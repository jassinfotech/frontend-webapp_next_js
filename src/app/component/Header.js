'use client'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import './custom.css'
import Link from 'next/link';
function Header() {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
            {isLogin != "false" ? <div className='topbar'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 info'>
                            <a href='#' >  <HiOutlineMailOpen className='info_icon1' /> info@selectkaro.com</a>
                            <a href='#' className='pl-2'>  <FaPhoneAlt className='info_icon' />  +91 90154 83838</a>
                        </div>
                        <div className='col-lg-6 info text-end'>
                            <Link href='/Login'>Login</Link>
                            <Link href='/Signup'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
                : <></>
            }
            <div className='header'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-12'>
                            {isLogin ? <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand nvlogo" href="/">Select<span>Karo</span></Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 menu_li">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" href="/MOBILERECHARGE">Recharge</Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link" href="#">Bill Payment</Link>
                                        </li>

                                        <li className="nav-item" >
                                            <Link className="nav-link" href="#">Gift Cards</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="#">Prepaid Cards</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/Forbusiness">For Business</Link>
                                        </li>
                                    </ul>

                                </div>


                            </nav> : <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand nvlogo" href="/">Select<span>Karo</span></Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu_li">
                                        <li className="nav-item  px-3">
                                            <Link className="nav-link" href="#">Help?</Link>
                                        </li>
                                        <li className="nav-item  px-3">
                                            <Link className="nav-link" href="#">Logout</Link>
                                        </li>
                                    </ul>


                                </div>

                            </nav>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>



    )
}

export default Header