import React from 'react'
import Sidebarmain from '../component/Sidebarmain'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { FaRegFilePdf } from "react-icons/fa";
import {AiOutlineDownload} from "react-icons/ai";
import '../scss/style.scss';
import '../paymentgetway/Payment.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./order.css";



function page() {
    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid p-5'>
                    <div className='row '>
                        <div className='col-md-4'>
                            <div className='px-2'>
                                <div className=''><a href='' className='text_clr1 text-decoration-none'><AiOutlineArrowLeft /> Back</a></div>
                                <div className='text_clr2 pt-3 pb-2'>Payment Details</div>
                                <div className='row px-3 border rounded'>
                                    <div className='col-6'>
                                        <div className='py-2 text_clr5'> Total Amount</div>
                                        <div className='py-2 text_clr5'> Discount</div>
                                        <div className='py-2 text_clr5'> Grand Total</div>
                                        <div className='py-2 text_clr5'> Transaction ID</div>
                                    </div>
                                    <div className='col-6 text-end'>
                                        <div className='py-2 text_clr6' > ₹-125000.00</div>
                                        <div className='py-2 text_clr6'> — ₹3245.00</div>
                                        <div className='py-2 text_clr6'>₹121755.00</div>
                                        <div className='py-2 text_clr6'>TR7813203216</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 '>
                            <br></br>
                            <div className='px-2'>
                                <div className='text_clr2 pt-3 pb-2'>Order Details</div>
                                <div className='row px-3 border rounded'>
                                    <div className='col-6'>
                                        <div className='py-2 text_clr5'> Order Status</div>
                                        <div className='py-2 text_clr5'> Order On</div>
                                        <div className='py-2 text_clr5'> Order ID</div>
                                        <div className='py-2 text_clr5'> Total Quantity</div>
                                        <div className='py-2 text_clr5'> Total Approved</div>
                                        <div className='py-2 text_clr5'> Total Pending</div>
                                    </div>
                                    <div className='col-6 '>
                                        <div className='py-2 text-warning'> Pending</div>
                                        <div className='py-2 text_clr6'> 12/04/2023</div>
                                        <div className='py-2 text_clr6'>#OD117244521322000</div>
                                        <div className='py-2 text_clr6'>302</div>
                                        <div className='py-2 text_clr6'>205</div>
                                        <div className='py-2 text_clr6'>97</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <img src='../images/giftcardimage.png' alt='image' className='w-100'></img>
                        </div>
                        <div className='col-12'>
                            <ul class="nav " id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="  firstbtn me-4 text-decoration-none" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" role="tab" aria-controls="home" aria-selected="true">Product</a>
                                </li>
                                <li class="nav-item" role="presentation">

                                    <a class="  secdbtn me-4 text-decoration-none" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="false">Card</a>
                                </li>

                            </ul>

                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <table class="table">
                                        <thead >
                                            <tr >
                                                <th scope="col" className='text_clr2'>Card</th>
                                                <th scope="col" className='text_clr2'>Amount</th>
                                                <th scope="col" className='text_clr2'>Quantity</th>
                                                <th scope="col" className='text_clr2'>Status</th>
                                                <th scope="col" className='text_clr2'>Date & Time</th>
                                                <th scope="col" className='text_clr2'>Cashback</th>
                                                <th scope="col" className='text_clr2'>Total</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='text_clr6'>Flipkart E-Gift Voucher</td>
                                                <td className='text_clr3'>₹500.00</td>
                                                <td className='text_clr3'>10</td>
                                                <td className='text-success'>Approved</td>
                                                <td><span className='text_clr3'>10/04/2023</span><br /><span className='text_clr4'>1:45 PM</span> </td>
                                                <td className='text_clr3'>₹30.00</td>
                                                <td className='text_clr6'>₹5000.00</td>
                                            </tr>
                                            <tr>
                                                <td className='text_clr6'>Flipkart E-Gift Voucher</td>
                                                <td className='text_clr3'>₹500.00</td>
                                                <td className='text_clr3'>10</td>
                                                <td className='text-danger'>Approved</td>
                                                <td><span className='text_clr3'> 10/04/2023</span><br /><span className='text_clr4'>1:45 PM</span> </td>
                                                <td className='text_clr3'>₹30.00</td>
                                                <td className='text_clr6'>₹5000.00</td>
                                            </tr>
                                            <tr>
                                                <td className='text_clr6'>Flipkart E-Gift Voucher</td>
                                                <td className='text_clr3'>₹500.00</td>
                                                <td className='text_clr3'>10</td>
                                                <td className=' text-warning'>Approved</td>
                                                <td><span className='text_clr3'>10/04/2023</span><br /><span className='text_clr4'>1:45 PM</span> </td>
                                                <td className='text_clr3'>₹30.00</td>
                                                <td className='text_clr6'>₹5000.00</td>
                                            </tr>
                                            <tr>
                                                <td className='text_clr6'>Flipkart E-Gift Voucher</td>
                                                <td className='text_clr3'>₹500.00</td>
                                                <td className='text_clr3'>10</td>
                                                <td className=' text-warning'>Approved</td>
                                                <td><span className='text_clr3'>10/04/2023</span><br /><span className='text_clr4'>1:45 PM</span> </td>
                                                <td className='text_clr3'>₹30.00</td>
                                                <td className='text_clr6'>₹5000.00</td>
                                            </tr>
                                            <tr>
                                                <td className='text_clr6'>Flipkart E-Gift Voucher</td>
                                                <td className='text_clr3'>₹500.00</td>
                                                <td className='text_clr3'>10</td>
                                                <td className=' text-warning'>Approved</td>
                                                <td><span className='text_clr3'>10/04/2023</span><br /><span className='text_clr4'>1:45 PM</span> </td>
                                                <td className='text_clr3'>₹30.00</td>
                                                <td className='text_clr6'>₹5000.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className='row py-3'>
                                        <div className='col-md-6'>
                                            <div className='text_clr5'>Result Found 42</div>
                                        </div>
                                        <div className='col-md-6 text-end'>
                                            <span className='px-3 text_clr5'>Quantity (6)</span>
                                            <span className='px-3 text_clr5'>Used(2)</span>
                                            <span className='px-3 text_clr5'>Unused(5)</span>
                                            <button className='border-0 bg-white ps-3 text_clr5'><AiOutlineDownload className='text_clr1 fs-4 pe-1'/>Download All</button>
                                        </div>
                                    </div>
                                    <table class="table">
                                        <thead >
                                            <tr >
                                                <th scope="col" className='text_clr2'>Card</th>
                                                <th scope="col" className='text_clr2'>Card Number</th>
                                                <th scope="col" className='text_clr2'>Pin Number</th>
                                                <th scope="col" className='text_clr2'>Expiry Date</th>
                                                <th scope="col" className='text_clr2'>Mark in Used</th>
                                                <th scope="col" className='text_clr2'>Download</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='text_clr6'>Amazon Shopping E-Gift Card</td>
                                                <td className='text_clr3'>42554313441288</td>
                                                <td className='text_clr3'>5588</td>
                                                <td className='text_clr3'>10/02/2023</td>
                                                <td><input class="form-check-input chekinput" type="checkbox" value="" /></td>
                                                <td className='fs-3'><FaRegFilePdf className=' text_clr1' /></td>

                                            </tr>
                                            <tr>
                                                <td className='text_clr6'>Amazon Shopping E-Gift Card</td>
                                                <td className='text_clr3'>42554313441288</td>
                                                <td className='text_clr3'>5588</td>
                                                <td className='text_clr3'>10/02/2023</td>
                                                <td><input class="form-check-input chekinput" type="checkbox" value="" /></td>
                                                <td className='fs-3'><FaRegFilePdf className=' text_clr1' /></td>

                                            </tr>
                                            <tr>
                                                <td className='text_clr6'>Amazon Shopping E-Gift Card</td>
                                                <td className='text_clr3'>42554313441288</td>
                                                <td className='text_clr3'>5588</td>
                                                <td className='text_clr3'>10/02/2023</td>
                                                <td><input class="form-check-input chekinput" type="checkbox" value="" /></td>
                                                <td className='fs-3'><FaRegFilePdf className=' text_clr1' /></td>

                                            </tr>
                                            <tr>
                                                <td className='text_clr6'>Amazon Shopping E-Gift Card</td>
                                                <td className='text_clr3'>42554313441288</td>
                                                <td className='text_clr3'>5588</td>
                                                <td className='text_clr3'>10/02/2023</td>
                                                <td><input class="form-check-input chekinput" type="checkbox" value="" /></td>
                                                <td className='fs-3'><FaRegFilePdf className=' text_clr1' /></td>

                                            </tr>
                                            <tr>
                                                <td className='text_clr6'>Amazon Shopping E-Gift Card</td>
                                                <td className='text_clr3'>42554313441288</td>
                                                <td className='text_clr3'>5588</td>
                                                <td className='text_clr3'>10/02/2023</td>
                                                <td><input class="form-check-input chekinput" type="checkbox" value="" /></td>
                                                <td className='fs-3 '><FaRegFilePdf className=' text_clr1' /></td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>



                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default page