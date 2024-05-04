'use client'
import React, { useState } from 'react'
import { MdArrowBack } from "react-icons/md";
import Select from 'react-select';
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaSearch } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
import SearchDropdown from './SearchDropdowns';
// Custom Option component with icons


const OptionWithIcon = ({ innerProps, label, data }) => (
    <div {...innerProps}>
        <img
            src={data.icon}
            alt={label}
            style={{ width: '24px', marginRight: '8px' }}
        />
        {label}
    </div>
);
const options = [
    { value: 'chocolate', label: 'Chocolate', icon: "jio.png" },
    { value: 'strawberry', label: 'Strawberry', icon: "jio.png" },
    { value: 'vanilla', label: 'Vanilla', icon: "jio.png" },
];
function Recharges(props) {

    const [isFilterOpen, setIsFilterOpen] = useState(true); // Set to true to show the dropdown by default
    const [selectedOption, setSelectedOption] = useState(null);
    const { rechargtype } = props
    console.log("rechargtype", rechargtype)
    const [selectedValue, setSelectedValue] = useState('1');
    const dynamicOptions = [
        { value: '1', label: 'UP EAST 1', images: 'jio.png' },
        { value: '2', label: 'UP EAST 2', images: 'jio.png' },
        { value: '3', label: 'UP EAST 3', images: 'jio.png' },
    ]
    // Event handler for when the dropdown value changes
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };
    return (
        <>
            <div className='row px-5 py-4'>
                <div className='col-md-5 px-5 py-2 colm_shadow'>
                    {rechargtype === 'FASTag' && <>
                        <div>
                            <div className='recharg_text1 mb-4'>Recharge Your FASTag </div>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <input type="text" class="form-control" placeholder='FB453251124' />
                                </div>
                                <div className='col-lg-12 text-end mb-3'>
                                    <small> How to Find Fastage User?</small>
                                </div>
                            </div>
                            <div>
                                <select className="form-select py-2 mb-3" aria-label="Default select example" value={selectedValue} onChange={handleSelectChange}>
                                    <option value="">Select Your Circle</option>
                                    {dynamicOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                                <Select
                                    value={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                    components={{ Option: OptionWithIcon }}
                                />
                            </div>
                            <div className='col-lg-12'>
                                <input type="text" class="form-control" placeholder='enter amount' />
                            </div>

                            {/* <Link href='/Getway' type='button' className='py-2 w-100 pay_btn text-center'>Pay now <AiOutlineArrowRight /></Link> */}


                        </div></>}


                    {rechargtype === 'mobile' && <>
                        <div>
                            <div className='recharg_text1 mb-4'>Recharge Your Prepaid Mobile </div>
                            <input type="text" class="form-control mb-3" placeholder='Enter Your Mobile Number' />
                            <div className='m-2'>
                                <SearchDropdown />
                            </div>
                            <div >
                                <select className="form-select py-2 mb-3" aria-label="Default select example" value={selectedValue} onChange={handleSelectChange}>
                                    <option value="Select Metro Card">UP EAST</option>
                                    {dynamicOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <input type="text" class="form-control mb-3" placeholder='Enter Recharge Amount' />
                            <Link href='/Getway' type='button' className='py-2 w-100 pay_btn my-4 text-center'>Pay now <AiOutlineArrowRight /></Link>
                            <div className=' recharg_text1 py-3'>Previous Transaction</div>
                            <div className='row px-3  py-3 mb-3 border rounded'>
                                <div className='col-2'>
                                    <div className='image_natwork'> <img src="jio.png"></img></div>
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
                                <div className='col-2'>
                                    <div className='image_natwork'> <img src="jio.png"></img></div>
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
                                <div className='col-2'>
                                    <div className='image_natwork'> <img src="jio.png"></img></div>
                                </div>
                                <div className='col-7'>
                                    <div className='mob_no'>7880829986</div>
                                    <div className='date'>05/05/2022</div>
                                </div>
                                <div className='col-3'>
                                    <div className='recharg_rupes py-2 text-center'>₹ 159</div>
                                </div>
                            </div>
                        </div></>}


                    {rechargtype === 'dth' && <>
                        <div>
                            <div className='recharg_text1 mb-4'>Select operator to proceed </div>
                            <div className="search-box">
                                <div className='m-2'>
                                    <label>operator</label>
                                    <SearchDropdown />
                                </div>
                            </div>
                            <div className='col-lg-12 col-md-12 py-3'>
                                <lable className="mb-2">Subscriber Id</lable>
                                <input type="text" class="form-control" placeholder='Subscriber Id' />
                                <small>Subscriber Id can be found by sending an СМС «ID» to 966555 from your registered mobile number</small>
                            </div>
                            <label className="mb-2">Amount</label>
                            <input type="email" class="form-control my-2" placeholder='Enter Recharge Amount' />
                            <Link href='/Getway' type='button' className='py-2 w-100 pay_btn text-center mt-2'>Pay now <AiOutlineArrowRight /></Link>
                        </div>
                    </>}


                    {rechargtype === 'MetroCard' && <>
                        <div>
                            <div className='recharg_text1 mb-4'>Recharge Your Metro Card </div>
                            <div className='m-2'>
                                <SearchDropdown />
                            </div>

                            <div>
                                <input type="text" class="form-control mb-3 ms-1 met_card" placeholder='0000563809876543' />
                            </div>

                            <input type="text" class="form-control mb-3 ms-1 met_card " placeholder='1000' />
                            <Link href='/Getway' type='button' className='py-2 my-4 w-100 pay_btn text-center'>Pay now <AiOutlineArrowRight /></Link>
                        </div>

                    </>}

                </div>

                {rechargtype === 'mobile' ? <>   <div className='col-md-7 colm_shadow py-2'>
                    <div className='image_with_text'>
                        <div className='image_natwork'> <img src="jio.png"></img></div>
                        <p>Jio: Uttar Pradesh</p>
                    </div>
                    <div className='pt-3'>
                        <ul class="nav nav-tabs rechrge_app" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Recommended</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Special Tariff</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Top Up</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="prime-tab" data-bs-toggle="tab" data-bs-target="#prime" type="button" role="tab" aria-controls="prime" aria-selected="false">Prime</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="pack-tab" data-bs-toggle="tab" data-bs-target="#pack" type="button" role="tab" aria-controls="pack" aria-selected="false">ISD Pack</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active py-3" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className='slect_rechges'>
                                    <div className='row my-1'>
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


                                    <div className='row my-1'>
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


                                    <div className='row my-1'>
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
                                    <div className='row my-1'>
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
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                            <div class="tab-pane fade" id="prime" role="tabpanel" aria-labelledby="prime-tab">...</div>
                            <div class="tab-pane fade" id="pack" role="tabpanel" aria-labelledby="pack-tab">...</div>
                        </div>

                    </div>
                </div></> : <>

                    <div className='col-md-7 colm_shadow py-2'>
                        <div className='recharg_text1'>
                            <img src='../images/Star.png' className=' me-2 pb-3' />Offers</div>
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
                        <div className='pt-5'>
                            {rechargtype === 'MetroCard' && <img src='metrocard.png' className='w-100 ' alt='img' />}
                        </div>
                        <div className='px-5 pt-5'>
                            <img src='../images/offerimage1.png' className='w-100 px-5' alt='img' />
                        </div>
                    </div>
                </>
                }
            </div>




        </>
    )
}

export default Recharges