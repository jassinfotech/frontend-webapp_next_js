'use client'
import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaRegEdit } from 'react-icons/fa'
import {RxCross1} from 'react-icons/rx'
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/style.scss';
import './custom.css'

function Giftcardthreepoint() {
    const [modalIsOpen, setIsOpen] = useState(true);
    const [modalsideviws, setIsmodalsideviwsn] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const customStyless = {
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

    return (
        <>
            {/* <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='textstyle2 pb-2'>Order Details</div>
                        <table class="table table-borderless border ">
                            <thead>
                                <tr>
                                    <th scope="col" className='tabletext2'>Total Card</th>
                                    <td scope="col" className='tabletext3' >100</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className='tabletext2'>Success</th>
                                    <td className='tabletext3'>20</td>
                                </tr>
                                <tr>
                                    <th className='tabletext2'> Invalid Card</th>
                                    <td className='tabletext3'>80</td>
                                </tr>
                                <tr>
                                    <th className='tabletext2'>Sale Amount</th>
                                    <td className='tabletext3'>10000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 offset-6 py-2'>
                    <input type="search" className="form-control" placeholder='Search Card' />
                    </div>
                    <div className='col-12'>
                        <table class="table">
                            <thead >
                                <tr >
                                    <th scope="col" className='tabletext1'>Gift Card</th>
                                    <th scope="col" className='tabletext1'>GC ID/Card No</th>
                                    <th scope="col" className='tabletext1'>Pin/Voucher Code</th>
                                    <th scope="col" className='tabletext1'>Expiry Date</th>
                                    <th scope="col" className='tabletext1'>Balance </th>
                                    <th scope="col" className='tabletext1'>Status</th>
                                    <th scope="col" className='tabletext1'>Remark</th>
                                    <th scope="col" className='tabletext1'>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='tabletext3'>Celebyte E-Gift Voucher</td>
                                    <td className='tabletext2'>104523501230</td>
                                    <td className='tabletext2'>1550</td>
                                    <td className='tabletext2'>10/02/2023</td>
                                    <td className='tabletext2'>₹160.00</td>
                                    <td className='text-warning'>Failed </td>
                                    <td className='tabletext2 text-warning'>Card validity Expire</td>
                                    <td className='fs-3'><FaRegEdit className='ps-2' /></td>
                                </tr>
                                <tr>
                                    <td className='text_clr6'>Makemytrip Holiday E-Gift <br></br>Card</td>
                                    <td className='tabletext2'>104523501230</td>
                                    <td className='tabletext2'>1550</td>
                                    <td className='tabletext2'>10/02/2023</td>
                                    <td className='tabletext2'>₹160.00</td>
                                    <td className='text-warning'>Failed </td>
                                    <td className='tabletext2 text-warning'>Card validity Expire</td>
                                    <td className='fs-3'><FaRegEdit className='ps-2' /></td>
                                </tr>
                                <tr>
                                    <td className='text_clr6'>Flipkart E-Gift Voucher</td>
                                    <td className='tabletext2'>104523501230</td>
                                    <td className='tabletext2'>1550</td>
                                    <td className='tabletext2'>10/02/2023</td>
                                    <td className='tabletext2'>₹160.00</td>
                                    <td className='text-warning'>Failed </td>
                                    <td className='tabletext2 text-warning'>Card validity Expire</td>
                                    <td className='fs-3'><FaRegEdit className='ps-2' /></td>
                                </tr>
                                <tr>
                                    <td className='text_clr6'>Yatra FHBH Non Cum Multi E-Gift <br />Card</td>
                                    <td className='tabletext2'>104523501230</td>
                                    <td className='tabletext2'>1550</td>
                                    <td className='tabletext2'>10/02/2023</td>
                                    <td className='tabletext2'>₹160.00</td>
                                    <td className='text-warning'>Failed </td>
                                    <td className='tabletext2 text-warning'>Card validity Expire</td>
                                    <td className='fs-3'><FaRegEdit className='ps-2' /></td>
                                </tr>
                                <tr>
                                    <td className='text_clr6'>Celebyte E-Gift Voucher</td>
                                    <td className='tabletext2'>104523501230</td>
                                    <td className='tabletext2'>1550</td>
                                    <td className='tabletext2'>10/02/2023</td>
                                    <td className='tabletext2'>₹160.00</td>
                                    <td className='text-warning'>Failed </td>
                                    <td className='tabletext2 text-warning'>Card validity Expire</td>
                                    <td className='fs-3'><FaRegEdit className='ps-2' /></td>
                                </tr>

                            </tbody>
                        </table>
                        <div className='text-end'>
                            <button className='save_btn' type='button'>SAVE</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <Modal isOpen={modalIsOpen} style={customStyless} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row'>
                    <div className='col-md-6'>
                        <span>Edit Details</span>
                    </div>
                    <div className='col-md-6 text-end'>
                        <span className='p-2 rounded text-end' onClick={closeModal}><RxCross1 /></span>
                    </div>
                </div>
                <div className='row p-4'>
                    <div className='col-6'>
                        <label for="exampleInputEmail1" className="form-label  fromtext1 ">Gc ID / Card Number</label>
                        <label for="exampleInputEmail1" className="form-label py-4 fromtext1 ">Pin Number</label><br />
                        <label for="exampleInputEmail1" className="form-label pt-2 fromtext1 ">Expiry Date</label>
                    </div>
                    <div className='col-6'>
                        <input type="email" className="form-control  fromtext2" id="exampleInputEmail1" placeholder='104523501230' />
                        <input type="email" className="form-control my-4 fromtext2" id="exampleInputEmail1" placeholder='1120' />
                        <input type="email" className="form-control  fromtext2" id="exampleInputEmail1" placeholder='12/04/2023' />
                    </div>

                </div>
                <div className='py-3 px-4'>
                    <div className='col-md-12 text-end'>
                        <button className=' me-3 cancel_btn'>Cancel</button>
                        <button className=' okbtn '>OK</button>
                    </div>
                </div>

            </Modal>
        </>
    )
}

export default Giftcardthreepoint