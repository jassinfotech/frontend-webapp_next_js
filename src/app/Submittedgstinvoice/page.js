'use client'
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineUpload } from "react-icons/ai";
import { FaSearch, FaSlidersH, FaEllipsisV } from "react-icons/fa";
import '../scss/style.scss';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import Link from 'next/link';
function page() {
    const [modalIsOpen, setIsOpen] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };
   
    const handleFileChange = (event) => {
        console.log(event.target.files[0]);
    }
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
            width: '500px',
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',

        },
    };

    const dummyData = [
        {
            Description: 'Recharge Jio Mobile',
            Card: 'Credit Card',
            Amount: '1000 INR',
            Transaction_ID: '42554313441288 ',
            Status: 'Refunded',
            Date: '10/02/2023',


        },
        {
            Description: 'Yatra FHBH Non Cum Multi E-Gift Card',
            Card: 'Credit Card',
            Amount: '1000 INR',
            Transaction_ID: '42554313441288 ',
            Status: 'Refunded',
            Date: '10/02/2023',


        },
        {
            Description: 'Yatra FHBH Non Cum Multi E-Gift Card',
            Card: 'Credit Card',
            Amount: '1000 INR',
            Transaction_ID: '42554313441288 ',
            Status: 'Refunded',
            Date: '10/02/2023',


        },
        {
            Description: 'Fastag Recharge',
            Card: 'Credit Card',
            Amount: '1000 INR',
            Transaction_ID: '42554313441288 ',
            Status: 'Refunded',
            Date: '10/02/2023',


        },
        {
            Description: 'Electricity Bill',
            Card: 'Credit Card',
            Amount: '1000 INR',
            Transaction_ID: '42554313441288 ',
            Status: 'Refunded',
            Date: '10/02/2023',


        },
        {
            Description: 'Yatra FHBH Non Cum Multi E-Gift Card',
            Card: 'Credit Card',
            Amount: '1000 INR',
            Transaction_ID: '42554313441288 ',
            Status: 'Refunded',
            Date: '10/02/2023',


        },
        {
            Description: 'Airtel Broadband',
            Card: 'Credit Card',
            Amount: '1000 INR',
            Transaction_ID: '42554313441288 ',
            Status: 'Refunded',
            Date: '10/02/2023',


        },
        {
            Description: 'Yatra FHBH Non Cum Multi E-Gift Card',
            Card: 'Credit Card',
            Amount: '1000 INR',
            Transaction_ID: '42554313441288 ',
            Status: 'Refunded',
            Date: '10/02/2023',
        },
    ];
    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid p-4'>
                    <div className='row'>
                        <div className='col-lg-10 p-2'>
                            <div className="search-box">
                                <div className="input-group input-groups d-flex">
                                    <input type="text" id="search" className="form-control" placeholder="Search Keyword" />
                                    <span className="input-group-addon search_icon"><FaSearch /></span>
                                </div>
                                <button className='fliter_btn' onClick={toggleFilter}> <FaSlidersH className='fliter_icon' /> Filter</button>
                            </div>
                        </div>
                        <div className='col-lg-2 p-2'>
                            <div className='uplord_btn py-2'>
                                <input type="file" id="fileInput" style={{ display: 'none' }} />
                                <a id="uploadButton" onClick={handleButtonClick}> <AiOutlineUpload className='uploadButton_icon' size={25} /> </a>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12'>
                            <div class="filter mb-2" id="filter-div" style={{ display: isFilterOpen ? "block" : "none" }}>
                                <div class="row">
                                    <div class="col-lg-10">
                                        <div class="row">
                                            <div class="col-lg-2">
                                                <h4>Status</h4>
                                                <div className=''>
                                                    <div class="form-check ">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Active
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label" for="flexCheckDefault">
                                                            Inactive
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <h4>Amount range</h4>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-md-6'>
                                                        <label class="form-label">Start Date</label>
                                                        <input type="date" className="form-control" placeholder="Minimum" />
                                                    </div>
                                                    <div className='col-lg-6 col-md-6'>
                                                        <label class="form-label">End Date</label>
                                                        <input type="date" className="form-control" placeholder="Minimum" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <h4>Invoice no.</h4>
                                                <label class="form-label">End Date</label>
                                                <input type="date" className="form-control" placeholder="Minimum" />

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 p-4">
                                        <div className='pt-4'>
                                            <a href='#' class="btn btn-create py-2">Search</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 p-4'>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Ticket ID </th>
                                        <th>Ticket Tittle</th>
                                        <th>Status</th>
                                        <th>Created at</th>
                                        <th>Close date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyData.map((data, index) => (
                                        <tr>
                                            <td>
                                                <div className="d-flex">
                                                    {data.Description}
                                                    <br />
                                                    {data.Card}
                                                </div>
                                            </td>
                                            <td className='w-500'>₹{data.Amount}</td>
                                            <td>{data.Transaction_ID}</td>
                                            <td>{data.Status}</td>
                                            <td>{data.Date}</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <FaEllipsisV />
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">View</a></li>
                                                        <li><a class="dropdown-item" href="#">Download</a></li>
                                                    </ul>
                                                </div>


                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row p-4'>
                    <div className='col-md-6'>
                        <span>Invoice</span>
                    </div>
                    <div className='col-md-6 text-end'>
                        <span className='p-2 rounded text-end' onClick={closeModal}><RxCross1 /></span>
                    </div>
                </div>
                <div className='row p-4'>
                    <div className='col-md-12 col-lg-12'>

                        <input type="text" className="form-control" placeholder='Enter invoice number' />

                        <label className="form-label fromtext1 py-1">Upload invoice</label>
                        <div className='Upload_invoice'>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                        <a id="uploadButton" onClick={handleFileChange}> <AiOutlineUpload className='uploadButton_icon' size={25} /> </a>
                        </div>

                    </div>


                </div>
                <div className='row p-4'>
                   <div className='col-md-12 text-end'>
                        <button className='cancel_btn py-2 me-2'>Cancel</button>
                        <button className='okbtn py-2'>Create</button>
                    </div>
                </div>

            </Modal>

        </>
    )
}

export default page