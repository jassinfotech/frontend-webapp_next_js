'use client'
import React, { useState } from 'react';
import { FaSearch, FaSlidersH, FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import Modal from 'react-modal';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../Personaldetails/coustom.css';
import Shopdetail from '../subcomponent/Shopdetail';
import Personaldetails from '../subcomponent/Personaldetails';
import Corporateuserkyc from '../subcomponent/Corporateuserkyc';
import './corporateuser.css'
import Retaileragreement from '../subcomponent/Retaileragreement';




function page() {
    const [step, setStep] = useState(5);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpens, setIsOpens] = React.useState(false);
    const [manualkyc, setManualkyc] = React.useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleWitmodal = () => {
        setStep((prevStep) => prevStep + 1);
        setIsOpen(false);
    };
    const handlePreviousStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access the form data from the 'formData' state variable
    };

  

    const handleFileChange = (event) => {
        // Handle the file upload logic here
        console.log(event.target.files[0]);
    }
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    function openModals() {
        setIsOpens(true);
    }
    function closeModals() {
        setIsOpens(false);
    }
    function manualkycStep() {
        setManualkyc(true)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '466px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',
        },
    };
    return (
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 py-4'>
                        <div className="col-md-10 offset-md-1 pt-4">
                            <ul className="list-unstyled d-flex justify-content-between mb-4">
                                <li className={`step text-center ${step >= 1 ? 'active' : ''}`}>
                                    {step >= 1 ? <FaCheck className='icon_check text-success icon_check' /> : <> <div className='icon_check text-success icon_check'> 1 </div> </>}
                                    {step >= 1 ? <> <p className='icon_check text-success'>Personal Details </p> </> : <>Personal Details</>}
                                </li>
                                <li className={`step text-center ${step >= 2 ? 'active' : ''}`}>
                                    {step >= 2 ? <>  <FaCheck className='icon_check text-success icon_check' /> </> : <> <div className='icon_uncheck icon_check'> 2 </div> </>}
                                    {step >= 2 ? <> <p className='icon_check text-success'>Shop Details </p> </> : <><p className='icon_check text-dark'> Shop Details </p></>}
                                </li>
                                <li className={`step text-center ${step >= 3 ? 'active' : ''}`}>
                                    {step >= 3 ? <FaCheck className='icon_check text-success icon_check' /> : <> <div className='icon_uncheck icon_check'> 3 </div> </>}
                                    {step >= 3 ? <> <p className='icon_check text-success'> KYC </p> </> : <><p className='icon_check text-dark'> KYC </p></>}
                                </li>
                                <li className={`step text-center ${step >= 4 ? 'active' : ''}`}>
                                    {step >= 4 ? <FaCheck className='icon_check text-success icon_check' /> : <> <div className='icon_uncheck icon_check'> 4 </div> </>}
                                    {step >= 4 ? <> <p className='icon_check text-success'> Agreement </p> </> : <><p className='icon_check text-dark'> Agreement </p></>}
                                </li>
                                <li className={`step text-center ${step >= 5 ? 'active' : ''}`}>
                                    {step >= 5 ? <FaCheck className='icon_check text-success icon_check' /> : <> <div className='icon_uncheck icon_check'> 5 </div> </>}
                                    {step >= 5 ? <> <p className='icon_check text-success'> Approve </p> </> : <><p className='icon_check text-dark'> Approve </p></>}
                                </li>

                            </ul>
                            <div className="progress progress_my ">
                                <div
                                    className="progress-bar bg-success "
                                    role="progressbar"
                                    style={{ width: `${(step / 5) * 100}%` }}
                                    aria-valuenow={(step / 5) * 100}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                        <div className='col-md-12 mt-4'>
                            <form onSubmit={handleSubmit}>
                                {step === 1 && (
                                    <div className='row'>
                                        <div className='col-lg-12 col-md-12 p-4'>
                                            <h6 className='text-center py-3'><b>Enter your basic Details</b></h6>
                                            <Personaldetails />
                                        </div>
                                    </div>
                                )}
                                {step === 2 && (
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <Shopdetail />
                                        </div>
                                    </div>
                                )}
                                {step === 3 && (
                                    <div className='row'>
                                        <div className='col-md-12 col-lg-12'>
                                            <Corporateuserkyc />
                                        </div>
                                    </div>

                                )}

                                {step === 4 && (
                                    <div className='row'>
                                        <div className='col-md-12 col-lg-12 mx-auto'>
                                            <Retaileragreement />
                                        </div>
                                    </div>

                                )}
                                {step === 5 && (
                                    <div className='row'>
                                        <div className='col-md-12 col-lg-12 mx-auto'>

                                            <div className='row'>
                                                <div className='col-md-8 col-lg-8 mx-auto text-center pt-5'>
                                                    <h4>Your Application is under review</h4>
                                                </div>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-6 col-lg-6 mx-auto'>
                                                    <img src='thanks.png' className='w-100'></img>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                )}

                               </form>
                        </div>
                        {/* <div className='col-lg-12 col-md-12'>
                            <div className="text-end">
                                {step < 4 ? (
                                    <button type="button" className="btn btn-themes" onClick={handleNextStep}>
                                        Next
                                    </button>
                                ) : (<> {step === 5 ? <></> : <> <button type="submit" className="btn btn-themes" onClick={handleNextStep}>
                                    Submit
                                </button></>}  </>

                                )}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>




            <Modal isOpen={modalIsOpens} onRequestClose={closeModals} style={customStyles} contentLabel="Example Modal">
                <div className='row'>
                    <div className='col-md-12 col-lg-12'>
                        <h6 className='text-center p-5 text-red'>
                            Currently Digital Kyc Facing Issue
                        </h6>
                    </div>
                    <div className='col-md-12 col-lg-12'>
                        <div className='row'>
                            <div className='col-md-8 mx-auto d-flex justify-content-between'>
                                <button className='btn btn_them text-dark' onClick={closeModals}>Cancel</button>
                                <button className='btn btn_them bg-t border-dark' onClick={handleWitmodal}>Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
           
        </>
    )
}

export default page