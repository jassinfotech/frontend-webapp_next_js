'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaWallet } from "react-icons/fa";
import { FaUsers, FaGift, FaShoppingCart, FaCog, FaOutdent, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import './custom.css'

function Slider_box() {
    return (
        
            <div className='container'>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../slider_ds.jpg" class="d-block w-100" alt="slider image" />
                        </div>
                        <div class="carousel-item">
                            <img src="../slider_ds.jpg" class="d-block w-100" alt="..." />
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <div className='icon_bg_control'> <span ><FaAngleLeft size={30} color='#28A5C1' /></span>
                            <span className="visually-hidden">Previous</span>
                        </div>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <div className='icon_bg_control'><span><FaAngleRight size={30} color='#28A5C1' /></span>
                            <span className="visually-hidden">Next</span>
                        </div>
                    </button>
                </div>
            </div>
       
    )
}
export default Slider_box