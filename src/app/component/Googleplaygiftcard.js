'use client'
import React, { useState } from 'react';
import Modal from 'react-modal';
import { RxCross1 } from "react-icons/rx";

import 'bootstrap/dist/css/bootstrap.css'
import '../scss/style.scss';
import './custom.css'

function Googleplaygiftcard() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpens, setIsOpens] = useState(false);
    const [modalsideviws, setIsmodalsideviwsn] = useState(false);
    const [pagestep, setPagestep] = useState(2);

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
            color: '#28A5C1',
            marginRight: '-50%',
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',

        },
    };
    const customStyless = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '350px',
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',

        },
    };
    return (
        <>
            { pagestep === 1 ?  <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='./images/cardsmallimg.png' className='' alt='image' /><span className='googletext ps-2'>Google Play Gift Card</span>
                        <hr />
                        <div className='googletext py-3'>Choose your Amount</div>
                        <div className='pt-1 pb-5'>
                            <span className='textbox'>10</span>
                            <span className='textbox'>20</span>
                            <span className='textbox'>50</span>
                            <span className='textbox'>100</span>
                            <span className='textbox'>200</span>
                            <span className='textbox'>500</span>
                        </div>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" className="form-label googletext">Balance</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Card Balance' />
                                <div className="text-end small_text ">Min: ₹1000.00 Max: ₹10,000.00</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" className="form-label googletext">GC ID / Card No</label>
                                <input type="text" className="form-control" placeholder='Enter GC ID Or Card No ' id="exampleInputPassword1" />
                                <div className='text-end small_text '>Example:123456789</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword2" className="form-label googletext">Pin / Voucher Code</label>
                                <input type="text" className="form-control" placeholder='Enter Pin Or Voucher Code ' id="exampleInputPassword2" />
                                <div className='text-end small_text '>Example:1234</div>
                            </div>
                            <div>
                                <span className='text-success'>12% </span><span> will be deducted from Your Gift Card / Voucher Value.</span>
                            </div>
                            <div class="mb-3 form-check">
                                <label class="form-check-label" for="exampleCheck1">Agree terms & Conditions</label>
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        <img src='./images/bulkupdate.png' className='w-100' alt='' />
                        <div className='text-center bulktext'> Want To Bulk Upload?</div>
                        <p className='pt-2 pb-4 ptext1'>Pellentesque a posuere felis, in iaculis nibh. Fusce a magna mauris. Nulla nunc massa, placerat vel malesua</p>
                        <button className='bulkbtn'>Bulk Upload</button>
                    </div>
                </div>
            </div>
           : null }

            { pagestep === 2 ?   <div className='container'>
                <div className='row '>
                    <div className='col-md-6 text-end  '>
                        <button className='download_btn me-2' type='button'>Download Format</button>
                    </div>
                    <div className='col-md-6'>
                        <button className='download_btn ms-2' type='button'>Upload Document</button>
                    </div>
                </div>
                <div className='col-md-6 offset-3'>
                    <img className='w-100' src='./images/image15.png' />
                </div>
            </div>
           : null }

            {/* <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row px-3'>

                    <div className='col-md-12  text-center'>
                        <div class="spinner-border bg-white" role="status">
                            <span class="visually-hidden "></span>
                        </div>
                        <div className='ps-1 text-white'>Calculating Card... 23</div> </div>
                </div>

            </Modal> */}

            {/* <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row px-3'>

                    <div className='col-md-12  text-center'>
                        <div class="spinner-border bg-white" role="status">
                            <span class="visually-hidden "></span>
                        </div>
                        <div className='ps-1 text-white'>Calculated</div> </div>
                </div>

            </Modal> */}

            {/* <Modal isOpen={modalIsOpens} style={customStyless} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row'>
                    <div className='col-md-6'>
                        <span>Information</span>
                    </div>
                    <div className='col-md-6 text-end'>
                        <span className='p-2 rounded text-end' onClick={closeModal}><RxCross1 /></span>
                    </div>
                </div>
                <div className='row px-3'>
                    <div className='col-md-12 text-center'>
                        <div className='pt-3 ps-1 textstyle2'> Are you sure  you Sell your 100 Card ? </div>
                        <div className=' py-5'>
                            <button className=' me-3 cancel_btn'>Cancel</button>
                            <button className=' okbtn '>OK</button>
                        </div>
                    </div>
                </div>

            </Modal> */}


        </>
    )
}

export default Googleplaygiftcard