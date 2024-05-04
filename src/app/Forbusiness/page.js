'use client'
import React, { useState } from 'react'
import Modal from 'react-modal';
import Link from 'next/link';
import { FaSearch, FaSlidersH, FaCheck, FaStarOfLife } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Header from '../component/Header'
import './business.css'


function page() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Individual');
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
            width: '357px',
            height: '395px',
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',

        },
    };
    return (
        <div className='bg-white mb-5' >
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-8 mx-auto p-5 text-center'>
                        <h1 className='headding'><b>WELCOME TO SELECTKARO</b></h1>
                        <p className='pagratext p-4'>Hi Partner I am Providing To best Services Like Recharge, Gift Card, Bill Payment <br /> And Many more Type s Of services</p>
                    </div>
                    <div className='col-md-10 col-lg-10 mx-auto pb-3'>
                        <p className='pagratext text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas urna vitae auctor consectetur. Suspendisse tempor est finibus, pretium arcu eu, viverra lacus.</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12 col-lg-12 mx-auto h_text'>
                        <div className='row pb-5'>
                            <div className='col-lg-6 col-md-6'>
                                <h4 className='text-center'><b>Enquiry Form</b></h4>
                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <h4 className='text-center'><b>We are providing these services</b></h4>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 enquiry_from p-55 py-4 position-relative'>
                                <h4 className='text-center py-3'>Enter Your Detail</h4>
                                <div className="mb-3">
                                    <label className="form-label pt-3"><b> First Name</b> <span><FaStarOfLife /> </span></label>
                                    <input type="text" className="form-control input form-select_3" placeholder="Enter you name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label pt-3"><b>Last name</b> <span><FaStarOfLife /> </span></label>
                                    <input type="text" className="form-control input form-select_3" placeholder="Enter you Last name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label pt-3"><b>Mobile Number</b> <span><FaStarOfLife /> </span></label>
                                    <input type="text" className="form-control input form-select_3" placeholder="Enter you mobile number" />
                                </div>
                                <div className='row p-3 py-3'>
                                    <div class="form-check col-6 ">
                                        <input
                                            className="form-check-input form-select_3"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault1"
                                            checked={selectedOption === 'Individual'}
                                            onChange={() => setSelectedOption('Individual')}
                                        />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Individual
                                        </label>





                                    </div>
                                    <div class="form-check col-6">
                                        <input
                                            className="form-check-input form-select_3"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="flexRadioDefault2"
                                            checked={selectedOption === 'Company'}
                                            onChange={() => setSelectedOption('Company')}
                                        />

                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Company
                                        </label>
                                    </div>
                                </div>

                                {selectedOption === "Company" && <div>
                                    <div className="mb-3">
                                        <label className="form-label pt-3"><b> Business</b> <span><FaStarOfLife /> </span></label>
                                        <input type="text" className="form-control input form-select_3" placeholder="Enter you name" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label pt-3"><b>Business address</b> <span><FaStarOfLife /> </span></label>
                                        <input type="text" className="form-control input form-select_3" placeholder="Enter you Last name" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label className="form-label"><b>Monthly Turn Over </b> <span><FaStarOfLife /> </span></label>
                                        <input type="text" className="form-control input form-select_3" placeholder="monthly turn over" />
                                    </div>
                                </div>
                                }

                                <div className="mb-3 ">
                                    <label className="form-label pt-3"><b>Address Line 2</b></label>
                                    <input type="text" className="form-control input" placeholder="Enter address line 2" />
                                </div>

                                <div className="mb-3 ">
                                    <label className="form-label pt-3"><b>State</b></label>
                                    <select class="form-select py-2 form-select_3" aria-label="Default select example">
                                        <option selected> select your state</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="mb-3 ">
                                    <label className="form-label pt-3"><b>City</b></label>
                                    <select class="form-select py-2 form-select_3" aria-label="Default select example">
                                        <option selected> select your city</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label className="form-label pt-3"><b>Zip Code</b></label>
                                    <input type="text" className="form-control input" placeholder="Enter Zip Code" />
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 col-lg-12 pt-4'>
                                        <h5>Which services you want</h5>
                                    </div>
                                    <div className='col-lg-6 col-md-6 py-2'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Recharge
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 py-2'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Gift Card
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 py-2'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Bill Payment
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 py-2'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Hotel
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 py-2'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Bus
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 py-2'>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Flight
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 col-md-12 text-end pt-5'>
                                        <button className='btn px-3 bg_btn_clr border' onClick={openModal}>Sumbit</button>
                                    </div>
                                </div>


                            </div>

                            <div className='col-lg-6 col-md-6 p-5 pt-0 pb-0'>
                                <div className='border-0 pb-2 card_sho'>
                                    <div className='py-3'>
                                        <div className='card-title p-5 pt-2 pb-3'><b>Gift Card</b></div>
                                        <div className='card-text p-5 pt-0'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec egestas urna vitae  auctor consectetur. Suspendisse tempor est </div>
                                        <img src="images/gift-card.png" className='card-img-bottom' />
                                    </div>
                                </div>
                                <div className='border-0 pb-2 card_sho'>
                                    <div className='py-3'>
                                        <div className='card-title p-5 pb-3'><b>Recharge</b></div>
                                        <div className='card-text p-5 pt-0'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec egestas urna vitae  auctor consectetur. Suspendisse tempor est </div>
                                        <img src="images/recharge.png" className='card-img-bottom' />
                                    </div>
                                </div>
                                <div className='border-0 pb-2 card_sho'>
                                    <div className='py-3'>
                                        <div className='card-title p-5 pb-3'><b>Bill payments</b></div>
                                        <div className='card-text p-5 pt-0'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Donec egestas urna vitae  auctor consectetur. Suspendisse tempor est </div>
                                        <img src="images/billpayments.png" className='card-img-bottom' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-around p-5'>
                    <div className='col-md-4 py-5 px-2 '>
                        <div className=' bgrclr'>
                            <div className='row py-3 mx-1'>
                                <div className='col-4'>
                                    <img src="images/card_img1.png" className='pt-2' />
                                </div>
                                <div className='col-8'>
                                    <div className='text_countr'><h4>5.5k</h4></div>
                                    <div className='cardtext1'> Customer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4  py-5 px-2 '>
                        <div className='bgrclr'>
                            <div className='row py-3 mx-1'>
                                <div className='col-4 '>
                                    <img src="images/card_img2.png" className='pt-2' />
                                </div>
                                <div className='col-8'>
                                    <div className='text_countr'><h4>21.5k</h4></div>
                                    <div className='cardtext1'> Business Partner</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 py-5 px-2 '>
                        <div className='bgrclr'>
                            <div className='row py-3 mx-1'>
                                <div className='col-4'>
                                    <img src="images/card_img3.png" className='pt-2' />
                                </div>
                                <div className='col-8'>
                                    <div className='text_countr'><h4>5M</h4></div>
                                    <div className='cardtext1'> Total Revenue </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row py-3 mt-4'>
                    <div className='col-lg-12 text-center'>
                        <div className='py-5 pt-0'><b className='pb-2 partner-says'>Our Partner Says</b></div>
                    </div>
                    <div className='col-md-4'>
                        <div className='usertext'>
                            <p className='p-3'>  Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, ”
                            </p>
                            <div className='row bg-clr1 p-0 m-0 py-3'>
                                <div className='col-lg-2'>
                                    <img src="images/card-img4.png" className='bg_img_clr' />
                                </div>
                                <div className='col-lg-4 col-md-4'>
                                    <div className=''><b>Ram Singh</b></div>
                                    <div>Customer</div>
                                </div>
                                <div className='col-md-6 col-lg-6 text-end'>
                                    <div className='pt-2'>10 days ago</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className='usertext'>
                            <p className='p-3'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, ”
                            </p>
                            <div className='row bg-clr1 p-0 m-0 py-3'>
                                <div className='col-2'>
                                    <img src="images/card-img4.png" className='bg_img_clr' />
                                </div>
                                <div className='col-4'>
                                    <div className=''><b>Alina </b></div>
                                    <div>Partner</div>
                                </div>
                                <div className='col-6 text-end'>

                                    <div className='pt-2'>10 days ago</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-4'>
                        <div className='usertext'>
                            <p className='p-3'>  Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, ”
                            </p>
                            <div className='row bg-clr1 p-0 m-0 py-3'>
                                <div className='col-2'>
                                    <img src="images/card-img4.png" className='bg_img_clr' />
                                </div>
                                <div className='col-4'>
                                    <div className=''><b>Ram Singh</b></div>
                                    <div>Customer</div>
                                </div>
                                <div className='col-6 text-end'>

                                    <div className='pt-2'>10 days ago</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row'>
                    <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                        <h6></h6>
                    </div>
                    <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                        <a onClick={closeModal}><AiOutlineClose size={23} /></a>
                    </div>
                    <div className='col-md-12 col-lg-12 '>
                        <div className='text-center mx-auto p-3'>
                            <img src='icon _envelope.png'></img>
                        </div>
                        <h5 className='text-drck text-center pt-3'>We sent your code</h5>
                        <p className='text-center'>
                            Enter the confirmation code below
                        </p>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-3'>
                        <input class="form-control input " type="text" placeholder="Enter OTP" aria-label="default input example" />
                        <div className='d-flex justify-content-between pb-2 pt-1'>
                            <p className='text_time'>The Remaining:  01:25</p>
                            <a className='resend' href=''>Resend OTP </a>
                        </div>
                        <Link href='/Thankyou' className='btn bg_btn_clr border w-100' >Verify Code</Link>

                    </div>
                </div>
            </Modal>


        </div>
    )
}

export default page