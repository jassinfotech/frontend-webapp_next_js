'use client'
import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain'
import { AiOutlineClose } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaSearch, FaSlidersH, FaEllipsisV } from "react-icons/fa";
import { FiEdit } from "react-icons/fi"
import '../scss/style.scss';
import "./page.css"

function page() {

    const [modalIsOpenbals, setIsOpenbals] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '397px',
            padding: '12px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',

        },
    };
    const dummyData = [
        { id: 1, name: "Ram Singh", mobile: 7880829986, balance: 5000.00 },
        { id: 2, name: "Ram Singh", mobile: 7880829986, balance: 5000.00 },
        { id: 3, name: "Ram Singh", mobile: 7880829986, balance: 5000.00 },
        { id: 4, name: "Ram Singh", mobile: 7880829986, balance: 5000.00 },
        { id: 5, name: "Ram Singh", mobile: 7880829986, balance: 5000.00 },
        { id: 6, name: "Ram Singh", mobile: 7880829986, balance: 5000.00 },
        { id: 7, name: "Ram Singh", mobile: 7880829986, balance: 5000.00 },
        { id: 8, name: "Ram Singh", mobile: 7880829986, balance: 5000.00 },
        // Add more dummy data objects here
    ];

    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid p-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='text-style1 py-3'>Add Bulk Balance uploaded Employee </div>
                            <div className='row'>
                                <div className='col-lg-10 p-2'>
                                    <div className="search-box">
                                        <div className="input-group input-groups d-flex">
                                            <input type="text" id="search" className="form-control" placeholder="Search Keyword" />
                                            <span className="input-group-addon search_icon"><FaSearch /></span>
                                        </div>
                                        <button className='fliter_btn' > <FaSlidersH className='fliter_icon' /> Filter</button>
                                    </div>
                                </div>
                                <div className='col-lg-2 p-2'></div>
                            </div>
                            <table class="table pt-4">
                                <thead>
                                    <tr>
                                        <th className='table_heding' scope="col">#</th>
                                        <th className='table_heding' scope="col">Employee Name</th>
                                        <th className='table_heding' scope="col">Balance</th>

                                        <th className='table_heding' scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyData.map((data, index) => (
                                        <tr key={index}>

                                            <th className='table_data'>{data.id}</th>
                                            <td className='table_data'>{data.name}
                                                <br />
                                                {data.mobile}
                                            </td>
                                            <td className='table_data'>{data.balance}</td>
                                            <td className='table_data'>
                                                <span className='fs-5' onClick={() => setIsOpenbals(true)}><FiEdit /></span>
                                                <span className='ps-4 fs-5'><RiDeleteBin5Line />
                                                </span></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        <div className='col-12 '>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <span className='botum_text'>TOTAL EMPLOYEE 100</span>
                                    <span className='botum_text ps-4'>ENVALID EMPLOYEE 10</span>
                                </div>
                                <div className='col-md-6 text-end '><button className='btn Submit-btn ' type='button'>Submit</button></div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <Modal isOpen={modalIsOpenbals} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='bg-poup_top'>
                    <div className='row p-0 m-0'>
                        <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                            <div className='poipuptext'>Edit Balance</div>
                        </div>
                        <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                            <a onClick={() => setIsOpenbals(false)}><AiOutlineClose size={23} /></a>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-lg-12 pt-2 pb-5'>
                        <h5 className='text-drck text-center pb-4 pt-3 px-5'>Eidt Balance</h5>
                        <input type="number" class="form-control" value={'500'} placeholder='500' />
                    </div>
                    <div className='col-md-12 col-lg-12 pt-3 pb-3 text-end'>
                        <button className='btn btn-cancel me-2' onClick={() => setIsOpenbals(false)}>Cancel</button>
                        <button className='btn btn-ok ms-2 ' onClick={() => setImodalIsUplordbal(true)}>Ok</button>

                    </div>
                </div>
            </Modal>
        </>
    )
}

export default page