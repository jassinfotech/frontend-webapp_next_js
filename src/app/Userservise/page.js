'use client'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebarmain from '../component/Sidebarmain';
import { AiOutlineEye } from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import '../scss/style.scss';

function page() {
    const [isShow, setIsShow] = useState(true)

    const cardData = [
        { id: 1, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 2, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 3, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 4, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 5, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 6, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 7, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 8, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 9, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 10, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 11, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },
        { id: 12, image: '../images/smallcardimage.png', title: 'Mntra E Gift card Voucher' },


    ];
    return (
        <>
            <div className='position-relative'>
                <Sidebarmain />
                <section id="main" className='main pt-55_das'>
                    <div className='container-fluid'>
                      
                            <div className=' box_services'>
                                <div className='row'>
                                    <div className='col-md-2'>
                                        <div className='heding'>My Services </div>
                                    </div>
                                    <div className='col-md-3'>
                                        <label className='mb-2' >Filter By</label>
                                        <select class="form-select input_my_s" aria-label="Default select example">
                                            <option selected>Recharge</option>
                                            <option value="1">All category</option>
                                            <option value="2">Gift card</option>
                                            <option value="3">Recharge</option>
                                            <option value="3">Bill payments</option>
                                        </select>
                                    </div>
                                    <div className='col-md-3'>
                                        <label className='mb-2' >Sub category </label>
                                        <select class="form-select  input_my_s" aria-label="Default select example">
                                            <option selected>Mobile Recharge </option>
                                            <option value="1">Mobile Recharge</option>
                                            <option value="2">Metro card Recharge</option>
                                            <option value="3">Fastag Recharge</option>
                                            <option value="3">DTH Recharge</option>
                                        </select>
                                    </div>
                                    <div className='col-md-4'>
                                        <label className='mb-2' >Sub category </label>
                                        <select class="form-select input_my_s " aria-label="Default select example">
                                            <option selected>Jio </option>
                                            <option value="1">Jio </option>
                                            <option value="2">Airtel</option>
                                            <option value="3">Vodafone</option>
                                            <option value="4">BSNL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    {cardData.map(card => (
                                        <div key={card.id} className='col-md-4'>
                                            <div className='box_serv' onClick={()=>setIsShow(true)}>
                                                <div className='row'>
                                                    <div className='col-lg-4'>
                                                        <img src={card.image} alt='images' />
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className='smallcardtext'>{card.title} </div>
                                                    </div>
                                                    <div className='col-lg-2 pt-4 '>
                                                        <a href='#' > <AiOutlineEye size={30} /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                  

                    <div className='position-absolute bg_clr1 position-side_box' style={{ display: isShow ? 'block' : 'none' }}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12 p-4'>
                                    <span className='p-3 bg-white rounded' onClick={()=> setIsShow(false) }><RxCross1  size={22}/></span>
                                </div>
                            </div>

                            <div className='row detailmargin'>
                                <div className='col-lg-12 col-md-12 text-center'>
                                    <h4>
                                    Detail margin
                                    </h4>

                                </div>
                                <div className='col-12 pt-3 pb-2'>
                                    <table class="table table_datas">
                                        <thead>
                                            <tr>
                                                <th >Product Name</th>
                                                <th >Margin type</th>
                                                <th >Min. price</th>
                                                <th >Max. price</th>
                                                <th >Margin</th>
                                                <th >Max. limit</th>
                                                <th >Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> Flipkart E Gift card Voucher</td>
                                                <td>Amount range</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>1.5%</td>
                                                <td>15</td>
                                                <td>Unlimited</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <hr />
                                    <table class="table table_datas ">
                                        <thead>
                                            <tr>
                                                <th >Product Name</th>
                                                <th >Margin type</th>
                                                <th >Min. price</th>
                                                <th >Max. price</th>
                                                <th >Margin</th>
                                                <th >Max. limit</th>
                                                <th >Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td> Flipkart E Gift card Voucher</td>
                                                <td>Amount range</td>
                                                <td>1000</td>
                                                <td>1000</td>
                                                <td>1.5%</td>
                                                <td>15</td>
                                                <td>Unlimited</td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>




                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default page