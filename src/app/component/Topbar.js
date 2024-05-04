'use client'
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import { FaWallet } from "react-icons/fa";
import { FaUsers, FaGift, FaShoppingCart, FaCog, FaOutdent, FaAngleDown } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import './custom.css'
import Notifications from './Notifications';
const Topbar = (props) => {
    const [itshownotifi, setItshownotifi] = useState(false)

    return (
        <>

            <section id="header" className='header-main '>
                <div className='header-row position-relative'>
                    <div className=' px-4 pr-0' style={{width:"70%"}}>
                        <nav class="navbar navbar-expand-lg ">
                            <div class="container-fluid">
                                <div className="header-icon-start" onClick={props.ToggleBtn}>
                                    <li className='toggle-btn'><FaOutdent size={23} /></li>
                                </div>

                                <div class="collapse navbar-collapse">
                                    <ul class="navbar-nav me-auto my-2 my-lg-0 mleft_50 ">
                                        <li class="nav-item">
                                            <a class="nav-link active px-4" aria-current="page" href="#">Recharge</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link px-4" href="#">Bill Payment</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link px-4" href="#">
                                                Gift Cards
                                            </a>

                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link d-flex" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Prepaid Cards  <div className='icon_dorp'>
                                                <FaAngleDown/>
                                            </div>
                                            </a>
                                            <ul class="dropdown-menu text-left dash_drop_menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='header-icon'>
                        <li style={{ marginRight: '31px' }} onClick={() => setItshownotifi(true)}>
                            <IoIosNotifications size={45} className='border rounded p-1' />
                        </li>

                        <li className='pb-2' style={{ marginRight: '31px' }}>
                            <FaWallet size={45} className='border rounded p-2' />
                        </li>
                        <li style={{ marginRight: '31px', fontSize: '12px', position: 'relative', top: 10 }}>
                            <span> My wallet</span><br /> <span className='topbar_text2 '>₹ <span className='topbar_text1 ps-1'>2,32000</span></span>
                        </li>

                        <li style={{ marginRight: '14px', fontSize: '12px', position: 'relative', top: 10 }}>
                            <span className='topbar_text4'>Ram</span><br /><span className='topbar_text3'>Retailer</span>
                        </li>
                        <li>

                            <img src="https://img.freepik.com/free-icon/user_318-563642.jpg?w=360" alt='image' />
                            <div className='header-dropdown'>
                                <div className='after'></div>
                                <div className='dropdown-content'>
                                    <li>
                                        <span className='drop-icon'></span>
                                        View Profile</li>
                                      <li><span className='drop-icon'></span>
                                        Logout</li>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
                {itshownotifi && <div className='notifacton_bar position-fixed p-4'>
                    <Notifications />
                </div>
                }
            </section >






        </>
    )
}
export default Topbar