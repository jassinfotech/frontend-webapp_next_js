import React from 'react'
import { ImCloudUpload } from "react-icons/im";
import { FaStarOfLife } from "react-icons/fa";
function Shopdetail() {


    const handleFileChange = (event) => {
        // Handle the file upload logic here
        console.log(event.target.files[0]);
    }
    return (
        <div>

            <div className='row py-5'>
                <div className='col-lg-11 col-md-11 mx-auto'>
                    <div className='row'>
                        <div className='row shop_detail'>
                            <h5 className='text-center pb-5 shop_h'>Shop detail</h5>
                            <div className='col-md-6'>
                                <div className="mb-4">
                                    <label className="form-label">Business name <span><FaStarOfLife /> </span></label>
                                    <input type="text" className="form-control input" placeholder="Enter your Business name" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-4">
                                    <label className="form-label">Business established year  <span><FaStarOfLife /> </span></label>
                                    <input type="text" className="form-control input" placeholder="Enter Business established year " />
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="mb-4">
                                    <label className="form-label">Turn Over Monthly <span><FaStarOfLife /> </span></label>
                                    <input type="text" className="form-control input" placeholder="Enter Amount" />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="mb-3">
                                    <label className="form-label">Yearly Turn Over <span><FaStarOfLife /> </span></label>
                                    <input type="text" className="form-control input" placeholder="Enter yearly turn over" />
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className="mb-4">
                                    <label className="form-label">Email Id <span><FaStarOfLife /> </span> </label>
                                    <input type="text" className="form-control input" placeholder="Enter Email Id" />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-4">
                                    <label className="form-label">Business Address </label>
                                    <input type="text" className="form-control input" placeholder="Address  " />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="mb-3">
                                    <label className="form-label">Alternate Mobile Number <span><FaStarOfLife /> </span></label>
                                    <input type="text" className="form-control input" placeholder="Enter alternate mobile Nu.." />
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className="mb-4">
                                    <label className="form-label">Pin/Zip Code</label>
                                    <input type="text" className="form-control input" placeholder="Address " />
                                </div>
                            </div>



                            <div className='col-md-3'>
                                <div className="mb-4">
                                    <h6>Upload Business card</h6>
                                    <div className='text-center py-4 upload_card_sp'>
                                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                                        <a id="uploadButton" className='fileuplord' onClick={handleFileChange}> <ImCloudUpload size={35} color='#14A6FF' /></a>
                                        <p>Upload card (optional)</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-9 text-end pt-5'>
                            <div className="my-4 ">
                                    <button type="submit" className="btn btn-themes">
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopdetail