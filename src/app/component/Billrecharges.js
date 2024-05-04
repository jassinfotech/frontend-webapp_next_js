'use client'
import React, { useState } from 'react'
import { MdArrowBack } from "react-icons/md";
import Select from 'react-select';
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaSearch } from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
import SearchDropdown from './SearchDropdowns';
import DropdownComponent from './DropdownComponent';
// Custom Option component with icons
import Modal from 'react-modal';
import SearchDropdownsbill from './SearchDropdownsbill';
import SearchDropdownsbank from './SearchDropdownsbank';

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

function Billrecharges(props) {
    const [selectedOption, setSelectedOption] = useState(null);
    const { rechargtype } = props
    console.log("rechargtype", rechargtype)
    const [selectedValue, setSelectedValue] = useState('1');
    const dynamicOptions = [
        { value: '1', label: 'One', images: 'jio.png' },
        { value: '2', label: 'Two', images: 'jio.png' },
        { value: '3', label: 'Three', images: 'jio.png' },
    ]
    // Event handler for when the dropdown value changes
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleOptionChange = (selectedOption) => {
        console.log('Selected option:', selectedOption);
    };


    const [isFilterOpen, setIsFilterOpen] = useState(true); // Set to true to show the dropdown by default


    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };
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
            <div className='row px-5 py-4'>
                <div className='col-md-5 py-2 colm_shadow'>
                    {rechargtype === 'Postpaid' && <div>
                        <div className='recharg_text1 mb-4'>Pay Your Postpaid Bill</div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <input type="text" class="form-control" placeholder='7880829986' />
                            </div>
                        </div>
                        <div className='my-4'>
                            <SearchDropdown />
                        </div>
                        <div className='py-4 pt-0'>
                            <input class="form-check-input custom_check" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Remind me when my bill is due
                            </label>
                        </div>
                        <a type='button' className='py-3 w-100 pay_btn text-center' onClick={openModal}>Fetch bill <AiOutlineArrowRight /></a>
                    </div>}


                    {rechargtype === 'broadband' && <div>
                        <div className='recharg_text1 mb-4'>Landline/Broadband Bill</div>
                        <div className='row'>
                        </div>
                        <div className='my-4'>
                            <SearchDropdown />
                        </div>
                        <div className='my-4'>
                            <select class="form-select form-select-lg" aria-label=".form-select-lg example">

                                <option selected>Enter landline Number with STD Code</option>
                                <option value="01146857821">01146857821</option>
                                <option value="01146857821">01146857821</option>
                                <option value="01146857821">01146857821</option>
                                <option value="01146857821">01146857821</option>


                            </select>
                        </div>

                        <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='5000' />
                        </div>


                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-3'>Fetch bill <AiOutlineArrowRight /></Link>
                    </div>}


                    {rechargtype === 'Credit' && <div>
                        <div className='recharg_text1 mb-4'>Credit card bill</div>
                        <div className='row'>
                        </div>

                        <div className='col-lg-12 my-4'>
                            <input type="text" class="form-control" placeholder='enter amount' />
                        </div>

                        <div className='my-4'>
                            <SearchDropdownsbank />
                        </div>

                        <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='5000' />
                        </div>
                        <a type='button' className='py-3 w-100 pay_btn text-center my-3' onClick={openModal}>Fetch bill <AiOutlineArrowRight /></a>
                    </div>}


                    {rechargtype === 'LPG' && <div>
                        <div className='recharg_text1 mb-4'>LPG Cylinder Payment</div>
                        <div className='row'>
                        </div>
                        <div className='my-4'>
                            <SearchDropdown />
                        </div>
                        <div className='col-lg-12 '>
                            <input type="text" class="form-control" placeholder='7880829986' />
                        </div>
                        <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder=' 1123' />
                        </div>
                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-5'>Fetch bill <AiOutlineArrowRight /></Link>
                    </div>}


                    {rechargtype === 'Water' && <div>
                        <div className='recharg_text1 mb-4'>Water Bill</div>
                        <div className='row'>
                        <div className=''>
                            <SearchDropdown />
                        </div>
                            <div className='col-lg-12 my-4' >
                                <input type="text" class="form-control" placeholder='Enter your Customer ID' />
                            </div>
                        </div>
                       
                        {/* <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='enter amount' />
                        </div>  */}


                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-4'>Fetch bill <AiOutlineArrowRight /></Link>

                        {/* <div className='col-lg-12 my-4'>
                            <input type="text" class="form-control" placeholder='enter amount' />
                        </div> */}
                    </div>}

                    {rechargtype === 'Education' && <div>
                        <div className='recharg_text1 mb-4'>Education Fee</div>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12 mb-3'>
                                <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                    <option selected>Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                </select>
                            </div>

                            <div className='col-lg-12 col-md-12 my-4'>
                                <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                    <option selected> Select City</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                </select>
                            </div>

                            <div className='col-lg-12 col-md-12 my-4'>
                                <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                                    <option selected> Select institution</option>
                                    <option value="01146857821">01146857821</option>
                                    <option value="01146857821">01146857821</option>
                                    <option value="01146857821">01146857821</option>
                                    <option value="01146857821">01146857821</option>
                                </select>
                            </div>
                        </div>



                        <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='01146857821' />
                        </div>
                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-4'>Fetch bill <AiOutlineArrowRight /></Link>


                    </div>}

                    {rechargtype === 'SUBSCRIPTION' && <div>
                        <div className='recharg_text1 mb-4'>SUBSCRIPTION/OTT</div>
                        <div className='row'>

                        </div>
                        <div className='my-4'>
                            <SearchDropdown />
                        </div>
                        <div className='col-lg-12 my-4'>
                            <input type="text" class="form-control" placeholder='Enter your phone number' />
                        </div>

                        <div className='col-lg-12 my-4'>
                            <input type="text" class="form-control" placeholder='Enter amount' />
                        </div>
                        <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='1234' />
                        </div>
                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-4'>Fetch bill <AiOutlineArrowRight /></Link>


                    </div>}



                    {rechargtype === 'Insurance' && <div>
                        <div className='recharg_text1 mb-4'>Insurance</div>
                        <div className='row'>

                        
                        <div className='my-4'>
                            <SearchDropdown />
                        </div>
                        <div className='col-lg-12 text-end mt-3'>
                            <small> Find policy number</small>
                        </div>
                        <div className='col-lg-12 mb-4'>
                            <input type="text" class="form-control" placeholder='Enter your policy number' />
                        </div>
                        <div className='col-lg-12 mb-4'>
                            <input type="date" class="form-control" />
                        </div>
                        <div className='col-lg-12 mb-4'>
                            <input type="text" class="form-control" placeholder='Enter customer mobile number' />
                        </div>
                        <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='12345' />
                        </div>  
                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-4'>Fetch bill <AiOutlineArrowRight /></Link>
                        </div>
                    </div>}

                    {rechargtype === 'municipal' && <div>
                        <div className='recharg_text1 mb-4'>Municipal Tax</div>
                        <div className='row'>

                        </div>
                        <div className='my-4'>
                            <SearchDropdown />
                        </div>
                        <div className='col-lg-12 text-end mt-3'>
                            <small> Find computer code</small>
                        </div>
                        <div className='col-lg-12 mb-4'>
                            <input type="text" class="form-control" placeholder='Enter your computer code' />
                        </div>

                        <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='12345' />
                        </div>  
                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-4'>Fetch bill <AiOutlineArrowRight /></Link>
                    </div>}

                    {rechargtype === 'piped' && <div>
                        <div className='recharg_text1 mb-4'>Piped Gas</div>
                        <div className='row'>

                        </div>
                        <div className='my-4'>
                            <SearchDropdown />
                        </div>

                        <div className='col-lg-12 mb-4'>
                            <input type="text" class="form-control" placeholder='Enter your Customer Number' />
                        </div>

                        <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='Enter amount' />
                        </div>  
                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-4'>Fetch bill <AiOutlineArrowRight /></Link>
                    </div>
                    }



                    {rechargtype === 'loan' && <div>
                        <div className='recharg_text1 mb-4'>Loan Repayment bill</div>
                        <div className='row'>

                        </div>
                        <div className='my-4'>
                            <SearchDropdown />
                        </div>
                        <div className='col-lg-12 text-end mt-3'>
                            <small> Find Account Number</small>
                        </div>
                        <div className='col-lg-12 mb-4'>
                            <input type="text" class="form-control" placeholder='Enter Loan Account number' />
                        </div>

                        <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='Enter amount' />
                        </div>  
                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-4'>Fetch bill <AiOutlineArrowRight /></Link>


                    </div>}

                    {rechargtype === 'cable' && <div>
                        <div className='recharg_text1 mb-4'>Cable TV</div>
                        <div className='row'>

                        </div>
                        <div className='my-4'>
                            <SearchDropdown />
                        </div>
                        <div className='col-lg-12 text-end mt-3'>
                            <small>Find customer Code</small>
                        </div>
                        <div className='col-lg-12 mb-4'>
                            <input type="text" class="form-control" placeholder='Select Operator to Proceed' />
                        </div>
                         <div className='col-lg-12 my-4'>
                            <label>Bill</label>
                            <input type="text" class="form-control" placeholder='enter amount' />
                        </div>
                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center my-4'>Fetch bill <AiOutlineArrowRight /></Link>


                    </div>}


                    {rechargtype === 'electricity' && <div>
                        <div className='recharg_text1 mb-4'>Pay Your Electricity Bill</div>
                        <div className='row'>
                            <div className='my-2'>
                                <select class="form-select form-select-lg" aria-label=".form-select-lg example">

                                    <option selected>Select State</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>

                                </select>
                            </div>
                            <div className='my-2'>
                                <SearchDropdownsbill />

                            </div>
                        </div>
                        <div className='col-lg-12 text-end position-relative'>
                            <button type='button' className='text-end mb-2 butt0' style={{ color: "#28A5C1" }} onClick={toggleFilter} > View Account Number sample</button>
                            <div className='accoutsample' style={{ display: isFilterOpen ? "block" : "none" }} >
                                <h6>See here Account Number</h6>
                                <p>Refer bill document for Consumer no. The consumer no is 11 or 12 digits long.</p>
                                <div className='bill_sample_img'>
                                    <img src='billsample.png'></img>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-12 mb-3'>
                            <input type="text" class="form-control" placeholder='Enter Account Number' />
                        </div>
                        <Link href='/Getway' type='button' className='py-3 w-100 pay_btn text-center'>Fetch bill <AiOutlineArrowRight /></Link>
                    </div>}
                </div>

                <div className='col-md-7 colm_shadow py-2'>
                    <div className='col-md-12 colm_shadow py-2'>
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
                            <a href='#' className='ancor_text'>View more Offer <AiOutlineArrowRight /></a>
                        </div>
                        <div className='pt-5'>
                            {rechargtype === 'MetroCard' && <img src='metrocard.png' className='w-100' alt='img' />}
                        </div>
                        <div className='px-5'>
                            <img src='paybil.png' className='w-90 ms-2   px-5' alt='img' />
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row'>
                    <div className='col-md-12 text-center rounded'>
                        <div className='py-3'>
                            <h5>Fetching Your Details</h5>
                            <p> Customer Id: <b>7880829986</b></p>
                        </div>
                        <div class="spinner-border prosesing_clr" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div className='p-4'>
                            <button className='btn cancellord' onClick={closeModal}> Cancel</button>

                        </div>
                    </div>
                </div>

            </Modal>
        </>
    )
}
export default Billrecharges