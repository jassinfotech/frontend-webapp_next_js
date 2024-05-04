'use client'
import React, { useState } from 'react';
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import './transaction.css'
const page = () => {
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

    const [expandedRow, setExpandedRow] = useState(null);

    const handleRowClick = (index) => {
        if (expandedRow === index) {
            setExpandedRow(null);
        } else {
            setExpandedRow(index);
        }
    };
    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>

                <div className='container-fluid'>

                    <div className='row'>
                        <div className='col-lg-5 pt-5'>
                            <div className="search-box">
                                <div className="input-group search_b d-flex">
                                    <input type="text" id="search" className="form-control" placeholder="Search Keyword" />
                                    <span className="input-group-addon search_icon"><FaSearch /></span>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-5 col-lg-5 pt-3'>
                            <div className='row'>
                                <div className='col-lg-3'>

                                    <label className="form-label lable">From</label>
                                    <input type="date" className="form-control dete_piker" />

                                </div>
                                <div className='col-lg-3'>
                                    <label className="form-label lable">To</label>
                                    <input type="date" className="form-control dete_piker" />
                                </div>
                                <div className='col-lg-3 pt-4'>
                                    <div className="dropdown ">
                                        <button className="btn fliter_btn_2 category_btn_2 d-flex justify-content-between" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span>
                                                category</span> <span className='mx-2 text-end'>

                                                <FaSlidersH className='fliter_icon' /></span>
                                        </button>

                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                            <li><a className="dropdown-item active" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>


                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <label for="exampleInputEmail1" className="form-label lable">Sort By</label>
                                    <button className='btn btn_theme fliter_btn_2 mt-0'> default</button>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-2'>

                        </div>

                    </div>

                    <div className='row pt-4'>
                        <div className='col-lg-12 col-md-12'>
                            <ul class="nav nav-ticketlist" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Refund</button>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="payments-tab" data-bs-toggle="tab" data-bs-target="#payments" type="button" role="tab" aria-controls="payments" aria-selected="false">Recharge</button>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Bill Payments</button>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="card-tab" data-bs-toggle="tab" data-bs-target="#card" type="button" role="tab" aria-controls="card" aria-selected="false">Gift Card</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                    <div className='row'>
                                        <div className='col-lg-12 p-4'>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Description </th>
                                                        <th>Date</th>
                                                        <th>Transaction_ID</th>
                                                        <th>Status</th>
                                                        <th>Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {dummyData.map((data, index) => (
                                                        <React.Fragment key={index}>
                                                            <tr >
                                                                <td>
                                                                    <div className="d-flex">
                                                                        {data.Description}
                                                                        <br />
                                                                        {data.Card}
                                                                    </div>
                                                                </td>
                                                                <td className='w-500'>₹{data.Date}</td>
                                                                <td>{data.Transaction_ID}</td>
                                                                <td>{data.Status}</td>
                                                                <td onClick={() => handleRowClick(index)}>{data.Amount} <spam className="drop_butt"><RiArrowDropDownLine size={20} /></spam></td>
                                                            </tr>
                                                            {expandedRow === index && (
                                                                <tr>

                                                                    <th>Paid<br /> <small>Item</small></th>
                                                                    <th className='w-500'>Kotak Mahindra Bank ****6185 <br /> <small>Mobile Prepaid Recharge</small></th>
                                                                    <th>Order ID</th>
                                                                    <th>42554313441288</th>

                                                                </tr>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 p-2'>
                            <div className="clearfix">
                                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                <ul className="pagination">
                                    <li className="page-item disabled"><a href="#">Previous</a></li>
                                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                                    <li className="page-item"><a href="#" className="page-link">3</a></li>
                                    <li className="page-item active"><a href="#" className="page-link">4</a></li>
                                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                                    <li className="page-item"><a href="#" className="page-link">6</a></li>
                                    <li className="page-item"><a href="#" className="page-link">7</a></li>
                                    <li className="page-item"><a href="#" className="page-link">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default page