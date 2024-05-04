'use client'
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import '../scss/style.scss';
import Modal from 'react-modal';
import { FaSearch, FaSlidersH, FaEllipsisV, FaWallet } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiDotsVertical } from "react-icons/hi";

import Link from 'next/link';
import './senderdetail.css';
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
    const [modalIsOpen, setIsOpen] = useState(true);
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
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },
        {
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },
        {
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },
        {
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },
        {
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },
        {
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },
        {
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },
        {
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },
        {
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },
        {
            name: "Ram Singh",
            lastActivity: '01/03/2023 11:40 PM',
            amount: 64300010110561,
            bank: "Punjab national bank",
            IFSC: "PUNB0643000",
            Verify: "Not verified",
            status: 'Active',
        },


    ];


    return (
        <>
            <Sidebarmain />
            <section id="main" className='main pt-55_das'>
                <div className='container-fluid p-5'>
                    <div className='row d-flex justify-content-between pt-3'>
                        <div className='col-lg-4 pb-3 pt-4'>
                            <div className='employee_text'>Sender Detail</div>
                        </div>
                        <div className='col-lg-2   '>
                            <div class="btn-group ">
                                <button type="button" class="btn_short-by add_be"  >
                                    Add beneficiary
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className='row pt-3'>
                        <div className='col-lg-4 pb-3 pt-4'>
                            <div className='bene_fic'>Beneficiary listing</div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 p-2'>
                            <table class="table uplordbulck">
                                <thead>
                                    <tr>

                                        <th>Beneficiary name</th>
                                        <th>beneficiary account</th>
                                        <th>Bank name</th>
                                        <th>Bank IFSC</th>
                                        <th>Status</th>
                                        <th>Verify status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyData.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.name}</td>
                                            <td>{data.amount}</td>
                                            <td>{data.bank}</td>
                                            <td>{data.IFSC}</td>
                                            <td>{data.status}</td>
                                            <td>{data.Verify}</td>


                                            <td className="dropdown"><FaEllipsisV className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                                                <ul className="dropdown-menu drop_box pa_yd" aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Pay </a></li>
                                                    <li><a className="dropdown-item" href="#">Verify</a></li>
                                                    <li><a className="dropdown-item" href="#" >Disable </a></li>
                                                    <li><a className="dropdown-item" href="#">Delete</a></li>

                                                </ul>
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

            {/* <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
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
            <h5 className='text-drck text-center pt-3 we_sent'>We sent your code</h5>
            <p className='text-center ent_er'>
              Enter the confirmation code below
            </p>
          </div>
          <div className='col-md-12 col-lg-12 pt-3'>
            <input class="form-control input def_au " type="text" placeholder="Enter OTP" aria-label="default input example" />
            <div className='d-flex justify-content-between pb-2 pt-1'>
              <p className='text_time'>The Remaining:  01:25</p>
              <a className='resend' href=''>Resend OTP </a>
            </div>
            <button className='btn btn-themes  code_v mt-3 mb-5   w-100'>Verify Code</button>
          </div>
        </div>
      </Modal> */}


            {/* <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
        <div className='row'>
          <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
            <div className='poipuptext'>Delete Beneficiary</div>
          </div>
          <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
            <a onClick={() => setImodalIsUplordbal(false)}><AiOutlineClose size={23} /></a>
          </div>
          <div className='col-md-12 col-lg-12 pt-2 pb-5 px-3'>
            <h5 className='top_popup_text pt-3 d-flex justify-content-center '>Are you sure?</h5>
            <h5 className='  pb-2  d-flex justify-content-center '>You wanted to delete this sender</h5>
          </div>
          <div className='col-md-12 col-lg-12 pt-2 pb-3  d-flex justify-content-center'>
            <button className='btn btn-cancel me-2' onClick={() => setImodalIsUplordbal(false)}>Cancel</button>
            <button className='btn btn-ok ms-2 ' onClick={() => setImodalIsUplordbal(false)}>Delete</button>

          </div>
        </div>
      </Modal> */}



            {/* <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
        <div className='row'>
          <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
            <div className='poipuptext'>Money transfer</div>
          </div>
          <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
            <a onClick={closeModal}><AiOutlineClose size={23} /></a>
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e '>
            <label>Account number</label>
            <input type="text" className="form-control" placeholder='7945415708' />
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e '>
            <label>Enter Amount</label>
            <input type="text" className="form-control" placeholder='Enter Amount' />
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e'>
            <label>Transaction type</label>
            <select class="form-select ent_er" aria-label="Default select example">
              <option selected></option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className='col-md-12 col-lg-12 pt-5 pb-3 text-end'>
            <button className='btn btn-cancel me-2' onClick={closeModal}>Cancel</button>
            <button className='btn btn-ok ms-2 ' onClick={closeModal}>Transfer</button>

          </div>
        </div>
      </Modal> */}



            {/* <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
      <div className='row'>
          <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
            <div className='poipuptext'>Money transfer</div>
          </div>
          <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
            <a onClick={closeModal}><AiOutlineClose size={23} /></a>
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e '>
            <label>Account number</label>
            <input type="text" className="form-control" placeholder='7945415708' />
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e '>
            <label>Enter Amount</label>
            <input type="text" className="form-control" placeholder='5000' />
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e'>
            <label>Transaction type</label>
            <input type="text" className="form-control" placeholder='IMPS' />
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e'>
            <label>Mpin</label>
            <input type="text" className="form-control" placeholder='4  5  3  2' />
          </div>
          <div className='col-md-12 col-lg-12 pt-5 pb-3 text-end'>
            <button className='btn btn-cancel me-2' onClick={closeModal}>Cancel</button>
            <button className='btn btn-ok ms-2 ' onClick={closeModal}>Transfer</button>

          </div>
        </div>
      </Modal> */}


            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row modal_bf'>
                    <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                        <div className='poipuptext'>Verify Beneficiary</div>
                    </div>
                    <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                        <a onClick={closeModal}><AiOutlineClose size={23} /></a>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-4 nam_e '>
                        <label>Account number</label>
                        <input type="text" className="form-control" placeholder='7945415708' />
                    </div>
                    <div className='col-md-12 col-lg-12 pt-4 nam_e '>
                        <label>Bank name</label>
                        <select className="form-select  ban_kname mb-3 form-select_3" aria-label="example">
                            <option selected>Select bank</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-4 nam_e'>
                        <label>IFSC Code</label>
                        <input type="text" className="form-control" placeholder='Enter IFSC code' />
                    </div>
                    <div className='col-md-12 col-lg-12 pt-4 nam_e'>
                        <label>Beneficiary name</label>
                        <input type="text" className="form-control" placeholder='Enter beneficiary name' />
                    </div>
                    <div className='col-md-12 col-lg-12 pt-4 nam_e'>
                        <label>Mobile number</label>
                        <input type="text" className="form-control" placeholder='Enter mobile number' />
                    </div>
                    <div className='col-md-12 col-lg-12 pt-5 pb-3 text-end'>
                        <button className='btn btn-cancel me-2' onClick={closeModal}>Cancel</button>
                        <button className='btn btn-ok ms-2 ' onClick={closeModal}>Verify</button>

                    </div>
                </div>
            </Modal>



        </>
    )
}

export default page