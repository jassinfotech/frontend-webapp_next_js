'use client'
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx'
import { AiOutlineUpload } from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import '../scss/style.scss';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import './ticketlist.css';
import Link from 'next/link';
function page() {
    const [modalIsOpen, setIsOpen] = useState(true);
   
    const handleButtonClick = (event) => {
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
       
    ];
    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid p-4'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 text-end'>
                            <a href='#' class="btn btn-create" onClick={openModal}>Create ticket</a>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <ul class="nav nav-ticketlist" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Open</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Closed</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                                                            <td> 10512 </td>
                                                            <td className='w-500'>Facing issue Gift card purchase...</td>
                                                            <td>Open</td>
                                                            <td>15/08/2023 10:12 AM</td>
                                                            <td>10/60/2023 10:12 AM</td>
                                                            <td><Link href='/ticket'><FiEye size={23}/></Link></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row p-4'>
                    <div className='col-md-6'>
                        <span>Ticket</span>
                    </div>
                    <div className='col-md-6 text-end'>
                        <span className='p-2 rounded text-end' onClick={closeModal}><RxCross1 /></span>
                    </div>
                </div>
                <div className='row p-4'>
                    <div className='col-md-12 col-lg-12'>
                        <label className="form-label fromtext1 pb-1">Order Id</label>
                        <input type="text" className="form-control" placeholder='Enter your Tittle' />
                        <label className="form-label fromtext1 py-1">Subject</label>
                        <input type="text" className="form-control" placeholder='subject' />
                        <label className="form-label fromtext1 py-1">Description</label>
                        <textarea type="text" className="form-control" rows="6" placeholder='Type your query...'></textarea>
                    </div>


                </div>
                <div className='row p-4'>
                    <div className='col-md-4 d-flex'>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                        <a id="uploadButton" onClick={handleButtonClick}> <AiOutlineUpload className='uploadButton_icon' size={25} />Attach </a>

                    </div>
                    <div className='col-md-8 text-end'>
                  <button className='okbtn py-2'>Create</button>
                    </div>
                </div>

            </Modal>

        </>
    )
}

export default page