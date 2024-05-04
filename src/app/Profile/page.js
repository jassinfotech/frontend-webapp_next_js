'use client'
import React, { useState, useEffect, useRef } from 'react';

import Sidebarmain from '../component/Sidebarmain';
import Personaldetails from '../subcomponent/Personaldetails';
import Shopdetail from '../subcomponent/Shopdetail';
import Customerkycs from '../subcomponent/Customerkycs';
import Agreement from '../subcomponent/Agreement';
import Referern from '../subcomponent/Referern';
import Changepassword from '../subcomponent/Changepassword';
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/style.scss';
import './profile.css';
function page() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (


        <>
            <Sidebarmain />
            <section id="main" className='main pt-55_das'>
                <div className='row'>
                    <div className='col-md-12 m-4  p-5'>
                        <div className="from_bg ">
                            <ul className="nav nav-tabs propfile_fnd" id="myTab">
                                <li className="nav-item">
                                    <a href="#Myprofile" className="nav-link active text-dark" data-bs-toggle="tab">My profile</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Shopdetail" className="nav-link text-dark" data-bs-toggle="tab">Shop detail</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Kyc" className="nav-link text-dark" data-bs-toggle="tab">Kyc Detail</a>
                                </li>
                                <li className="nav-item ">
                                    <a href="#Agreement" className="nav-link text-dark" data-bs-toggle="tab">Agreement</a>
                                </li>
                                {/* <li className="nav-item ">
                                    <a href="#ReferandEarn" className="nav-link text-dark" data-bs-toggle="tab">Refer and Earn</a>
                                </li> */}
                                <li className="nav-item ">
                                    <a href="#ChangePassword" className="nav-link text-dark " data-bs-toggle="tab">Change Password</a>
                                </li>
                            </ul>
                            <div className="tab-content pt-5">
                                <div className="tab-pane fade show active" id="Myprofile">
                                    <Personaldetails />
                                </div>
                                <div className="tab-pane fade" id="Shopdetail">
                                    <Shopdetail />
                                </div>
                                <div className="tab-pane fade" id="Kyc">
                                    <div className='row'>
                                        <div className='col-lg-10 col-md-10 mx-auto'>
                                            <Customerkycs />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="Agreement">
                                    <Agreement />
                                </div>
                                {/* <div className="tab-pane fade" id="ReferandEarn">
                                    <Referern />
                                </div> */}
                                <div className="tab-pane fade" id="ChangePassword">
                                    <Changepassword />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>


    )
}

export default page