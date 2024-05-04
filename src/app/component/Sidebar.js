'use client'
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { BiHome } from "react-icons/Bi";
import { FaUser, FaGift, FaShoppingCart, FaCog, FaGenderless, FaAngleRight, FaAngleUp, FaWallet } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { MdFiberManualRecord, MdOutlineFiberManualRecord } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import './custom.css'
import Link from 'next/link';
const Sidebar = () => {
    return (
        <>
            <section id="sidebar" className='sidebar-main'>
                <div className='logo-main'>
                    <div className='logo'>
                        <h1>Select<span>Karo</span></h1>
                    </div>
                </div>
                <div className='sidebar-content'>
                    <ul className="accordion accordion-flush" id="accordionFlushExample">
                       <li>
                            <div className="accordion-header">
                                <Link href="/Dashboard"> <div className="menu_btn" type="button" >
                                <span className='s_icon'>
                                        <BiHome className='icon' />
                                    </span>
                                    <span className='s_title'>Dashboard</span>
                                </div>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <div className="accordion-header">
                                <Link href="/Profile"> <div className="menu_btn" type="button" >
                                    <span className='s_icon'>
                                        <FaUser className='icon' />
                                    </span>
                                    <span className='s_title'>My Profile</span>
                                </div>
                                </Link>
                            </div>
                        </li>

                        <li>
                            <div className="accordion-header">
                                <div className="menu_btn" type="button" >
                                    <span className='s_icon'>
                                        <FaWallet className='icon' />
                                    </span>
                                    <span className='s_title'>My wallet</span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="accordion-header">
                                <div className="menu_btn" type="button" >
                                    <span className='s_icon'>
                                        <FaGift className='icon' />
                                    </span>
                                    <span className='s_title'>Gift card</span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="accordion-header">
                                <div className="menu_btn" type="button" >
                                    <span className='s_icon'>
                                        <BiHome className='icon' />
                                    </span>
                                    <span className='s_title'>My Offers</span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="accordion-header">
                                <Link href="/transaction"> <div className="menu_btn" type="button" >
                                    <span className='s_icon'>
                                    <FaWallet className='icon' />
                                    </span>
                                    <span className='s_title'>Transactions</span>
                                </div>
                                </Link>
                            </div>
                            
                        </li>

                        <li>
                            <div className="accordion-header">
                                <div className="menu_btn" type="button" >
                                    <span className='s_icon'>
                                        <FaWallet className='icon' />
                                    </span>
                                    <span className='s_title'>Transactions</span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="accordion-header">
                                <Link href="/ticketlist"> <div className="menu_btn" type="button" >
                                    <span className='s_icon'>
                                    <FiHelpCircle className='icon' />
                                    </span>
                                    <span className='s_title'>Help?</span>
                                </div>
                                </Link>
                            </div>
                            
                        </li>

                    </ul>



                </div>
            </section>
        </>
    )
}
export default Sidebar