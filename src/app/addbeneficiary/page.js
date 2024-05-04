'use client'
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import '../scss/style.scss';
import Modal from 'react-modal';
import { FaSearch, FaSlidersH, FaEllipsisV, FaWallet } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowBack } from "react-icons/md";

import Link from 'next/link';
import './addbeneficiary.css';
function page() {



  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [value, setValue] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleClick = () => {
    setValue(!value);
  };
  const [modalIsOpen, setIsOpen] = useState(true);



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
      <Sidebarmain />
      <section id="main" className='main'>
        <div className='container-fluid p-5'>
          <div className="row">
            <div className='col'>
              <a className='back_btn_emp' href=''><MdOutlineArrowBack className='mx-1' size={20} />Back</a>
            </div>

          </div>

          <div className="p-4">
            <div className='row d-flex pt-3'>
              <div className='col-lg-4 pb-3 pt-4'>
                <div className='employee_text'>Add beneficiary</div>
              </div>

            </div>
            <div className="row pt-4">
              <div className="col-lg-6">
                <div className="num_ber">
                  <label for="exampleFormControlInput1" className="form-label">Account number </label>
                  <input type="text" className="form-control ban_k" id="exampleFormControlInput1" placeholder="Example@79454157022" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="num_ber">
                  <label for="exampleFormControlInput1" className="form-label">Confirm Account number </label>
                  <input type="text" className="form-control ban_k" id="exampleFormControlInput1" placeholder="Enter confirm Account number" />
                </div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-lg-6">
                <div className="num_ber">
                  <label for="exampleFormControlInput1" className="form-label">Select bank </label>
                  <select className="form-select ban_k" aria-label="Default select example">
                    <option selected>Select bank</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="num_ber">
                  <label for="exampleFormControlInput1" className="form-label">Bank IFSC Code </label>
                  <input type="text" className="form-control ban_k" id="exampleFormControlInput1" placeholder="Enter IFSC Code" />
                </div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-lg-6">
                <div className="num_ber">
                  <label for="exampleFormControlInput1" className="form-label">Beneficiary name </label>
                  <input type="text" className="form-control ban_k" id="exampleFormControlInput1" placeholder="Enter beneficiary name" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="num_ber">
                  <label for="exampleFormControlInput1" className="form-label">Mobile number</label>
                  <input type="text" className="form-control ban_k" id="exampleFormControlInput1" placeholder="Enter mobile number" />
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-3">
                <button className='but_sub'>Submit</button>
              </div>
            </div>

          </div>
        </div>

      </section>

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
      </Modal>







    </>
  )
}

export default page