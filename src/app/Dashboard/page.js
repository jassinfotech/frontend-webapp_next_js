'use client'
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import '../scss/style.scss';
import './page.css';
import Services from '../component/Services';
import Card from '../component/Card';
import Slider_dashbord from '../component/Slider_dashbord';

const Dashboard = () => {
    return (
        <>
            <Sidebarmain />
            <section id="main" className='main pt-55_das'>
                <div className='p-5 pt-3'>
                          <div className='row'>
                        <div className='col-md-12'>
                            <Slider_dashbord />
                        </div>
                    </div>
                    <Services />
                    <Card />
                </div>

            </section>


        </>
    )
}

export default Dashboard