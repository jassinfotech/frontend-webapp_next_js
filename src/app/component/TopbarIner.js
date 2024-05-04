'use client'
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import { FaWallet } from "react-icons/fa";
import {MdCurrencyRupee} from "react-icons/md";
import { FaUsers, FaGift, FaShoppingCart, FaCog, FaOutdent, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import './custom.css'
import Link from 'next/link';
const 
TopbarIner = (props) => {

    return (
        <>


            <section className='topnavbar' id="header">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand" href="#"> <img src='../SelectKaro(1).png' alt='lodo image' className='' /></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li class="nav-item px-3">
                                    <a class="nav-link active navlnk" aria-current="page" href="#">Recharge</a>
                                </li>
                                <li class="nav-item px-3">
                                    <a class="nav-link navlnk" href="#">Bill Payment</a>
                                </li>
                                <li class="nav-item px-3">
                                    <Link class="nav-link navlnk" href="/GiftCards">Gift Cards</Link>
                                </li>
                                <li class="nav-item px-3">
                                    <a class="nav-link navlnk">Prepaid Cards</a>
                                </li>
                            </ul>
                            <ul className='liststylenone'>
                                <li className=' border rounded m-2 px-2 fs-3'>
                                    <IoIosNotifications />
                                </li>
                                <li className='border rounded m-2 px-2 fs-3'>
                                    <FaWallet />
                                </li>
                                <li className=' mx-3 pt-1'>
                                    <span className='topbartxt1'>My wallet<br /></span><MdCurrencyRupee/><span className='topbartxt2 '>  2,32000</span>
                                </li>
                                <li className=' mx-3 pt-1'>
                                    <span className='topbartxt4'>Ram<br /></span><span className='topbartxt3'>Retailer</span>
                                </li>
                                <li className=' mx-3'>
                                    <img src='../navimg.png' className='w-100' />
                                </li>
                            </ul>



                        </div>
                    </div>
                </nav>

            </section>

       

        </>
    )
}
export default TopbarIner