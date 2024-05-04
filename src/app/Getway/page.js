'use client'
import React, { useState } from 'react'
import Sidebarmain from '../component/Sidebarmain'
import { MdCurrencyRupee } from "react-icons/md";
import Modal from 'react-modal';
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css';

function page() {
    const [Isopen, setIsopen] = useState(false)
 
    const [modalIsOpen, setIsOpen] = useState(false);
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
        <>
            <Sidebarmain />
            <section id="main" className='main'>

                <div className='container-fluid'>
                    <div className=' p-3'>
                        <div className='row p-5 shadow'>
                            <div className='col-md-4'>
                                <div className="form-check  mt-2 mb-3  shadow p-3 d-flex justify-content-between" >
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label formtext8" for="flexCheckDefault">
                                            Default checkbox
                                        </label>
                                    </div>
                                    <div >
                                        <span>
                                            <span className='float-end'><MdCurrencyRupee /><b>2,32000</b></span>
                                        </span>
                                    </div>
                                </div>
                                <div className="form-check my-2 shadow p-3 d-flex justify-content-between" >
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label formtext8" for="flexCheckDefault">
                                            DTM wallet
                                        </label>
                                    </div>
                                    <div >
                                        <span>
                                            <span className='float-end'><MdCurrencyRupee /><b>50,000</b></span>
                                        </span>
                                    </div>
                                </div>

                                <form>
                                    <div className="mb-3 d-flex pt-5">

                                        <input type="email" className="form-control w-75 d-inline-block me-2" id="exampleInputEmail1" placeholder='ASVUB1' />
                                        <button  className="w-25 frmbtn1">Applied</button>

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
                                            <span className='float-end'><img src='./images/coin.png' className='pe-2' alt='coin' /><b>500</b></span>
                                        </span>
                                    </div>
                                </div>


                                <div className='my-2 shadow p-3'>
                                    <div className='formtext7 '>Total Amount</div>
                                    <div className='formtext7 '><span><MdCurrencyRupee /></span>836<span>Change Plan?</span></div>
                                    <hr />
                                    <div className='row'>
                                        <div className='col-2'>
                                        <div className='image_natwork'> <img src="jio.png"></img></div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='jio_text1'>Biller Name </div>
                                            <div className='jio_text2'>Jio Prepaid</div>
                                        </div>
                                        <div className='col-4 '>
                                            <div className='jio_text1'>Mobile Number</div>
                                            <div className='jio_text2'>7880829986</div>
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
                                            <span className=" formtext6 "><MdCurrencyRupee />836</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">GST </div>

                                            </div>
                                            <span className='formtext10 pe-1'>Tax </span><span className=" formtext6 "> <MdCurrencyRupee />2</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Coupon</div>

                                            </div>
                                            <span className='formtext10 pe-1'>Applied </span><span className=" formtext6 "><MdCurrencyRupee /> 5</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between   border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Discount</div>

                                            </div>
                                            <span className='formtext10 pe-1'>Applied</span><span className=" formtext6 "> <MdCurrencyRupee />20</span>
                                        </li>
                                        <hr />
                                        <li className="list-group-item d-flex justify-content-between   border-0 align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="formtext5">Total Amount</div>

                                            </div>
                                            <span className=" formtext6 "> <MdCurrencyRupee />833.00 </span>
                                        </li>
                                    </ul>
                                </div>
                                <button className='frmbtn1 w-100 py-2' type='button' onClick={()=> setIsOpen(true)}>Pay Now</button>
                            </div>
                        </div>
                    </div>
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
        </>
    )
}

export default page