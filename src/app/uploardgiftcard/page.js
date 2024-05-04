'use client'
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import '../scss/style.scss';
import Modal from 'react-modal';
import { FaSearch, FaSlidersH, FaEllipsisV, FaWallet } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FiPlus, FiEye, FiEdit } from "react-icons/fi";
import Link from 'next/link';
function page() {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [value, setValue] = useState(false);
    const toggleFilter = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleClick = () => {
        setValue(!value);
    };
    const [modalIsOpenbals, setIsOpenbals] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsUplordbal, setImodalIsUplordbal] = useState(false);
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
    const dummyData = [
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            cardname: 'Michael',
            cardNumber: '9780080903',
            price: 1000,
            expiryDate: '01/03/2023 11:40 PM',
            sellDate: '01/03/2023 11:40 PM',
            UserID: 12345678,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },


    ];


    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid-fluid p-5'>
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
                        <div className='col-lg-2 '>

                        </div>
                        <div className='col-lg-12 col-md-12'>
                            <div class="filter mb-2" id="filter-div" style={{ display: isFilterOpen ? "block" : "none" }}>
                                <div class="row">

                                    <div className='col-lg-9'>
                                        <div className='row'>
                                            <div className="col-lg-3 col-md-3">
                                                <label class="form-label">Card Number</label>
                                                <input type="text" className="form-control " placeholder="Enter card number" />
                                            </div>
                                            <div class="col">
                                                <label class="form-label">Created From</label>
                                                <input type="text" className="form-control " placeholder="10/04/2023" />
                                            </div>
                                            <div class="col">
                                                <label class="form-label">Created To</label>
                                                <input type="text" className="form-control " placeholder="10/05/2023" />
                                            </div>
                                            <div class="col">
                                                <label class="form-label">Sold From</label>
                                                <input type="text" className="form-control " placeholder="10/04/2023" />
                                            </div>
                                            <div class="col">
                                                <label class="form-label">Sold To</label>
                                                <input type="text" className="form-control" placeholder="10/04/2023" />

                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-3'>
                                        <div className='row'>
                                            <div className='col-lg-7 col-md-7'>
                                                <label  class="form-label">Sell status</label>
                                                <select class="form-select inputs" for='select_card' aria-label="Default select example">
                                                    <option selected>Select Card</option>
                                                    <option value="1">Sold </option>
                                                    <option value="2">Unsold</option>
                                                </select>
                                            </div>
                                            <div className='col-lg-5 col-md-5 pt-4'>
                                            <a className='btn search_btn mt-2'> Search</a>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-7 col-md-7 py-3'>
                            <h6>Showing 20 Out of 100</h6>
                        </div>
                        <div className='col-lg-5 col-md-5 btn_add pt-4'>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 p-2'>
                            <table class="table">
                                <thead>
                                    <tr>


                                        <th>Card name</th>
                                        <th>Card Number</th>
                                        <th>Price</th>
                                        <th>Expiry Date</th>
                                        <th>Sell date</th>
                                        <th>User ID</th>
                                        <th>Created at</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyData.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.cardname}</td>
                                            <td>{data.cardNumber} </td>
                                            <td>{data.price} </td>
                                            <td>{data.expiryDate}</td>
                                            <td>{data.sellDate}</td>
                                            <td>{data.UserID}</td>
                                            <td>{data.createdAtt}</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <FaEllipsisV />
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                            <div class="clearfix">
                                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                                <ul class="pagination">
                                    <li class="page-item disabled"><a href="#">Previous</a></li>
                                    <li class="page-item"><a href="#" class="page-link">1</a></li>
                                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                                    <li class="page-item"><a href="#" class="page-link">3</a></li>
                                    <li class="page-item active"><a href="#" class="page-link">4</a></li>
                                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                                    <li class="page-item"><a href="#" class="page-link">6</a></li>
                                    <li class="page-item"><a href="#" class="page-link">7</a></li>
                                    <li class="page-item"><a href="#" class="page-link">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row'>
                    <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                        <div>Information</div>
                    </div>
                    <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                        <a onClick={closeModal}><AiOutlineClose size={23} /></a>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-2 pb-5'>
                        <h5 className='text-drck text-center pt-3 px-5'>Are you sure  you Want to Save Changes?</h5>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-3 pb-3 text-center'>
                        <button className='btn btn-cancel me-2'>Cancel</button>
                        <button className='btn btn-ok ms-2 '>Ok</button>

                    </div>
                </div>

            </Modal>

            <Modal isOpen={modalIsOpenbals} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row'>
                    <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                        <div className='poipuptext'>Add Balance</div>
                    </div>
                    <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                        <a onClick={() => setIsOpenbals(false)}><AiOutlineClose size={23} /></a>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-2 pb-5'>
                        <h5 className='text-drck text-center pb-4 pt-3 px-5'>Add Balance</h5>
                        <input type="number" class="form-control" placeholder='Enter Amount' />
                    </div>
                    <div className='col-md-12 col-lg-12 pt-3 pb-3 text-end'>
                        <button className='btn btn-cancel me-2' onClick={() => setIsOpenbals(false)}>Cancel</button>
                        <button className='btn btn-ok ms-2 ' onClick={() => setImodalIsUplordbal(true)}>Ok</button>

                    </div>
                </div>
            </Modal>
            <Modal isOpen={modalIsUplordbal} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row'>
                    <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                        <div className='poipuptext'>Information</div>
                    </div>
                    <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                        <a onClick={() => setImodalIsUplordbal(false)}><AiOutlineClose size={23} /></a>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-2 pb-5 px-3'>
                        <h5 className='top_popup_text pb-4 pt-3 '>Add Or Update Employee Bulk Balance</h5>
                        <div className='uploadtext ps-5'>Download exel File </div>
                        <div className="card shadow-none w-75 mx-auto">
                            <div className="card-body text-center p-5">
                                <a id="uploadButton" className='fileuplord'> <img src='../images/Downarrow.png' alt='image' /></a><br />
                            </div>
                        </div>
                        <div className='uploadtext pt-3 ps-5'>Upload File </div>
                        <div className="card shadow-none w-75 mx-auto">
                            <div className="card-body text-center p-5">
                                <a id="uploadButton" className='fileuplord'> <img src='../images/Uploadimage.png' alt='image' /></a><br />
                            </div>
                        </div>
                        <div className='file_text ps-3 pt-3 pb-4 '>If you want to know about more how to add balance  <a className='text_clr text-decoration-none' href='#'>www.youtube.com</a></div>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-3 pb-3 text-end'>
                        <button className='btn btn-cancel me-2' onClick={() => setImodalIsUplordbal(false)}>Cancel</button>
                        <button className='btn btn-ok ms-2 ' onClick={() => setImodalIsUplordbal(false)}>Ok</button>

                    </div>
                </div>
            </Modal>


        </>
    )
}

export default page