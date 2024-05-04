import React from 'react'
import TopbarIner from '../component/TopbarIner'
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from 'next/link';
import './Card.css';

function page() {
    return (
        <div>
            <TopbarIner />
            <section className='my-5'>
                <div className='container-fluid'>
                    <div className='row'>
                      
                        <Link className='p-2 backlink' href='/GiftCards' > <AiOutlineArrowLeft  className='backicon'/> Back</Link>

                    </div>
                    <div className='row p-5 border'>
                        <div className='col-md-4'>
                            <img src='../images/fromcardimg.png' className='w-100' alt='img' />
                            <div className='ps-4'>
                                <div className='formtext2 py-2'>Myntra E-Gift Voucher</div>
                                <div className='formtext1 py-2'>Validity: 365 days. Days from the date of<br /> activation</div>
                                <div className='formtext2 pb-2'>Delivery Options</div>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Default radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                    Buy for Self Gift card added to your account
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-4 px-4 pt-3'>

                            <input type="text" class="form-control  inputbordere border-0 w-100" placeholder="500" ></input>


                            <div className='text-end pb-3 textstyle1'>Min: ₹100.00 Max: ₹10,000.00</div>

                            <input type="text" class="form-control  inputbordere border-0 w-100" placeholder="5" ></input>


                            <div className='pb-3 textstyle1'>Maximum quantity 10</div>


                            <div className='py-4 inputbordere'><span>Base amount</span><span className='float-end'>₹500*5</span></div>
                           
                            <div className='pt-3'><span>Total Price</span><span className='float-end'>Total Price</span></div>



                            <div className='py-5'>
                                <button className='frmbtn w-100 py-3' typle='button'>Buy Now</button>
                            </div>


                        </div>
                        <div className='col-md-4'>
                            <div className='text-end'>
                                <button className='frmbtn2 '>Bulk Order</button>
                            </div>
                            <div className='py-2'>
                                <img src='../images/star.png' className='pe-2' /><b>Offers</b>
                            </div>
                            <div className='border-bottom pb-2 my-2 formtext'>Get flat 2,5% worth Zomato E-Gift Card. Applicable on payment via UPI on order value of Rs.499 & above. USE</div>
                            <div className='border-bottom pb-2 my-2 formtext'>Get flat 1% worth Zomato E-Gift Card. Applicable on all payment modes on order value of Rs.499 & above.</div>
                            <div className='border-bottom pb-2 my-3 formtext'>Get flat 2,5% worth Uber E-Gift Card. Applicable on payment via UPI on order value of Rs.499 & above.</div>
                            <div className='border-bottom pb-2 my-3 formtext'>Get flat 1% worth Uber E-Gift Card. Applicable on all payment modes on order value of Rs.499 & above.</div>
                            <div className='border-bottom pb-2 my-3 formtext' >Get flat 1% worth Uber E-Gift Card. Applicable on all payment modes on order value of Rs.499 & above.</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-5'>
                <div className='container-fluid p-5 border'>
                    <ul class="nav nav-tabs border-0 bg-light" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active border-0 tablinktextstyle1 bg-light " id="Description-tab" type='button' data-bs-toggle="tab" data-bs-target="#Description"  role="tab" aria-controls="home" aria-selected="true">Description</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link border-0 tablinktextstyle2" id="Most Popular-tab" data-bs-toggle="tab" type='button' data-bs-target="#Most Popular"  role="tab" aria-controls="profile" aria-selected="false">Terms and Conditions</a>
                        </li>

                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="Description" role="tabpanel" aria-labelledby="Description-tab">

                            <div className='py-5 formtext'>
                                Myntra is India’s most trendiest fashion hub with many international and Indian brand associations. It started as
                                 B2B business selling customized products. Aim of achieving greater heights compelled the company to diversify 
                                 into the world of fashion. Today, Myntra is one platform which can never disappoint you. Myntra has now become 
                                 synonymous to fashion which unravels excellent collection of clothing, home décor and furnishing pertaining to 
                                 the latest trends and fashion. Myntra is driven by the idea - fashion is for all and it should not have any age 
                                 or gender barriers. Thus, it caters to men, women and children of all age groups. This platform promises to 
                                 transform every individual into fashionista and save them from outdated styles. Shoppers can swipe through the 
                                 latest fashion at the comfort of their homes and choose the best product with minimum efforts. India’s trendiest 
                                 fashion revolution is here to transform every wardrobe at the most attractive prices, discounts and deals. When 
                                 it comes to looking the best, you can always count on Myntra.
                            </div>
                        </div>
                        <div class="tab-pane fade" id="Most Popular" role="tabpanel" aria-labelledby="Most Popular-tab">...</div>

                    </div>
                </div>
            </section>
            <section className='my-3'>
                <div className='container-fluid py-5'>
                    <ul class="nav nav-tabs border-0 bg-light pb-4" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active tablinktextstyle3 border-0" id="Similar-tab" data-bs-toggle="tab" data-bs-target="#Similar" type="button" role="tab" aria-controls="home" aria-selected="true">Similar Gift Card</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link tabblnk border-0 tablinktextstyle4 " id="Most Popular-tab" data-bs-toggle="tab" data-bs-target="#Most Popular" type="button" role="tab" aria-controls="profile" aria-selected="false">Most Popular</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="Similar" role="tabpanel" aria-labelledby="Similar-tab">
                            <div className='row'>
                                <div className='col-md-3 p-1'>
                                    <div className='card p-3 pb-1 shadow'>
                                        <img src='../images/cardimg1.png' className='card-img-top w-100' alt='card image' />
                                        <div className='card-body'>
                                            <div className='card-text cardtewxt'>American Eagle E-Gift Card</div>
                                            <div className='row pt-4'>
                                                <div className='col-6 cardintext'>
                                                    Rs. 10–1000
                                                </div>
                                                <div className='col-6 text-end'>
                                                    <button type='button' className='card_button'>10% off</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 p-1'>
                                    <div className='card p-3 pb-1 shadow'>
                                        <img src='../images/cardimg2.png' className='card-img-top w-100' alt='card image' />
                                        <div className='card-body'>
                                            <div className='card-text cardtewxt' >American Eagle E-Gift Card</div>
                                            <div className='row pt-4'>
                                                <div className='col-6 cardintext'>
                                                    Rs. 10–1000
                                                </div>
                                                <div className='col-6 text-end'>
                                                    <button type='button' className='card_button'>10% off</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 p-1'>
                                    <div className='card p-3 pb-1 shadow'>
                                        <img src='../images/cardimg3.png' className='card-img-top' alt='card image' />
                                        <div className='card-body'>
                                            <div className='card-text cardtewxt'>American Eagle E-Gift Card</div>
                                            <div className='row pt-4'>
                                                <div className='col-6 cardintext'>
                                                    Rs. 10–1000
                                                </div>
                                                <div className='col-6 text-end'>
                                                    <button type='button' className='card_button'>10% off</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 p-1'>
                                    <div className='card p-3 pb-1 shadow'>
                                        <img src='../images/cardimg4.png' className='card-img-top' alt='card image' />
                                        <div className='card-body'>
                                            <div className='card-text cardtewxt'>American Eagle E-Gift Card</div>
                                            <div className='row pt-4'>
                                                <div className='col-6 cardintext'>
                                                    Rs. 10–1000
                                                </div>
                                                <div className='col-6 text-end'>
                                                    <button type='button' className='card_button'>10% off</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-3 p-1'>
                                    <div className='card p-3 pb-1 shadow'>
                                        <img src='../images/cardimg5.png' className='card-img-top' alt='card image' />
                                        <div className='card-body'>
                                            <div className='card-text cardtewxt'>American Eagle E-Gift Card</div>
                                            <div className='row pt-4'>
                                                <div className='col-6 cardintext'>
                                                    Rs. 10–1000
                                                </div>
                                                <div className='col-6 text-end'>
                                                    <button type='button' className='card_button'>10% off</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 p-1'>
                                    <div className='card p-3 pb-1 shadow'>
                                        <img src='../images/cardimg6.png' className='card-img-top' alt='card image' />
                                        <div className='card-body'>
                                            <div className='card-text cardtewxt'>American Eagle E-Gift Card</div>
                                            <div className='row pt-4'>
                                                <div className='col-6 cardintext'>
                                                    Rs. 10–1000
                                                </div>
                                                <div className='col-6 text-end'>
                                                    <button type='button' className='card_button'>10% off</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 p-1'>
                                    <div className='card p-3 pb-1 shadow'>
                                        <img src='../images/cardimg7.png' className='card-img-top' alt='card image' />
                                        <div className='card-body'>
                                            <div className='card-text cardtewxt'>American Eagle E-Gift Card</div>
                                            <div className='row pt-4'>
                                                <div className='col-6 cardintext'>
                                                    Rs. 10–1000
                                                </div>
                                                <div className='col-6 text-end'>
                                                    <button type='button' className='card_button'>10% off</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 p-1'>
                                    <div className='card p-3 pb-1 shadow'>
                                        <img src='../images/cardimg8.png' className='card-img-top' alt='card image' />
                                        <div className='card-body'>
                                            <div className='card-text cardtewxt'>American Eagle E-Gift Card</div>
                                            <div className='row pt-4'>
                                                <div className='col-6 cardintext'>
                                                    Rs. 10–1000
                                                </div>
                                                <div className='col-6 text-end'>
                                                    <button type='button' className='card_button'>10% off</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="Most Popular" role="tabpanel" aria-labelledby="Most Popular-tab">...</div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default page