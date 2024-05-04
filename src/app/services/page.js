import React from 'react'
import './services.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { FaRupeeSign } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";

function page() {
    return (
        <>
            <Header />
            <div className='row_padding'>
                <div className='container'>
                    <div className='row '>
                        <div className='col align-items-end'>
                            <div className='heding1'>SERVICES </div>
                            <span className='heding2'>Home</span>
                            <a className='link_contact' href='#'>/SERVICES</a>
                        </div>
                    </div>
                </div>
            </div>
            <section className='pt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div className='text-center heding3 pt-4 pb-5'>SERVICES</div>
                        </div>
                    </div>

                    <div className='row py-5'>
                        <div className='col-lg-4'>
                            <div className="py-5 services_box position-relative">
                                     <div className='rup_ee'><FaRupeeSign/></div>
                                    <div className="card-body">
                                        <h5 className="card-title rech_arge">Recharge</h5>
                                        <p className="card-text pra">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit;</p>
                                        <img  src="rectangle.png" alt="Card image cap" className='w-100'/>
                                    </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className="py-5 services_box position-relative">
                                     <div className='rup_ee'><AiFillBank/></div>
                                    <div className="card-body">
                                        <h5 className="card-title rech_arge">Recharge</h5>
                                        <p className="card-text pra">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit;</p>
                                        <img  src="rectangle1.png" alt="Card image cap" className='w-100'/>
                                    </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="py-5 services_box position-relative">
                                     <div className='rup_ee'><FaRupeeSign/></div>
                                    <div className="card-body">
                                        <h5 className="card-title rech_arge">Recharge</h5>
                                        <p className="card-text pra">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit;</p>
                                        <img  src="rectangle.png" alt="Card image cap" className='w-100'/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row py-3'>
                        <div className='col-lg-4'>
                            <div className="py-5 services_box position-relative">
                                     <div className='rup_ee'><FaRupeeSign/></div>
                                    <div className="card-body">
                                        <h5 className="card-title rech_arge">Recharge</h5>
                                        <p className="card-text pra">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit;</p>
                                        <img  src="rectangle.png" alt="Card image cap" className='w-100'/>
                                    </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className="py-5 services_box position-relative">
                                     <div className='rup_ee'><AiFillBank/></div>
                                    <div className="card-body">
                                        <h5 className="card-title rech_arge">Recharge</h5>
                                        <p className="card-text pra">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit;</p>
                                        <img  src="rectangle1.png" alt="Card image cap" className='w-100'/>
                                    </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="py-5 services_box position-relative">
                                     <div className='rup_ee'><FaRupeeSign/></div>
                                    <div className="card-body">
                                        <h5 className="card-title rech_arge">Recharge</h5>
                                        <p className="card-text pra">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit;</p>
                                        <img  src="rectangle.png" alt="Card image cap" className='w-100'/>
                                    </div>
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