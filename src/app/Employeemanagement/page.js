'use client'
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import '../scss/style.scss';
import Modal from 'react-modal';
import { FaSearch, FaSlidersH, FaEllipsisV, FaWallet } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FiPlus, FiEye, FiEdit } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';
import './page.css';
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
            customer: {
                name: 'Michael',
                phoneNumber: '9780080903',
                avatar: 'https://www.tutorialrepublic.com/examples/images/avatar/1.jpg',
            },
            balance: {
                regular: '1000.00',
                dmt: '4500.10',
            },
            kycLevel: 1,
            lastActivity: '01/03/2023 11:40 PM',
            amount: 1000,
            createdAtt: '01/03/2023 11:40 PM',
            status: 'Active',
        },
        {
            customer: {
                name: 'John',
                phoneNumber: '9876543210',
                avatar: 'https://www.tutorialrepublic.com/examples/images/avatar/2.jpg',
            },
            balance: {
                regular: '2000.00',
                dmt: '3000.50',
            },
            kycLevel: 2,
            lastActivity: '01/04/2023 09:15 AM',
            amount: 500,
            createdAtt: '01/04/2023 09:15 AM',
            status: 'Inactive',
        },
        {
            customer: {
                name: 'John',
                phoneNumber: '9876543210',
                avatar: 'https://www.tutorialrepublic.com/examples/images/avatar/2.jpg',
            },
            balance: {
                regular: '2000.00',
                dmt: '3000.50',
            },
            kycLevel: 2,
            lastActivity: '01/04/2023 09:15 AM',
            amount: 500,
            createdAtt: '01/04/2023 09:15 AM',
            status: 'Inactive',
        },
        {
            customer: {
                name: 'John',
                phoneNumber: '9876543210',
                avatar: 'https://www.tutorialrepublic.com/examples/images/avatar/2.jpg',
            },
            balance: {
                regular: '2000.00',
                dmt: '3000.50',
            },
            kycLevel: 2,
            lastActivity: '01/04/2023 09:15 AM',
            amount: 500,
            createdAtt: '01/04/2023 09:15 AM',
            status: 'Inactive',
        },
        {
            customer: {
                name: 'John',
                phoneNumber: '9876543210',
                avatar: 'https://www.tutorialrepublic.com/examples/images/avatar/2.jpg',
            },
            balance: {
                regular: '2000.00',
                dmt: '3000.50',
            },
            kycLevel: 2,
            lastActivity: '01/04/2023 09:15 AM',
            amount: 500,
            createdAtt: '01/04/2023 09:15 AM',
            status: 'Inactive',
        },
        {
            customer: {
                name: 'John',
                phoneNumber: '9876543210',
                avatar: 'https://www.tutorialrepublic.com/examples/images/avatar/2.jpg',
            },
            balance: {
                regular: '2000.00',
                dmt: '3000.50',
            },
            kycLevel: 2,
            lastActivity: '01/04/2023 09:15 AM',
            amount: 500,
            createdAtt: '01/04/2023 09:15 AM',
            status: 'Inactive',
        },
        {
            customer: {
                name: 'John',
                phoneNumber: '9876543210',
                avatar: 'https://www.tutorialrepublic.com/examples/images/avatar/2.jpg',
            },
            balance: {
                regular: '2000.00',
                dmt: '3000.50',
            },
            kycLevel: 2,
            lastActivity: '01/04/2023 09:15 AM',
            amount: 500,
            createdAtt: '01/04/2023 09:15 AM',
            status: 'Inactive',
        }

    ];


    return (
        <>
            <Sidebarmain />
            <section id="main" className='main pt-55_das'>
                <div className='container-fluid p-5'>
                    <div className='row'>
                        <div className='col pb-3'>
                            <div className='employee_text'>Employee Listing</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-9 p-2'>
                            <div className="search-box d-flex">
                                <div className="input-group">
                                    <input type="text" id="search" className="form-control" placeholder="Search Keyword" />
                                    <span className="input-group-addon search_icon"><FaSearch /></span>
                                </div>
                                <button className='fliter_btn' style={{display:'flex'}} onClick={toggleFilter}> <FaSlidersH className='fliter_icon mt-1'  /> Filter</button>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div class="btn-group dropend">
                                <button type="button" class="btn_short-by" data-bs-toggle="dropdown" aria-expanded="false">
                                    Short by <MdKeyboardArrowDown className='fliter_icon' />
                                </button>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Name</a></li>
                                    <li><a class="dropdown-item" href="#">Low amount</a></li>
                                    <li><a class="dropdown-item" href="#">High amount</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-12'>
                            <div class="filter mb-2" id="filter-div" style={{ display: isFilterOpen ? "block" : "none" }}>
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <h4>Amount</h4>
                                                <label class="form-label"></label>
                                                <input type="text" className="form-control mt-2" placeholder="amount" />

                                            </div>
                                            <div class="col-lg-8">
                                                <h4>Amount range</h4>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-md-6'>
                                                        <label class="form-label">Minimum</label>
                                                        <input type="text" className="form-control" placeholder="Minimum" />
                                                    </div>
                                                    <div className='col-lg-6 col-md-6'>
                                                        <label class="form-label">Minimum</label>
                                                        <input type="text" className="form-control" placeholder="Minimum" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 p-4 pt-0">
                                        <h4>Status</h4>
                                        <div className=''>
                                            <div class="form-check mb-2">
                                                <input class="form-check-input form-check-input_activ" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Active
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input form-check-input_activ" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Inactive
                                                </label>
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
                            <Link href="/Uploadbulkemploye" lassName='btn_upload mx-2'> Bulk Upload</Link>
                            <Link href="/Addemploye" className='mx-2'> <FiPlus color='#fff' size={20} /> Add Employee</Link>
                            <a className='btn_addbals' onClick={() => setIsOpenbals(true)}> Add Balance</a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 p-2'>
                            <table class="table employe_mang">
                                <thead>
                                    <tr>

                                        <th>Check</th>
                                        <th>#</th>
                                        <th>Employee</th>
                                        <th>Email</th>
                                        <th>Balance</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyData.map((data, index) => (
                                        <tr key={index}>
                                            <td>  <input class="form-check-input chec_input_tb" type="checkbox" value="" id="flexCheckDefault" /> </td>
                                            <td>{index + 1}</td>
                                            <td>
                                                <a href="#" className='d-flex font_14'>
                                                    {data.customer.name}<br />{data.customer.phoneNumber}
                                                </a>
                                            </td>
                                            <td>ram@gmail.com</td>

                                            <td>{data.amount}</td>

                                            <td>
                                                <div className='d-flex justify-content-between w-75'>
                                                    <a href='#'>
                                                        <FiEdit size={20} />
                                                    </a>
                                                    <a href='#'>
                                                        < FaWallet size={20} />
                                                    </a>

                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input switch_input"
                                                            type="checkbox"
                                                            checked={value}
                                                            onChange={handleClick}
                                                            role="switch"
                                                            id="flexSwitchCheckDefault"
                                                        />
                                                    </div>

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
                        <div className='uploadtext '>Download exel File </div>
                        <div className="card shadow-none  mx-auto">
                            <div className="card-body text-center p-5">
                                <a id="uploadButton" className='fileuplord'> <img src='../images/Downarrow.png' alt='image' /></a><br />
                            </div>
                        </div>
                        <div className='uploadtext pt-3 '>Upload File </div>
                        <div className="card shadow-none mx-auto">
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