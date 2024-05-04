'use client'
import React, { useState } from 'react';

import { AiOutlineMail } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/Bs";
import { TiAttachment } from "react-icons/ti";
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import './ticket.css'
function Ticket() {
   

    const handleButtonClick = (event) => {
        console.log(event.target.files[0]);
    }


    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid p-5'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-8 pt-4'>
                            <div className='header_ticket mb-4'>
                                <h5>I Can not refund Gift Card Payment</h5>
                                <h6>#089002</h6>
                            </div>
                            <div class="card_s_tick card mb-3" style={{ width: '100%' }}>
                                <div class="card-header bg-transparent card_h_tick">  <AiOutlineMail  className='mx-2' size={20}/>   Reply   </div>
                                <div class="card-body p-0 border-0">
                                    <textarea class="form-control text_arika" id="exampleFormControlTextarea1" placeholder='#Type your query...' rows="7"></textarea>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <div className='row d-flex justify-content-between'>
                                        <div className='col-lg-6 col-md-6'>
                                            <input type="file" id="fileInput" style={{ display: 'none' }} />
                                            <button id="uploadButton" className='fileuplord' onClick={handleButtonClick}> <TiAttachment className='uploadButton_icon' size={25} />Attach file <small>(up to 10 MB)</small> </button>
                                        </div>
                                        <div className='col-lg-6 col-md-6 text-end'>
                                            <button className='btn send_btn'> Send  <BsFillSendFill className='uploadButton_icon' size={20} /> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-3" style={{ width: '100%' }}>
                                <div class="card-header bg-transparent">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <img src="https://www.tutorialrepublic.com/examples/images/avatar.svg" width="50" height="50" className='rounded-pill' alt="Sample Image" />
                                        </div>
                                        <div class="flex-grow-1 ms-3 detils">
                                            <h5> <small class="text-muted p-0 m-0">Customer Service</small></h5>
                                            <h6 className='p-0 m-0'>Alina Martin <small class="text-muted"> reported in Issue</small></h6>
                                            <p className='p-0 m-0'>a day ago ( wed 08 2023 at 08:15AM )</p>
                                        </div>

                                    </div>
                                </div>
                                <div class="card-body p-0 ">
                                    <div className='p-4'>
                                        <p>Hi</p>
                                        <p>Hey Ram, I am looking for the Recharge Section.<br />
                                            Could you please tell me to find it out?
                                        </p>
                                        <p>Thanks</p>
                                    </div>
                                </div>
                                <div class="card-footer bg-transparent " style={{ borderTop: '0' }}>
                                    <div className='row d-flex justify-content-between'>
                                        <div className='col-lg-6 col-md-6'>
                                        </div>
                                        <div className='col-lg-6 col-md-6 text-end'>
                                            <div className='icoin_f'> <FaCloudUploadAlt className='uploadButton_icon' size={20} color='#28A5C1' />   <RiFilePaper2Fill size={20} color='#28A5C1' className='mx-2' /> download </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-lg-4 col-md-4 pt-4' style={{paddingLeft:'50px'}}>
                            <h3 className='heading'>Ticket Detail</h3>
                            <div className='row d-flex justify-content-between py-2'>
                                <div className='col-lg-6 col-md-6 textstart'>
                                    <h6>Ticket ID</h6>
                                </div>

                                <div className='col-lg-6 col-md-6 text-end'>
                                    <h6> #089002 </h6>
                                </div>
                            </div>
                            <div className='row d-flex justify-content-between py-2'>
                                <div className='col-lg-6 col-md-6 text-info'>
                                    <h6>Properties  </h6>
                                </div>

                                <div className='col-lg-6 col-md-6'> </div>
                            </div>


                            <div className='row d-flex justify-content-between py-2'>
                                <div className='col-lg-8 col-md-8 text-info'>
                                    <h6> Priority </h6>
                                </div>

                                <div className='col-lg-4 col-md-4'>
                                  
                                </div>
                            </div>
                            <div className='row d-flex justify-content-between py-2'>
                                <div className='col-lg-8 col-md-8 '>
                                    <h6> Ticket Status </h6>
                                </div>
                                <div className='col-lg-4 col-md-4'>
                                  
                                </div>
                            </div>

                            <div className='text-info pt-6'>
                                <h5>Description</h5>
                            </div>
                            <div className='pt-3'>
                                <p>Hey John, I am looking for the best admin template.

                                    Could you please tell me to find it out?Hey John, I am
                                    looking for the best admin template.

                                    Could you please tell me to find it out?

                                    Hey John, I am looking for the best admin template.

                                    Could you please tell me to find it out?

                                    Hey John, I am looking for the best admin template.

                                    Could you please tell me to find it out?</p>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12 p-2'>


                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Ticket