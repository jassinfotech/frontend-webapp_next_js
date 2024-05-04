'use client'
import React, { useState } from 'react';
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import { MdDownload } from "react-icons/md";
import { FaSearch, FaSlidersH, FaEllipsisV } from "react-icons/fa";
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
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 pt-5'>
              <div className="search-box">
                <div className="input-group search_b d-flex">
                  <input type="text" id="search" className="form-control" placeholder="Search Keyword" />
                  <span className="input-group-addon search_icon"><FaSearch /></span>
                </div>

              </div>
            </div>
            <div className='col-md-6 col-lg-6 pt-3'>
              <div className='row'>
                <div className='col-lg-3'>

                  <label for="exampleInputEmail1" className="form-label lable">From</label>
                  <input type="date" className="form-control dete_piker" />

                </div>
                <div className='col-lg-3'>
                  <label for="exampleInputEmail1" className="form-label lable">To</label>
                  <input type="date" className="form-control dete_piker" />
                </div>
                <div className='col-lg-3 pt-4'>
                  <div className="dropdown">
                    <button className="btn dropdown-toggle fliter_btn_2" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                      <FaSlidersH className='fliter_icon' /> Category
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                      <li><a className="dropdown-item active" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                      <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <label for="exampleInputEmail1" className="form-label lable">Sort By</label>
                  <button className='btn btn_theme fliter_btn_2 mt-0'> default</button>
                </div>
              </div>
            </div>

          </div>

          <div className='row pt-3 justify-content-between'>
            <div className='col-lg-3'> </div>
            <div className='col-lg-6 d-flex justify-content-end py-3'>
              <h6><MdDownload /> Download CSV</h6>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 p-2'>
              <table class="table text">
                <thead>
                  <tr>

                    <th>Product </th>
                    <th> Price</th>
                    <th>Date & Time</th>
                    <th>Order_ID</th>
                    <th>Status </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <div className='d-flex font_14'>
                          <img src={data.avatar} className="card_img" alt="Avatar" />
                          {data.card}<br />{data.phoneNumber}


                        </div>
                      </td>



                      <td>₹{data.CardPrice}</td>
                      <td>{data.MarginType}</td>
                      <td>{data.orderid}</td>
                      <td style={{ color: getStatusColor(data.status) }}>{data.status}</td>
                      <td className="dropdown"><FaEllipsisV class="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul class="dropdown-menu  butt" aria-labelledby="dropdownMenuButton1">
                          <li><div class="dropdown-item" href="#">Edit </div></li>
                          <li><div class="dropdown-item" href="#">Activate</div></li>
                          <li><div class="dropdown-item" href="#">Delete</div></li>
                        </ul>
                      </td>

                    </tr>
                  ))}

                </tbody>
              </table>
              <div class="clearfix">
                <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul class="pagination">
                  <li class="page-item disabled"><a href="#">Previous</a></li>
                  <li class="page-item"><a href="#" class="page-link">1</a></li>
                  <li class="page-item"><a href="#" class="page-link">2</a></li>
                  <li class="page-item"><a href="#" class="page-link">3</a></li>
                  <li class="page-item active"><a href="#" class="page-link">4</a></li>
                  <li class="page-item"><a href="#" class="page-link">5</a></li>
                  <li class="page-item"><a href="#" class="page-link">6</a></li>
                  <li class="page-item"><a href="#" class="page-link">7</a></li>
                  <li class="page-item"><a href="#" class="page-link">Next</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="staticSendMail" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-popup">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Send Email To Ram Singh </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='your text...' rows="5"></textarea>
              </div>
              <div className="mb-3">
                <input className="form-control " id="formFileLg" type="file" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className=" btn btn1 btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn2 btn-primary">Send Email</button>
            </div>
          </div>
        </div>
      </div >
      <div className="modal fade" id="staticwhattsapp" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-popup">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Send Message To Ram Singh </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label for="formFileLg" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Type your message...' rows="5"></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className=" btn btn1 btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn2 btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div >


    </>
  )
}

export default page