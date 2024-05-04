import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaSearch, FaEdit } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import './custom.css'
function Tabledta() {
  const dummyData = [
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1550,
      expiryDate: '12/03/2023',
      balance: 160.00,

    },
    {
      giftcard: 'Makemytrip Holiday E-Gift Card',
      cardId: 104523501230,
      pin: 1120,
      expiryDate: '13/03/2023',
      balance: 170.00,

    },
    {
      giftcard: 'Flipkart E-Gift Voucher',
      cardId: 104523501230,
      pin: 2543,
      expiryDate: '10/03/2023',
      balance: 125.00,

    },
    {
      giftcard: 'Yatra FHBH Non Cum Multi E-Gift Card',
      cardId: 104523501230,
      pin: 7812,
      expiryDate: '02/03/2023',
      balance: 423.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 9641,
      expiryDate: '01/03/2023',
      balance: 223.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '12/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },
    {
      giftcard: 'Celebyte E-Gift Voucher',
      cardId: 104523501230,
      pin: 1245,
      expiryDate: '01/03/2023',
      balance: 112.00,

    },



  ];

  return (
    <>
      <div className='row'>
        <div className='container'>

          <div className='row'>
            <div className='col-lg-12 p-2'>
              <div className="search-box">
                <div className="input-group input-groups d-flex">

                  <input type="text" id="search" className="form-control" placeholder="Search Keyword" />
                  <span className="input-group-addon search_icon"><FaSearch /></span>
                </div>

              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 p-2'>
              <table class="table">
                <thead>
                  <tr>

                    <th>Gift Card</th>
                    <th>GC ID / Card No</th>
                    <th>Pin / Voucher Code</th>
                    <th>Expiry Date</th>
                    <th>Balance </th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>
                  {dummyData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.giftcard}</td>
                      <td>{data.cardId}</td>
                      <td>{data.pin}</td>
                      <td> {data.expiryDate}</td>
                      <td > ₹ {data.balance} </td>
                      <td>
                        <RiDeleteBinLine className='mx-3'/>
                        <FaEdit data-bs-toggle="modal" data-bs-target="#edirow" /></td>
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
      </div>

      <div className="modal fade" id="edirow" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-popup">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Edit Details </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-6 col-form-label">Gc ID / Card Number</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control col-sm-2 col-form-label" id="exampleFormControlInput1" placeholder="Subject" />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-6 col-form-label">Pin Number</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control col-sm-2 col-form-label" id="exampleFormControlInput1" placeholder="Subject" />
                </div>
              </div>

              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-6 col-form-label">Expiry Date</label>
                <div class="col-sm-6">
                  <input type="date" class="form-control col-sm-2 col-form-label" id="exampleFormControlInput1" placeholder="Subject" />
                </div>
              </div>


            </div>
            <div className="modal-footer  d-flex justify-content-center">
              <button type="button" className=" btn btn1 btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn2 btn-primary">OK </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Tabledta