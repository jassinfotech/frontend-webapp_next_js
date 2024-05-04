'use client'
import React from 'react'
import Sidebarmain from '../component/Sidebarmain'
import { MdArrowBack } from "react-icons/md";
import Select from 'react-select';
import { AiOutlineArrowRight } from "react-icons/ai"
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css'

function page() {
   
    // Define the options with images and text
    const options = [
        { value: '1', label: 'Option 1', image: '../images/offerimage1.png' },
        { value: '2', label: 'Option 2', image: '../images/offerimage1.png' },
        { value: '3', label: 'Option 3', image: '../images/offerimage1.png' },
    ];

    // Custom Option component to render images and text
    const Option = ({ innerProps, label, data }) => (
        <div {...innerProps}>
            <img src={data.image} alt={label} style={{ width: '30px', marginRight: '10px' }} />
            {label}
        </div>
    );

    // Custom SingleValue component to render selected value with image
    const SingleValue = ({ innerProps, label, data }) => (
        <div {...innerProps}>
            <img src={data.image} alt={label} style={{ width: '30px', marginRight: '10px' }} />
            {label}
        </div>
    );

    // Custom styles for the select dropdown
    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '5px',
        }),
        option: (provided, state) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? '#e9ecef' : 'white',
            color: state.isSelected ? 'white' : 'black',
        }),
    };
    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 pt-2'>
                            <div className='ancor_text'><span><MdArrowBack /></span> Back</div>
                        </div>
                    </div>
                    <div className='row px-5 py-4'>
                        <div className='col-md-5 px-5 py-2 colm_shadow'>
                            <div className='recharg_text1 mb-4'>Recharge Your Prepaid Mobile</div>
                            <input type="email" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Mobile Number' />
                            <div>

                                <Select
                                    options={options}
                                    components={{ Option, SingleValue }}
                                    styles={customStyles}
                                />
                            </div>
                            <select class="form-select py-2 mb-3" aria-label="Default select example">
                                <option selected>Select Your Circle</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <input type="email" class="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Recharge Amount' />
                            <button type='button' className='py-2 w-100 pay_btn'>Pay now <AiOutlineArrowRight /></button>
                            <div className=' recharg_text1 py-3'>Previous Transaction</div>
                            <div className='row px-3  py-3 mb-3 border rounded'>
                                <div className='col-2 pt-1'>
                                    <span className='Jio_logo'>Jio</span>
                                </div>
                                <div className='col-7'>
                                    <div className='mob_no'>7880829986</div>
                                    <div className='date'>05/05/2022</div>
                                </div>
                                <div className='col-3'>
                                    <div className='recharg_rupes py-2 text-center'>₹ 159</div>
                                </div>
                            </div>
                            <div className='row px-3  py-3 mb-3 border rounded'>
                                <div className='col-2 pt-1'>
                                    <span className='Jio_logo'>Jio</span>
                                </div>
                                <div className='col-7'>
                                    <div className='mob_no'>7880829986</div>
                                    <div className='date'>05/05/2022</div>
                                </div>
                                <div className='col-3'>
                                    <div className='recharg_rupes py-2 text-center'>₹ 159</div>
                                </div>
                            </div>
                            <div className='row px-3  py-3 mb-3 border rounded'>
                                <div className='col-2 pt-1'>
                                    <span className='Jio_logo'>Jio</span>
                                </div>
                                <div className='col-7'>
                                    <div className='mob_no'>7880829986</div>
                                    <div className='date'>05/05/2022</div>
                                </div>
                                <div className='col-3'>
                                    <div className='recharg_rupes py-2 text-center'>₹ 159</div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='col-md-7 colm_shadow py-2'>
                            <div className='recharg_text1'><img src='../images/Star.png' className=' me-2 pb-3' />Offers</div>
                            <ol>
                                <li className='ofer_text mb-3'>Axis Neo Card offer 5% up to Rs.150 off on recharge/bill payment of min.
                                    Rs.299 using Axis Neo credit card before 30 April. Details
                                </li>
                                <li className='ofer_text mb-3'>Axis Neo Card offer 5% up to Rs.150 off on recharge/bill payment of min.
                                    Rs.299 using Axis Neo credit card before 30 April. Details
                                </li>
                                <li className='ofer_text mb-3'>Axis Neo Card offer 5% up to Rs.150 off on recharge/bill payment of min.
                                    Rs.299 using Axis Neo credit card before 30 April. Details
                                </li>
                            </ol>
                            <div className='text-end'>
                                <a href='#' className='ancor_text'>View more Offer  <AiOutlineArrowRight /></a>
                            </div>
                            <div className='px-5 pt-5'>
                                <img src='../images/offerimage1.png' className='w-100 px-5' alt='img'/>
                            </div>
                        </div> */}
                        <div className='col-md-7 colm_shadow py-2'>
                            <div className=''><span className='Jio_logo'>Jio</span>Jio: Uttar Pradesh</div>
                            <div className='pt-3'>
                                <ul class="nav nav-tabs  bg-white border-0" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class=" tabb_link_text" id="Recommended-tab" data-bs-toggle="tab" data-bs-target="#Recommended" role="tab" aria-controls="Recommended" aria-selected="true">Recommended</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class=" tabb_link_text" id="Special-tab" data-bs-toggle="tab" data-bs-target="#Special" role="tab" aria-controls="Special" aria-selected="false">Special Tariff</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class=" tabb_link_text px-3" id="Top-tab" data-bs-toggle="tab" data-bs-target="#Top" role="tab" aria-controls="Top" aria-selected="false">Top Up</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class=" tabb_link_text px-4" id="Prime-tab" data-bs-toggle="tab" data-bs-target="#Prime" role="tab" aria-controls="Prime" aria-selected="false">Prime</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class=" tabb_link_text px-4" id="ISD-tab" data-bs-toggle="tab" data-bs-target="#ISD" role="tab" aria-controls="ISD" aria-selected="false">ISD</a>
                                    </li>
                                </ul>
                                <div class="tab-content pt-3" id="myTabContent">
                                    <div class="tab-pane fade show active px-5 recharg_dl" id="Recommended" role="tabpanel" aria-labelledby="Recommended-tab">
                                        <div className='row py-3'>
                                            <div className='col-6'>
                                                <div>Validity : 24 Days</div>
                                            </div>
                                            <div className='col-6 text-end'>
                                                <span className='recharg_rupes py-2  text-center px-4 me-5'>₹ 159</span>
                                                <a className='selact_btn' href='#'>Select</a>
                                            </div>
                                            <div className='col-12 py-3'>
                                                <p>Enjoy Unlimited Local, STD & Roaming calls Local STD & Roaming calls on any network 1GB data & 300 СМС|Free Hellotunes|Wynk Music Free</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="Special" role="tabpanel" aria-labelledby="Special-tab">.Special Tariff</div>
                                    <div class="tab-pane fade" id="Top" role="tabpanel" aria-labelledby="Top-tab">.Top Up</div>
                                    <div class="tab-pane fade" id="Prime" role="tabpanel" aria-labelledby="Prime-tab">.Prime</div>
                                    <div class="tab-pane fade" id="ISD" role="tabpanel" aria-labelledby="ISD-tab">ISD</div>
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