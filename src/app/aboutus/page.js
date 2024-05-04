import React from 'react'
import './aboutus.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillYoutube, AiFillTwitterCircle, AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

function page() {
    return (
        <>
            <Header />
            <div className='row_padding'>
                <div className='container'>
                    <div className='row '>
                        <div className='col align-items-end'>
                            <div className='heding1'>ABOUT US</div>
                            <span className='heding2'>Home</span>
                            <a className='link_contact' href='#'>/ABOUT US</a>
                        </div>
                    </div>
                </div>
            </div>
            <section className='pt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='text-center heding3 py-4'>ABOUT US</div>
                        </div>
                    </div>

                    <div className='row py-2 mb-5'>
                        <div className='heding3 pb-4 '>Our story</div>
                        <div className='col-md-6 pe-0 card_home'>
                            <div className=' w-50'>
                                <div className='card-body bg_home'>
                                    <div className='card-title ps-2 pt-2'>Prepaid Rechage</div>
                                    <div className='card-text ps-2 pb-2'>Lorem ipsum dolor sit amet, consectet</div>
                                </div>
                                <img src="rectangle2.png" alt="Card image cap" className='w-100' />
                            </div>
                            <div className='text-end'>
                                <span className='half_border text-white px-0'>_______________________</span>
                            </div>
                            <div className='date'>2012</div>
                            <div className='pra_g'>
                                <span>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit<br />. Morbi eu pellentesque <br />augue, in volutpat tellus.</span>
                            </div>
                        </div>
                        <div className='col-md-6 bdr_left ps-0 mt-5 pt-5'>
                            <div className=' w-50 ms-auto m-5 pt-5'>
                                <div className='card-body bg_home mt-5 '>
                                    <div className='card-title ps-2 pt-2'>Hotel Booking</div>
                                    <div className='card-text ps-2 pb-2'>Lorem ipsum dolor sit amet, consectet</div>
                                </div>
                                <img src="rectangle2.png" alt="Card image cap" className='w-100' />
                            </div>
                            <div className=''>
                                <span className='half_border text-white px-0'>_______________________</span>
                            </div>
                            <div className='date_2'>2018</div>
                            <div className=''>
                                <span className='mx-auto pra_lo d-flex justify-content-center'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit<br />. Morbi eu pellentesque <br />augue, in volutpat tellus.</span>
                            </div>

                        </div>
                        <div className='col-md-6 pe-0 card_home'>
                            <div className=' w-50'> 
                                <div className='card-body bg_home'>
                                    <div className='card-title ps-2 pt-2'>Flight booking</div>
                                    <div className='card-text ps-2 pb-2'>Lorem ipsum dolor sit amet, consectet</div>
                                </div>
                                <img src="rectangle2.png" alt="Card image cap" className='w-100' />
                            </div>
                            <div className='text-end'>
                                <span className='half_border text-white'>_______________________</span>
                            </div>
                            <div className='date'>2020</div>
                            <div className='pra_g'>
                                <span>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit <br/>. Morbi eu pellentesque <br />augue, in volutpat tellus.</span>
                            </div>
                        </div>
                        <div className='col-md-6 bdr_left ps-0 pt-5 '>
                            <div className=' w-50 ms-auto m-5 pt-5'>
                                <div className='card-body bg_home mt-5 '>
                                    <div className='card-title ps-2 pt-2'>Gift Card Live</div>
                                    <div className='card-text ps-2 pb-2'>Lorem ipsum dolor sit amet, consectet</div>
                                </div>
                                <img src="rectangle2.png" alt="Card image cap" className='w-100' />
                            </div>
                            <div className=''>
                                <span className='half_border text-white'>_______________________</span>
                            </div>
                            <div className='date_2'>2022</div>
                            <div className=''>
                                <span className='mx-auto pra_lo d-flex justify-content-center'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit<br />. Morbi eu pellentesque <br />augue, in volutpat tellus.</span>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='clint_counter'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3 py-5 px-2 text-center'>
                                <div className='conter_text'><h4>2.5 k</h4></div>
                                <div className='cardtext1'> Transactions</div>

                            </div>
                            <div className='col-md-3  py-5 px-2  text-center'>

                                <div className='conter_text'><h4>5.5 k</h4></div>
                                <div className='cardtext1'> Our Customer</div>

                            </div>
                            <div className='col-md-3 py-5 px-2 text-center'>

                                <div className='conter_text'><h4>21.5 k</h4></div>
                                <div className='cardtext1'> Our Customer </div>

                            </div>

                            <div className='col-md-3 py-5 px-2 text-center '>
                                <div className='conter_text'><h4>3.5 k</h4></div>
                                <div className='cardtext1'> Our Customer </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='row py-5'>
                        <div className='col-lg-6'>
                            <img src="ab_img.png" alt="Card image cap" className='w-100' />
                        </div>
                        <div className='col-lg-6 about_text'>
                            <h4>About us</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing
                            </p>
                            <div>
                                <h5>Social media link:-<img src="Frame.svg" alt="Card image cap" className='ps-4' /></h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='textmoral_bg  '>
                    <div className='container'>
                        <div className='row py-5'>
                            <div className='col-md-5 '>
                                <div className='usertext'>
                                    <p className='p-3'>  Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, ”
                                    </p>
                                    <div className='row bg-clr1 p-0 m-0 py-3'>
                                        <div className='col-lg-2'>
                                            <img src="images/card-img4.png" className='bg_img_clr' />
                                        </div>
                                        <div className='col-lg-4 col-md-4'>
                                            <div className=''><b>Ram Singh</b></div>
                                            <div>Customer</div>
                                        </div>
                                        <div className='col-md-6 col-lg-6 text-end'>
                                            <div className='pt-2'>10 days ago</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-md-5'>
                                <div className='usertext'>
                                    <p className='p-3'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, ”
                                    </p>
                                    <div className='row bg-clr1 p-0 m-0 py-3'>
                                        <div className='col-lg-2'>
                                            <img src="images/card-img4.png" className='bg_img_clr' />
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className=''><b>Alina </b></div>
                                            <div>Partner</div>
                                        </div>
                                        <div className='col-lg-6 text-end'>

                                            <div className='pt-2'>10 days ago</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-2'>
                                <a href='#' className='lef_t' data-bs-slide="prev" ><AiFillLeftCircle /></a>
                                <a href='#' className='lef_t' ><AiFillRightCircle /></a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page