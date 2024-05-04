'use client'
import React, { useState } from 'react'
import Sidebarmain from '../component/Sidebarmain'
import { AiFillCheckCircle } from "react-icons/ai";
import Modal from 'react-modal';
import { AiFillFilePdf } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import {MdCurrencyRupee} from "react-icons/md";
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import '../paymentgetway/Payment.css';

function page() {
    const [Isopen, setIsopen] = useState(false)

    const [modalIsOpen, setIsOpen] = useState(true);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '397px',
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',

        },
    };
    return (
        <div>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid p-5'>
                    {Isopen ? <>

                        <div className='row p-5 shadow'>
                            <div className='col-md-5 mx-auto'>
                                <div className='mt-3 mb-1 shadow py-3'>
                                    <div className='ps-3 pb-4 text-center'><AiFillCheckCircle className='chec_icon' /></div>
                                    <div className=' text-center'><h4>Money Added Successfully</h4></div>
                                    <div className='text-end pt-3 pb-2 pe-2'>
                                        <span className='formtext11 px-4'>Download Receipt <AiFillFilePdf /></span><span className='formtext11'>Send <AiOutlineSend /></span>
                                    </div>
                                    <ul className="list-group list-group-none">
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Transaction ID</div>

                                            </div>
                                            <span className=" formtext12 ">PFC457820453 <MdContentCopy className='text_clr ps-1 fs-4' />  </span>
                                        </li>
                                        <hr />
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Date</div>

                                            </div>

                                            <span className=" formtext12 "> 20/02/2023</span>
                                        </li>
                                        <hr />
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Mode of Payment</div>

                                            </div>
                                            <span className=" formtext12 ">Credit Card</span>
                                        </li>
                                        <hr />
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Payment Gateway ID</div>

                                            </div>
                                            <span className=" formtext12 ">PFC457820453 <MdContentCopy className='text_clr ps-1 fs-4' /> </span>
                                        </li>
                                        <hr />
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Transaction Status</div>

                                            </div>
                                            <span className=" formtext12 text-success"> Success</span>
                                        </li>
                                        <hr />
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Mobile Number</div>

                                            </div>
                                            <span className="formtext12 "> 7880829986</span>
                                        </li>
                                        <hr />
                                        <li className="list-group-item d-flex justify-content-between   border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Payment Amount</div>

                                            </div>
                                           <span className=" formtext12 "><MdCurrencyRupee/>159</span>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </> : <>
                        <div className='row p-5 shadow'>
                            <div className='col-md-4'>
                                <div className="form-check  mt-2 mb-3  shadow p-3 d-flex justify-content-between" >
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label formtext8" for="flexCheckDefault">
                                        Regular wallet
                                        </label>
                                    </div>
                                    <div className='py-2'>
                                        <span>
                                            <span className='float-end'><MdCurrencyRupee/><b>2,32000</b></span>
                                        </span>
                                    </div>
                                </div>
                                <div className="form-check my-2 shadow p-3 d-flex justify-content-between" >
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label formtext8" for="flexCheckDefault">
                                        Your coins
                                        </label>
                                    </div>
                                    <div >
                                        <span>
                                           <span className='float-end'><MdCurrencyRupee/><b>50,000</b></span>
                                        </span>
                                    </div>
                                </div>

                                <form>
                                    <div className="mb-3 d-flex pt-5">

                                        <input type="email" className="form-control w-75 d-inline-block me-2" id="exampleInputEmail1" placeholder='ASVUB1' />
                                        <button type="submit" className="btn  w-25 frmbtn1">Applied</button>

                                    </div>
                                    <i className='formtext9'>Applied</i>

                                </form>
                            </div>
                            <div className='col-md-5 '>
                                <div className="form-check mt-2 mb-3 shadow p-3 d-flex justify-content-between" >
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label formtext8" for="flexCheckDefault">
                                            Your coins
                                        </label>
                                    </div>
                                    <div >
                                        <span>
                                            <span className='float-end'>
                                                <img src='imageico.png' className='p-2'></img>
                                                <b>500</b></span>
                                        </span>
                                    </div>
                                </div>


                                <div className='my-2 shadow p-3'>
                                    <div className='formtext7 '>Total Amount</div>
                                    <div className='formtext7 '><span><MdCurrencyRupee/></span>10000    <i className='formtext9'> Change Amount?</i></div>
                                    
                                    <hr />
                                    <div className='row'>
                                        <div className='col-1 '>
                                            <img src='payicons.png' className='img_pay' />
                                        </div>
                                        <div className='col-6'>
                                            <span className='formtext1'>Add money to wallet </span>
                                            <div className='formtext3'>Selectkaro India PVT. LTD</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3 mb-1 shadow p-3'>
                                    <div className='ps-3 pb-4'><b>Order Details</b></div>
                                    <ul className="list-group list-group-none">
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Base amount</div>

                                            </div>
                                            <span className=" formtext6 "><MdCurrencyRupee/>10000</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">GST </div>

                                            </div>
                                           <span className=" formtext6 "> <MdCurrencyRupee/>0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Coupon</div>

                                            </div>
                                            <span className=" formtext6 "><MdCurrencyRupee/> 50</span>
                                        </li>
                                        <hr />
                                        <li className="list-group-item d-flex justify-content-between   border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Total Amount</div>

                                            </div>
                                          <span className=" formtext6 "> <MdCurrencyRupee/>10,950.00 </span>
                                        </li>
                                    </ul>
                                </div>
                                <button className='frmbtn1 w-100 my-5 py-3' type='button' href='#'>Pay Now</button>
                            </div>
                        </div>

                    </>

                    }


                </div>

            </section>
            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row'>
                    <div className='col-md-12 text-center rounded'>
                        <div className='py-3'>
                            <img src='../images/BharatPay.png' className='image' />
                        </div>
                        <div class="spinner-border prosesing_clr" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div className=''>
                            <p className='popup_text_clr'>Securely redirecting to bank page<br />Please Wait</p>

                        </div>
                    </div>
                </div>

            </Modal>
        </div>

    )
}

export default page