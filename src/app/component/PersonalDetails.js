import React from 'react'
import { FaSearch, FaSlidersH, FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import './custom.css'
function PersonalDetails() {
    return (
        <div className='row'>
            <div className='col-md-4 p-2'>
                <div className='profile_pic'>
                    <img src="user_pic.png" className="w-100" alt="..." />
                    <div className='d-flex justify-content-between pt-3'>
                        <a className='btn btn_up' href='#'>Choose Avtar</a>
                        <a className='btn btn_up' href='#'>Upload</a>
                    </div>
                </div>

                <div className='row p-2'>
                    {/* <div className='col-lg-12 colmd-12 user_img'>
                        <div className='row'>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12 col-md-12'>
                        <div className='row'>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                            <div className='col'>
                                <img src="user_pic.png" className="w-100" alt="..." />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='col-md-8 p-4'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control input" placeholder="Enter your mobile number" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Alternate mobile number</label>
                            <input type="text" className="form-control input" placeholder="Enter your mobile number" />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control input" placeholder="Street address" />
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className="mb-3">

                            <input type="text" className="form-control input" placeholder="Street address line2" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control input" placeholder="Uttar pradesh" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control input" placeholder="Enter city" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Postal/ Zip code</label>
                            <input type="text" className="form-control input" placeholder="Enter Zip code" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Whatsapp number</label>
                            <input type="text" className="form-control input" placeholder="Whatsapp number" />
                        </div>
                    </div>
                    <div className='col-md-12 text-end'>
                        <div className="my-3">
                            <button type="submit" className="btn btn-themes">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails