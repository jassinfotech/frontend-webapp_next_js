'use client'
import React, { useState } from 'react';
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import { MdDownload } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaSearch, FaSlidersH, FaEllipsisV } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md"
import './cardisting.css'
const page = () => {
  const dummyData = [
    {
      card: 'Myntra E-Gift Voucher',
      phoneNumber: 'EGCGBHME001',
      CardPrice: '10-500',
      orderid: 'OD117244521322000',
      MarginType: 'xyz',
      Margin: '1.5%',
      day: 'Unlimited',
      status: "Success",
      avatar: 'https://blog.woohoo.in/wp-content/uploads/2020/06/flikart-gift-cards.png',
    },
    {
      card: 'Myntra E-Gift Voucher',
      phoneNumber: 'EGCGBHME001',
      CardPrice: '10-500',
      MarginType: 'xyz',
      orderid: 'OD117244521322000',
      Margin: '1.5%',
      day: 'Unlimited',
      status: "Failed",
      avatar: 'https://blog.woohoo.in/wp-content/uploads/2020/06/flikart-gift-cards.png',
    },

    {
      card: 'Myntra E-Gift Voucher',
      phoneNumber: 'EGCGBHME001',
      CardPrice: '10-500',
      MarginType: 'xyz',
      orderid: 'OD117244521322000',
      Margin: '1.5%',
      day: 'Unlimited',
      status: "Pending",
      avatar: 'https://blog.woohoo.in/wp-content/uploads/2020/06/flikart-gift-cards.png',
    },
    {
      card: 'Myntra E-Gift Voucher',
      phoneNumber: 'EGCGBHME001',
      CardPrice: '10-500',
      orderid: 'OD117244521322000',
      MarginType: 'xyz',
      Margin: '1.5%',
      day: 'Unlimited',
      status: "InProgress",
      avatar: 'https://blog.woohoo.in/wp-content/uploads/2020/06/flikart-gift-cards.png',
    },
    {
      card: 'Myntra E-Gift Voucher',
      phoneNumber: 'EGCGBHME001',
      CardPrice: '10-500',
      orderid: 'OD117244521322000',
      MarginType: 'xyz',
      Margin: '1.5%',
      day: 'Unlimited',
      status: "Cancelled",
      avatar: 'https://blog.woohoo.in/wp-content/uploads/2020/06/flikart-gift-cards.png',
    },

  ];
  const getStatusColor = (status) => {
    if (status === "Success") {
      return "green";
    } else if (status === "Failed" || status === "Cancelled") {
      return "red";
    } else if (status === "InProgress") {
      return "yellow";
    } else {
      return "black"; // Default color if status is not recognized
    }
  };

  return (
    <>
      <Sidebarmain />
      <section id="main" className='main'>
        <div className='container-fluid p-5'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text_clr py-3'><AiOutlineArrowLeft /> Back</div>
            </div>

          </div>
          <div className='row'>
            <div className='col-md-6'>
              <h3 className='py-3 text_style1'>Order details</h3>
            </div>
            <div className='col-md-6'>
              <div className='text_style2 py-3 text-end'> Help?</div>
            </div>

          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='p-3 shadow1 '>
                <div className=''>
                  <span className='mytext1'>Paid on 20/06/2023 10:12 PM</span>
                  <span className='text-succes float-end'>Successful</span>
                </div>
                <div className='py-2 mytext2 fs-5'>Product name</div>
                <div>
                  <img src='./images/cardsmallimg1.png' className='pe-4' />
                  <span className='mytext2'>Myntra E-Gift Voucher</span>
                </div>
                <div className='py-3'>
                  <img src='./images/cardsmallimg3.png' className='pe-4' />
                  <span className='mytext2'>Flipkart E-Gift Voucher</span>
                </div>
                <div>
                  <img src='./images/cardsmallimg3.png' className='pe-4' />
                  <span className='mytext2'>Peter England E-Gift Voucher</span>
                </div>
                <div className='mytext2 fs-5 pt-2 pb-5'>Quantity : 10</div>
              </div>
              <div className=' py-3'>
                <button className='bottombtn' type='button'>Order Again</button>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row pb-3'>
                <div className='col-md-5'>
                  <button className='bg-white border rounded tabletopbtn1 w-100' type='button'>Print Order</button>
                </div>
                <div className='col-md-7'>
                  <button className='bg-white border rounded tabletopbtn2 w-100' type='button'>
                    <img src='./images/downloadsmallimg.png' className='pe-5' alt='img' />
                    Download invoice
                    <img src='./images/Downloadicon.png' className='ps-5' alt='img' />
                  </button>
                </div>
              </div>
              <div className='p-4 shado'>
                <table class="table w-100 ">
                  <thead className=''>
                    <tr className=''>
                      <th className='border-0 text_style2' scope="col">Order Details</th>
                      <th className='border-0 text_style2 text-end' scope="col ">DMT wallet</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr >
                      <td className='border-0 tabletext1'>Base amount</td>
                      <td className='text-end border-0 tabletext2'><MdCurrencyRupee />500</td>
                    </tr>
                    <tr>
                      <td className=' border-0'></td>
                      <td className='text-end border-0 tabletext2'><span className='smalltext '>Myntra E-Gift Voucher</span><MdCurrencyRupee />500</td>
                    </tr>
                    <tr>
                      <td className=' border-0'></td>
                      <td className='text-end border-0 tabletext2'><span className='smalltext'>Myntra E-Gift Voucher</span><MdCurrencyRupee />500</td>
                    </tr>
                    <tr>
                      <td className=' border-0'></td>
                      <td className='text-end border-0 tabletext2'><span className='smalltext'>Myntra E-Gift Voucher</span><MdCurrencyRupee />500</td>
                    </tr>
                    <tr>
                      <td className=' border-0 tabletext1'>GST</td>
                      <td className='text-end border-0 tabletext2'><span className='smalltext'>Tax</span><MdCurrencyRupee />20</td>
                    </tr>
                    <tr>
                      <td className=' border-0 tabletext1'>Coupon</td>
                      <td className='text-end border-0 tabletext2'><span className='smalltext'>Applied</span><MdCurrencyRupee />50</td>
                    </tr>
                    <tr className='border-bottom'>
                      <td className=' border-0 tabletext1 pb-5'>Discount</td>
                      <td className='text-end border-0 tabletext2 pb-5'><span className='smalltext'>Applied</span><MdCurrencyRupee />10</td>
                    </tr>
                    <tr className=''>
                      <td className=' border-0 table_text3  fs-3'>Total Amount</td>
                      <td className='text-end border-0 tabletext2'><MdCurrencyRupee />2540</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default page