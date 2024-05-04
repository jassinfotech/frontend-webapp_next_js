'use client'
import React, { useState, useEffect } from 'react';
import { FaSearch, FaSlidersH, FaCheck } from "react-icons/fa";
import Header_v2 from '../component/Header_v2'
import './coustom.css'
import Personaldetails from '../subcomponent/Personaldetails';
import Customerkyc from '../subcomponent/Customerkyc';
import { getApi } from '../helper/apiHelper';
import Thankyou from '../component/Thankyou';
function page() {
    const [step, setStep] = useState(2);
    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };


    const fetchData = async () => {
        try {
          const data = await getApi('/api/user/get-user-kyc-status'); 
          console.log('Data:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      useEffect(() => {
        fetchData()
      }, [])
    return (
        <div>
            <Header_v2 />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 py-4'>
                        <div className="col-md-6 mx-auto pt-4">
                            <ul className="list-unstyled d-flex justify-content-between mb-4">
                                <li className={`step text-center ${step >= 1 ? 'active' : ''}`}>
                                    {step >= 1 ? <FaCheck className='icon_check text-success icon_check' /> : <> <div className='icon_check text-success icon_check'> 1 </div> </>}
                                    {step >= 1 ? <> <p className='icon_check text-success'>Personal Details </p> </> : <>Personal Details</>}
                                </li>
                                <li className={`step text-center ${step >= 2 ? 'active' : ''}`}>
                                    {step >= 2 ? <>  <FaCheck className='icon_check text-success icon_check' /> </> : <> <div className='icon_uncheck icon_check'> 2 </div> </>}
                                    {step >= 2 ? <> <p className='icon_check text-success'>KYC</p> </> : <><p className='icon_check text-dark'> KYC </p></>}
                                </li>
                                <li className={`step text-center ${step >= 3 ? 'active' : ''}`}>
                                    {step >= 3 ? <FaCheck className='icon_check text-success icon_check' /> : <> <div className='icon_uncheck icon_check'> 3 </div> </>}
                                    {step >= 3 ? <> <p className='icon_check text-success'> Approve </p> </> : <><p className='icon_check text-dark'> Approve </p></>}
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
                        <div className='col-md-12 mt-4'>
                            <div>
                                {step === 1 && (
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12 p-4'>
                                            <h6 className='text-center py-3 toptext'>Enter your basic Details</h6>
                                            <Personaldetails handleNextStep={handleNextStep} />
                                        </div>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div className='row'>
                                        <div className='col-md-10 mx-auto'>
                                            <Customerkyc handleNextStep={handleNextStep} />
                                        </div>
                                    </div>
                                )}
                                {step === 3 && (
                                    <Thankyou/>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page