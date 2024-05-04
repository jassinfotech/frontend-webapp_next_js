'use client'
import React, { useState, useEffect, useRef } from 'react';

import Sidebarmain from '../component/Sidebarmain';
import Personaldetails from '../subcomponent/Personaldetails';
import Shopdetail from '../subcomponent/Shopdetail';
import Customerkyc from '../subcomponent/Customerkyc';
import Agreement from '../subcomponent/Agreement';
import Referern from '../subcomponent/Referern';
import Changepassword from '../subcomponent/Changepassword';
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/style.scss';
import './customerprofile.css';
function page() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (


        <>
            <Sidebarmain />
            <section id="main" className='main pt-55_das'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="m-4 from_bg pb-4">
                            <ul className="nav nav-tabs propfile_fnd" id="myTab">
                                <li className="nav-item p-2">
                                    <a href="#Myprofile" className="nav-link active text-dark" data-bs-toggle="tab">My profile</a>
                                </li>

                                <li className="nav-item p-2">
                                    <a href="#Kyc" className="nav-link text-dark" data-bs-toggle="tab">Kyc Detail</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="#ChangePassword" className="nav-link text-dark " data-bs-toggle="tab">Change Password</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="Myprofile">
                                    <Personaldetails />
                                </div>

                                <div className="tab-pane fade" id="Kyc">
                                    <div className='row'>
                                        <div className='col-lg-10 mx-auto col-md-10'>
                                            <Customerkyc />
                                        </div>
                                    </div>

                                </div>

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