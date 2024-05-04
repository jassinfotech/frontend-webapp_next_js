'use client'
import React from 'react'
import Sidebarmain from '../component/Sidebarmain'
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/style.scss';
import Personaldetails from '../subcomponent/Personaldetails';
 import Shopdetail from '../subcomponent/Shopdetail';
import Customerkyc from '../subcomponent/Customerkyc';
import Agreement  from '../subcomponent/Agreement';
import Apikey from '../subcomponent/Apikey';
import Changepassword from '../subcomponent/Changepassword';


function page() {
    return (

        <>

            <Sidebarmain />
            <section id="main" className='main pt-55_das'>
            <div className='row p-5'>
                    <div className='col-md-12'>
                        <div className="m-4">
                            <ul className="nav nav-tabs propfile_fnd" id="myTab">
                                <li className="nav-item p-2">
                                    <a href="#Myprofile" className="nav-link active text-dark" data-bs-toggle="tab">My profile</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="#Shopdetail" className="nav-link text-dark" data-bs-toggle="tab">Shop detail</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="#Kyc" className="nav-link text-dark" data-bs-toggle="tab">Kyc Detail</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="#Agreement" className="nav-link text-dark" data-bs-toggle="tab">Agreement</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="#ReferandEarn" className="nav-link text-dark" data-bs-toggle="tab">API Key</a>
                                </li>
                                <li className="nav-item p-2">
                                    <a href="#ChangePassword" className="nav-link text-dark " data-bs-toggle="tab">Change Password</a>
                                </li>
                            </ul>
                             <div className="tab-content">
                                <div className="tab-pane fade show active" id="Myprofile">
                                    <Personaldetails />
                                </div>
                                 <div className="tab-pane fade" id="Shopdetail">
                                    <Shopdetail />
                                </div>
                                 <div className="tab-pane fade" id="Kyc">
                                    <Customerkyc />
                                </div>
                              <div className="tab-pane fade" id="Agreement">
                                    <Agreement />
                                </div>
                                <div className="tab-pane fade" id="ReferandEarn">
                                  <Apikey/>
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