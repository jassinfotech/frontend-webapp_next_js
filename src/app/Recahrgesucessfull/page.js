'use client'
import React, { } from 'react';
import Sidebarmain from '../component/Sidebarmain';
import { AiFillCheckCircle } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { AiFillFilePdf } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css';


function page() {
    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 pt-5'>
                            <div className='row justify-content-center'>
                                <div className='col-12'>
                                    <div className='ps-3 pb-4 text-center'><AiFillCheckCircle className='chec_icon' /></div>
                                    <div className=' text-center'><h4>Mobile Recharge Successful</h4></div>
                                </div>
                                <div className='col-md-5 pt-5'>
                                    <div className='rec_sucsec pt-2'>Congratulations!</div>
                                    <div className='formtext5'>You received a offer</div>
                                    <div className='pt-5'>
                                        <img src='../images/rechargsuccsec.png' className='' alt='img' />
                                        <div className='text-end pe-5 pt-2'>
                                            <a href='#' className='text-decoretion-none text_clr'>View all Offers</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-5 '>
                                    <div className='text-end pt-3 pb-2 pe-2'>
                                        <span className='formtext11 px-4'>Download Receipt <AiFillFilePdf /></span><span className='formtext11'>Send <AiOutlineSend /></span>
                                    </div>
                                    <div className='mt-3 mb-1 shadow py-3'>
                                        <ul className="list-group list-group-none">
                                            <li className="list-group-item d-flex justify-content-between py-0 border-0 align-items-start">
                                                <div className="ms-1 me-auto">
                                                    <div className="formtext5">Transaction ID</div>
                                                </div>
                                                <span className=" formtext12 ">PFC457820453 <MdContentCopy className='text_clr ps-1 fs-4' />  </span>
                                            </li>
                                            <hr />
                                            <li className="list-group-item d-flex justify-content-between py-0 border-0 align-items-start">
                                                <div className="ms-1 me-auto">
                                                    <div className="formtext5">Date</div>
                                                </div>
                                                <span className=" formtext12 "> 20/02/2023</span>
                                            </li>
                                            <hr />
                                            <li className="list-group-item d-flex justify-content-between py-0 border-0 align-items-start">
                                                <div className="ms-1 me-auto">
                                                    <div className="formtext5">Mode of Payment</div>
                                                </div>
                                                <span className=" formtext12 ">Credit Card</span>
                                            </li>
                                            <hr />
                                            <li className="list-group-item d-flex justify-content-between py-0 border-0 align-items-start">
                                                <div className="ms-1 me-auto">
                                                    <div className="formtext5">Payment Gateway ID</div>
                                                </div>
                                                <span className=" formtext12 ">PFC457820453 <MdContentCopy className='text_clr ps-1 fs-4' /> </span>
                                            </li>
                                            <hr />
                                            <li className="list-group-item d-flex justify-content-between py-0 border-0 align-items-start">
                                                <div className="ms-1 me-auto">
                                                    <div className="formtext5">Transaction Status</div>
                                                </div>
                                                <span className=" formtext12 text-success"> Success</span>
                                            </li>
                                            <hr />
                                            <li className="list-group-item d-flex justify-content-between py-0 border-0 align-items-start">
                                                <div className="ms-1 me-auto">
                                                    <div className="formtext5">Mobile Number</div>
                                                </div>
                                                <span className="formtext12 "> 7880829986</span>
                                            </li>
                                            <hr />
                                            <li className="list-group-item d-flex justify-content-between py-0  border-0 align-items-start">
                                                <div className="ms-1 me-auto">
                                                    <div className="formtext5">Payment Amount</div>
                                                </div>
                                                <span className=" formtext12 "><MdCurrencyRupee />159   </span>
                                            </li>
                                        </ul>
                                    </div>
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