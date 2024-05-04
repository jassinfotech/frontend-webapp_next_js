'use client'
import React, { useState } from 'react';
import { FaSearch, FaSlidersH, FaArrowLeft, FaCheck } from "react-icons/fa";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Sidebarmain from '../component/Sidebarmain';
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/style.scss';
import './coustom.css'
import Cardselect from '../component/Cardselect';
import Googleplaygiftcard from '../component/Googleplaygiftcard';
import Bulkcardlist from '../component/Bulkcardlist';
import Giftcardthreepoint from '../component/Giftcardthreepoint';
function page() {
    const [pagestep, setpage] = useState(2);

    const [step, setStep] = useState(1);
    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='p-3'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='back_btn'><a href='#'> <FaArrowLeft /> Back</a></div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-lg-12 col-md-12 py-4'>
                            <div className="col-md-8 mx-auto pt-4">
                                <ul className="list-unstyled d-flex justify-content-between mb-4">
                                    <li className={`step text-center ${step >= 1 ? 'active' : ''}`}>
                                        {step >= 1 ? <FaCheck className='icon_check text-success' /> : <> <div className='icon_check text-success'> 1 </div> </>}
                                        {step >= 1 ? <> <p className='icon_check text-success'>List your Gift </p> </> : <>List your Gift</>}
                                    </li>
                                    <li className={`step text-center ${step >= 2 ? 'active' : ''}`}>
                                        {step >= 2 ? <>  <FaCheck className='text-success icon_check' /> </> : <> <div className='icon_uncheck icon_check'> 2 </div> </>}
                                        {step >= 2 ? <> <p className='icon_check text-success'>We will verify  </p> </> : <><p className='icon_check text-dark text-center'> We will verify </p></>}
                                    </li>
                                    <li className={`step text-center ${step >= 3 ? 'active' : ''}`}>
                                        {step >= 3 ? <FaCheck className='icon_check text-success ' /> : <> <div className='icon_uncheck icon_check'> 3 </div> </>}
                                        {step >= 3 ? <> <p className='icon_check text-success'>Pay you Cash </p> </> : <><p className='icon_check text-dark'> Pay you Cash </p></>}
                                    </li>


                                </ul>
                                <div className="progress progress_my ">
                                    <div
                                        className="progress-bar bg-success "
                                        role="progressbar"
                                        style={{ width: `${(step / 3) * 100}%` }}
                                        aria-valuenow={(step / 3) * 100}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>

                            <div>
                                {step === 1 && (
                                    <div>
                                        {pagestep === 1 && <Cardselect />}

                                        {pagestep === 2 && <Googleplaygiftcard />}

                                    </div>
                                )}



                            </div>
                            <div className='col-12 mt-4'>
                                {step === 2 && (
                                    <div className='row'>
                                        <div className=' mx-auto'>
                                            <Bulkcardlist />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='col-12'>
                                {step === 3 && (
                                    <div className='row'>
                                        <div className='col-md-12 col-lg-12 mx-auto'>
                                            <div className='row'>
                                                <div className='col-md-8 col-lg-8 mx-auto text-center pt-5'>
                                                    <h4>Your Application is under review</h4>
                                                </div>
                                            </div>
                                            <Giftcardthreepoint />


                                        </div>
                                    </div>

                                )}
                            </div>

                            <div className='col-lg-12 col-md-12'>
                                <div className="text-end">
                                    {step < 3 ? (
                                        <button type="button" className="btn btn-themes" onClick={handleNextStep}>
                                            Next
                                        </button>
                                    ) : (<> {step === 4 ? <></> : <> <button type="submit" className="btn btn-themes" onClick={handleNextStep}>
                                        Submit
                                    </button></>}  </>

                                    )}
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