'use client'
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import '../scss/style.scss';
import { MdArrowBack } from "react-icons/md";

const page = () => {

    const dummyData = [
        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Success",
            date: "10/02/2023",
            time: "10:44 PM",
        },
        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Success",
            date: "10/02/2023",
            time: "10:44 PM",
        },
        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Success",
            date: "10/02/2023",
            time: "10:44 PM",
        },
        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "-1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Success",
            date: "10/02/2023",
            time: "10:44 PM",
        },

        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "-1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Success",
            date: "10/02/2023",
            time: "10:44 PM",
        },
        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "-1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Failed",
            date: "10/02/2023",
            time: "10:44 PM",
        },
        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "-1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Failed",
            date: "10/02/2023",
            time: "10:44 PM",
        },
        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "-1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Failed",
            date: "10/02/2023",
            time: "10:44 PM",
        },
        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "-1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Failed",
            date: "10/02/2023",
            time: "10:44 PM",
        },
        {
            description: "Recharge Jio ",
            wallet: 'Mobile',
            amount: "-1000.00",
            openingBalance: "₹ 5000.00",
            orderId: "42554313441288",
            status: "Failed",
            date: "10/02/2023",
            time: "10:44 PM",
        },
    ];
    return (
        <>

            <Sidebarmain />
            <section id="main" className='main pt-55_das'>
                <div className='p-5 pt-3'>
                    <div className='row'>
                        <div className='col-12 pt-2'>
                            <div className='ancor_text'><span><MdArrowBack /></span> Back</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 p-5 money_to_wallet'>
                            <h5 className='pb-5 pt-3'>Add Money To wallet</h5>
                            <div className="mb-4">
                                <input type="text" className="form-control" placeholder="1000" />
                                <p className='text_add_m text-end'>Add money Charges</p>
                            </div>
                            <div className='select_amout '>
                                <ul> <li>
                                    <a href='#'>₹ 100</a>
                                </li>
                                    <li>
                                        <a href='#'>₹ 200</a>
                                    </li>
                                    <li>
                                        <a href='#'>₹ 300</a>
                                    </li>
                                    <li>
                                        <a href='#'>₹ 400</a>
                                    </li>
                                    <li>
                                        <a href='#'>₹ 500</a>
                                    </li>
                                </ul>
                                <div class="clearfix"></div>
                            </div>

                            <div className="mt-5">
                                <label className='pb-1'>Have a coupon code?</label>
                                <input type="text" className="form-control" placeholder="Enter Promocode" />
                            </div>

                            <div className="mt-5">
                                <button className='btn wallet_button w-100 py-3'>Add Money To Wallet</button>
                            </div>

                        </div>

                        <div className='col-md-8'>
                            <div className='row'>
                                <div className='col-lg-12 col-md-12'>
                                    <h3></h3>
                                </div>
                                <div className='col-lg-12 col-md-12 table_show_data'>

                                   <div className='table_box_f'>
                                    <h5 className='text-center py-4 pt-0'>Add Money Charges</h5>
                                   <table className="table table_data_p table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Payment Mode</th>
                                                <th>Card Type</th>
                                                <th>GST%</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dummyData.map((data, index) => (
                                                <tr key={index}>
                                                    <td>WALLET</td>
                                                    <td>(Others)</td>
                                                    <td>1,90% + GST</td>
                                                 
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                   </div>
                                </div>

                                {/* <div className='col-lg-12 col-md-12 table_show_data'>
                                    <table className="table table_data_p">
                                        <thead>
                                            <tr>
                                                <th>Description</th>
                                                <th>Amount</th>
                                                <th>Opening Balance</th>
                                                <th>Order_ID</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dummyData.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{data.description} <br /> {data.wallet}</td>
                                                    <td className={parseFloat(data.amount) < 0 ? 'text-danger' : 'text-success'}>
                                                        {data.amount}
                                                    </td>
                                                    <td>{data.openingBalance}</td>
                                                    <td>{data.orderId}</td>
                                                    <td className={data.status === 'Success' ? 'text-success' : 'text-danger'}>
                                                        {data.status}
                                                    </td>
                                                    <td>{data.date} <br /> {data.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div> */}
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page