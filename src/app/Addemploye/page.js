'use client'
import React, { } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import '../scss/style.scss';
import './page.css';
function page() {
    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>

                <div className='container-fluid p-5'>
                    <div className='row'>
                        <div className='col'>
                            <div className='employe_text1'>Employee Information</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 p-2'>
                            <div className='profile_pic'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                                <div className='d-flex justify-content-between py-3'>
                                    <a className='btn imgbtn1' href='#'>Choose Avtar</a>
                                    <a className='btn  imgbtn2 px-4' href='#'>Upload</a>
                                </div>
                            </div>

                            <div className='row '>
                                <div className='col-lg-12 col-md-12 user_img px-5 '>
                                    <div className=' shadoww bg-white py-2'>
                                        <div className='row justify-content-center pb-2'>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                        </div>
                                        <div className='row justify-content-center'>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                            <div className='col-2'>
                                                <img src="user_pic.png" className="w-100" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-8 p-4'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="mb-4">
                                        <label className="form-label formtext1">Name</label>
                                        <input type="email" className="form-control input" placeholder="Enter Employee Name" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-4">
                                        <label className="form-label formtext1">Email </label>
                                        <input type="text" className="form-control input" placeholder="Enter Employee Employee" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-4">
                                        <label className="form-label formtext1">Alternate mobile number  </label>
                                        <input type="text" className="form-control input" placeholder="Enter Alternate Number" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-4">
                                        <label className="form-label formtext1">What,sapp number</label>
                                        <input type="text" className="form-control input" placeholder="Enter Whatsapp Number" />
                                    </div>
                                </div>
                               
                                
                                <div className='col-12'>
                                    <div className="mb-4">
                                        <label className="form-label formtext1">Address</label>
                                        <input type="text" className="form-control input" placeholder="Address line 1" />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control input" placeholder="Address line 2" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-4">
                                        <label className="form-label formtext1">State</label>
                                        <input type="text" className="form-control input" placeholder="Search State" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-4">
                                        <label className="form-label formtext1">City</label>
                                        <input type="text" className="form-control input" placeholder="Search City" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-4">
                                        <label className="form-label formtext1">Postal/ Zip code</label>
                                        <input type="text" className="form-control input" placeholder="Enter Zip code" />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-4">
                                        <label className="form-label formtext1">Add balance </label><span> (Optional)</span>
                                        <input type="text" className="form-control input" placeholder="Enter amount" />
                                    </div>
                                </div>

                                <div className='col-md-12 text-end'>
                                    <div className="my-6">
                                        <button type="submit" className="btn btn-themes">
                                            Submit
                                        </button>
                                    </div>
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