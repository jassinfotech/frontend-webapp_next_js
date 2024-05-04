'use client'
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import '../scss/style.scss';
import Modal from 'react-modal';
import { FaSearch, FaSlidersH, FaEllipsisV, FaWallet } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FiPlus, FiEye, FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';
import './senderlisting.css';
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
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },
    {
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },
    {
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },
    {
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },
    {
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },
    {
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },
    {
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },
    {
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },
    {
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },
    {
      ram: 'Ram Singh',
      Mobile: "7880829986",
      Total: "25000",
      Available: "25000",
      Status: "Active",
      amount: '01/03/2023 11:40 PM',
    },

  ];


  return (
    <>
      <Sidebarmain />
      <section id="main" className='main pt-55_das'>
        <div className='container-fluid p-5'>
          <div className='row'>
            <div className='col-lg-10 p-2'>
              <div className="search-box d-flex">
                <div className="input-group">
                  <input type="text" id="search" className="form-control" placeholder="Search Keyword" />
                  <span className="input-group-addon search_icon"><FaSearch /></span>
                </div>
                <button className='fliter_btn' style={{ display: 'flex' }} onClick={toggleFilter}> <FaSlidersH className='fliter_icon mt-1 ' /> Filter</button>
              </div>
            </div>
            <div className='col-lg-2 '>
              <div className="btn-group dropend">
                <button type="button" className="btn_short-by add_new" onClick={openModal}>
                  Add new sender
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h5 className='sen_der'>Sender listing</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h5 className='fo_nd'>Result Fond 500</h5>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 p-2'>
              <table className="table uplordbulck">
                <thead>
                  <tr>

                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Total limit</th>
                    <th>Available limit</th>
                    <th>Status</th>
                    <th>Created at</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.ram}</td>
                      <td>{data.Mobile}</td>
                      <td>{data.Total}</td>
                      <td>{data.Available}</td>
                      <td>{data.Status}</td>
                      <td>{data.amount}</td>

                      <td>
                        <div className='d-flex justify-content-between w-75'>
                          <a href='#'>
                            <FiEdit size={20} />
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
                          <a href='#' onClick={() => setImodalIsUplordbal(true)}>
                            < RiDeleteBin5Line size={20} />
                          </a>

                        </div>

                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>
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



      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
        <div className='row'>
          <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
            <div className='poipuptext'>Add Sender</div>
          </div>
          <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
            <a onClick={closeModal}><AiOutlineClose size={23} /></a>
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e '>
            <label>First name</label>
            <input type="text" className="form-control" placeholder='Enter first name' />
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e '>
            <label>Last name</label>
            <input type="text" className="form-control" placeholder='Enter last name' />
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e'>
            <label>Mobile number</label>
            <input type="text" className="form-control" placeholder='Enter mobile number' />
          </div>
          <div className='col-md-12 col-lg-12 pt-4 nam_e'>
            <label>Postal code</label>
            <input type="text" className="form-control" placeholder='110049' />
          </div>
          <div className='col-md-12 col-lg-12 pt-5 pb-3 text-end'>
            <button className='btn btn-cancel me-2' onClick={closeModal}>Cancel</button>
            <button className='btn btn-ok ms-2 ' onClick={closeModal}>Submit</button>

          </div>
        </div>
      </Modal>
      <Modal isOpen={modalIsUplordbal} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
        <div className='row'>
          <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
            <div className='poipuptext'>Sender delete</div>
          </div>
          <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
            <a onClick={() => setImodalIsUplordbal(false)}><AiOutlineClose size={23} /></a>
          </div>
          <div className='col-md-12 col-lg-12 pt-2 pb-5 px-3'>
            <h5 className='top_popup_text pt-3 d-flex justify-content-center '>Are you sure?</h5>
            <h5 className='top_popup_text pb-2  d-flex justify-content-center '>You wanted to delete this sender</h5>
          </div>
          <div className='col-md-12 col-lg-12 pt-2 pb-3  d-flex justify-content-center'>
            <button className='btn btn-cancel me-2' onClick={() => setImodalIsUplordbal(false)}>Cancel</button>
            <button className='btn btn-ok ms-2 ' onClick={() => setImodalIsUplordbal(false)}>Delete</button>

          </div>
        </div>
      </Modal>


    </>
  )
}

export default page