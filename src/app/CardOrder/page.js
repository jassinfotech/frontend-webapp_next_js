'use client'
import React, { useState } from 'react';
import TopbarIner from '@/app/component/TopbarIner'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from 'react-modal';
import { FiEdit } from 'react-icons/fi';
import { RiStickyNoteLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import '../paymentgetway/Payment.css';
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import SearchDropdown from '../component/SearchDropdown';
import SearchFilter from '../component/SearchFilter';
import "./cardorder.css";

function page() {
  const [selectedValue, setSelectedValue] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalsideviws, setIsmodalsideviwsn] = useState(false);
  const cardData = [
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    {
      cardName: "EaseMyTrip E-Gift Voucher",
      amount: "₹500.00",
      quantity: 10,
      totalAmount: "₹5000.00",
      cashback: "2%",
    },
    // Add more card objects here as needed
  ];
  const searchData = [
    { id: 1, image: '../images/cardimg1.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
    { id: 1, image: '../images/cardimg2.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
    { id: 1, image: '../images/cardimg3.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
    { id: 1, image: '../images/cardimg4.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
  

  ];
  const handleSelect = (value) => {
    console.log("object selectedValue", value)
    setSelectedValue(value);
  };
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
      width: '600px',
      paddingTop: '10px',
      border: '1px solid rgb(196 196 196 / 30%)',
      boxShadow: '2px 5px 60px -32px #28A5C1',

    },
  };
  return (
    <>
      <div className='position-relative'>
        <TopbarIner />
        <div className='container-fluid'>
          <div className='col-md-12'>
            <div className='text_clr py-3'><AiOutlineArrowLeft /> Back</div>
            <div className='row'>
              <div className='col-md-8'>
                <SearchFilter items={searchData} handleSelect={handleSelect} />
                {/* <input className='w-100 p-2 border rounded my-3' type='search' placeholder='search gift card...'></input> */}

                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Card Name/ Card Details</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Amount</th>
                      <th scope="col">Cashback</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cardData.map((card, index) => (
                      <tr key={index}>
                        <td>{card.cardName}</td>
                        <td>{card.amount}</td>
                        <td>{card.quantity}</td>
                        <td>{card.totalAmount}</td>
                        <td>{card.cashback}</td>
                        <td>
                          <div className='d-flex justify-content-between'>
                            <a href='#'><RiDeleteBinLine size={20} /></a>
                            <a href='#' onClick={openModal}><FiEdit size={20} /></a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>


              </div>
              <div className='col-md-4'>
                <div className='border rounded px-2'>
                  <table class="table ">
                    <thead>
                      <tr>
                        <th scope="col textstyle1 ">Gift Card</th>
                        <th scope="col textstyle1 ">%Cashback</th>
                        <th scope="col textstyle1 ">Total Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Amazon</td>
                        <td>3%</td>
                        <td className='textstyle1'>₹970.00</td>
                      </tr>
                      <tr>
                        <td>Amazon</td>
                        <td>3%</td>
                        <td className='textstyle1 '>₹970.00</td>
                      </tr>
                      <tr>
                        <td>Amazon</td>
                        <td>3%</td>
                        <td className='textstyle1 '>₹970.00</td>
                      </tr>
                      <tr>
                        <td>Amazon</td>
                        <td>3%</td>
                        <td className='textstyle1 '>₹970.00</td>
                      </tr>

                    </tbody>

                  </table>
                  <div className='row px-3'>
                    <div className='col-6'>
                      <div>Total Cashback</div>
                    </div>
                    <div className='col-6 text-center'>
                      <div className='textstyle1 '>₹2123.00</div>
                    </div>
                    <div className='col-12 py-3 textstyle1 '>
                      Note: After you buy, your Cashback will be credited
                    </div>
                  </div>

                </div>
                <br /><br />
                <div className='border rounded px-2'>
                  <table class="table ">
                    <thead className=''>
                      <tr>
                        <th scope="col">Card</th>

                        <th scope="col">Total </th>
                      </tr>
                    </thead>
                    <tbody className=''>
                      <tr>
                        <td>Amazon</td>

                        <td className=''>₹970.00</td>
                      </tr>
                      <tr>
                        <td>Flipkart</td>

                        <td>₹970.00</td>
                      </tr>
                      <tr>
                        <td>Movie</td>

                        <td>₹970.00</td>
                      </tr>
                      <tr>
                        <td>PVR</td>

                        <td>₹970.00</td>
                      </tr>

                    </tbody>

                  </table>
                  <div className='row px-3'>
                    <div className='col-6'>
                      <div>Grand Total </div>
                    </div>
                    <div className='col-6 text-center'>
                      <div>₹20000.00</div>
                    </div>
                    <button className='frmbtn1 w-100 py-2 my-3' type='button' href='#'>Pay Now</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='position-absolute bg_clr1'>
        <div className='container-fluid px-4'>
          <div className='col-12 pt-3 pb-2'>
            <span className='p-2 bg-white rounded'><RxCross1 /></span>
          </div>
          <div className='row py-5'>
            <div className='col-md-5 '>
              <img src='./images/amazonimg.png' className='w-100' alt='img' />
            </div>
            <div className='col-md-7'>
              <div className='textstyle2'>Amazon Shopping E-Gift Card</div>
              <div className='textstyle1 py-1'>Validity: 365 days. Days from the date of activation</div>
              <div className='textstyle2 '><span className='pe-4'>SKU</span>     ABC</div>
              <div className='textstyle2 '>Price Range</div>
              <div className='textstyle1 pt-2'> <span className='pe-3 '>₹970.00</span><span className=''>₹970.00</span></div>
            </div>
            <div className='col-12'>
              <SearchDropdown />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <nav>
                <div class="nav nav-tabs pb-1" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                  <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Terms and Conditions</button>
                  <button className='svebtn ms-auto' type='' href=''>Save</button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <p className='textstyle1 bg-white p-3'> Myntra is India’s most trendiest fashion hub with many international and Indian brand associations. It started as B2B business selling customized products. Aim of achieving greater heights compelled the company
                    to diversify into the world of fashion. Today, Myntra is one platform which can never disappoint you. Myntra has now become synonymous to fashion which unravels excellent collection of clothing, home décor and furnishing pertaining
                    to the latest trends and fashion. Myntra is driven by the idea - fashion is for all and it should not have any age or gender barriers. Thus,
                    it caters to men, women and children of all age groups. This platform promises to transform every individual into fashionista and save them
                    from outdated styles. Shoppers can swipe through the latest fashion at the comfort of their homes and choose the best product with minimum
                    efforts. India’s trendiest fashion revolution is here to transform every wardrobe at the most attractive prices, discounts and deals. When
                    it comes to looking the best, you can always count on Myntra.</p>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <p className='textstyle1 bg-white p-3'>
                    Myntra is India’s most trendiest fashion hub with many international and Indian brand associations. It started as B2B business
                    selling customized products. Aim of achieving greater heights compelled the company to diversify into the world of fashion.
                    Today, Myntra is one platform which can never disappoint you. Myntra has now become synonymous to fashion which unravels
                    excellent collection of clothing, home décor
                  </p>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
        <div className='row px-3'>
          <div className='col-12 text-end'>
            <span className='p-2 rounded' onClick={closeModal}><RxCross1 /></span>
          </div>
          <div className='col-md-12  rounded'>
            <div className='pt-3 ps-1 textstyle2'> you Can Edit Only Price and Quantity
            </div>
            <div className='ps-1 textstyle3'>Amazon Shopping E-Gift Card</div>
            <div class="row py-3">
              <div class="col-lg-6 col-md-6 pr-0 m-0">
                <select className="form-select me-2 rounded" value=''>
                  <option value="">500</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className='text-end textstyle4 '>Min: ₹5000.00 Max: ₹10,000.00</div>
              </div>
              <div class="col-lg-6 col-md-6 pl-0 ml-0">
                <input type="number" class="form-control" id="inputPassword2" placeholder="5" />
                <div className='text-end textstyle4 '> Maximum quantity 10</div>
              </div>
              
            </div>


            <div className='text-end py-3'>
              <button className='canselbtn me-3 bg-white'>Cancel</button>
              <button className='svebtn bg-white'>Submit</button>

            </div>
          </div>
        </div>

      </Modal>

    </>
  )
}

export default page