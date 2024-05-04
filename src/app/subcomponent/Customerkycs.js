import React, { useState } from 'react'
import { FaSearch, FaSlidersH, FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import Modal from 'react-modal';
import Aadharkyc from './Aadharkyc';
import Pancardkyc from './Pancardkyc';
import Gstkyc from './Gstkyc';
const Customerkycs = () => {
    const [kycstatus, setkycStatus] = useState(1)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [aadhar, setAadhar] = useState(true);
    const [aadharstatus, setAadharstatus] = useState(0);
    const [panstatus, setPanstatus] = useState(true);
    const [gststatus, setGststatus] = useState(true);
    const [modalIsOpens, setIsOpens] = React.useState(false);
    const [activeStep, setActiveStep] = useState(0);
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

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '466px',
            height: '341px',
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',
        },
    };

    const handleStepClick = (step) => {
        setActiveStep(step);
    };
    const customotpStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '357px',
            height: '395px',
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',

        },
    };
    return (
        <>
            {activeStep === 0 ? <div>
                <div className='row pt-3'>
                    <div className='col-lg-6'>
                        <h5 className='text-center pb-4 kyctext2'>Kyc detail</h5>
                        <div class="stepper d-flex flex-column ml-2">
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class={`rounded-circle_f mb-1 border ${aadhar === true ? 'active bg-theme text-white' : ''}`}>{aadhar === true ? <><FaCheck /></> : <></>} </div>
                                    <div class="line h-100" style={{ backgroundColor: '' }}></div>
                                </div>
                                <div className='m-3 mt-0' style={{ width: "490px" }}>
                                    <div class="card text-dark mb-3 bg-transparent"  style={{ borderColor:"#DCD9D9", borderRadius: "5px" }} >
                                        <div class="card-header bg-transparent">
                                            <div className='d-flex justify-content-between'>
                                                <h6 className='kyctext1'> Aadhar kyc </h6>
                                                <button className='v_btn' onClick={() => handleStepClick(1)}> Verify </button>
                                            </div>
                                        </div>
                                        <div class="card-body bg-transparent py-4">
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum sapien ut tellus convallis interdum. In et accumsan velit. Integer condimentum Integer condimentum velit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                    <div class={`rounded-circle_f mb-1 border ${panstatus === true ? 'active bg-theme text-white' : ''}`}>{panstatus === true ? <><FaCheck /></> : <></>} </div>
                                    <div class="line h-100"></div>
                                </div>
                                <div className='m-3 mt-0' style={{ width: "490px" }}>
                                    <div class="card text-dark mb-3 bg-transparent" style={{ borderColor:"#DCD9D9", borderRadius: "5px" }} >
                                        <div class="card-header bg-transparent">
                                            <div className='d-flex justify-content-between'>
                                                <h6 className='kyctext1'> Pan </h6>
                                                <button className='v_btn' disabled onClick={() => handleStepClick(2)}> Verify </button>
                                            </div>
                                        </div>
                                        <div class="card-body bg-transparent py-4">
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum sapien ut tellus convallis interdum. In et accumsan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex mb-1">
                                <div class="d-flex flex-column pr-4 align-items-center">
                                <div class={`rounded-circle_f mb-1 border ${gststatus === true ? 'active bg-theme text-white' : ''}`}>{gststatus === true ? <><FaCheck /></> : <></>} </div>
                            
                                    <div class="line h-100 d-none"></div>
                                </div>
                                <div className='m-3 mt-0' style={{ width: "490px" }}>
                                    <div class="card text-dark mb-3 bg-white" >
                                        <div class="card-header bg-white">
                                            <div className='d-flex justify-content-between'>
                                                <h6> Gst</h6>
                                                <button className='v_btn' disabled onClick={() => handleStepClick(3)}> Verify </button>
                                            </div>
                                        </div>
                                        <div class="card-body bg-white">
                                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum sapien ut tellus convallis interdum. In et accumsan velit. Integer condimentum Integer condimentum velit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3  pb-5'>
                        <h5 className='kyctext2'>Non kyc</h5>
                        <div className='text_kyc pt-3'>
                            <p>You can sell and purchase<br /> only 5000.</p>
                        </div>
                        <div className='text_kyc'>
                            <p>You can sell and purchase<br /> only 5000.</p>
                        </div>
                        <div className='text_kyc'>
                            <p>You can sell and purchase<br /> only 5000.</p>
                        </div>
                        <div className='text_kyc'>
                            <p>You can sell and purchase<br /> only 5000.</p>
                        </div>
                        <div className='text_kyc'>
                            <p>You can sell and purchase<br /> only 5000.</p>
                        </div>
                        <div className='text_kyc'>
                            <p>You can sell and purchase<br /> only 5000.</p>
                        </div>

                    </div>
                    <div className='col-lg-3  pb-5'>
                        <h5 className='kyctext2'>With kyc</h5>
                        <div className='text_kyc1 pt-3'>
                            <p>You can sell and purchase <br /> only 100000 Above.  </p>
                        </div>
                        <div className='text_kyc1 '>
                            <p>You can sell and purchase <br /> only 100000 Above.  </p>
                        </div>
                        <div className='text_kyc1 '>
                            <p>You can sell and purchase <br /> only 100000 Above.  </p>
                        </div>
                        <div className='text_kyc1 '>
                            <p>You can sell and purchase <br /> only 100000 Above.  </p>
                        </div>
                        <div className='text_kyc1 '>
                            <p>You can sell and purchase <br /> only 100000 Above.  </p>
                        </div>
                        <div className='text_kyc1 '>
                            <p>You can sell and purchase <br /> only 100000 Above.  </p>
                        </div>
                    </div>
                </div>
                <div className='bg-info'>
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                        <div className='row'>
                            <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                                <h6>Information</h6>
                            </div>
                            <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                                <a onClick={closeModal}><AiOutlineClose size={23} /></a>
                            </div>
                            <div className='col-md-12 col-lg-12'>
                                <h4 className='text-center p-5 text_kyc2'>
                                    Are you sure  you Skip kyc Step?
                                </h4>
                            </div>
                            <div className='col-md-12 col-lg-12 mt-4'>
                                <div className='row'>
                                    <div className='col-md-8 mx-auto d-flex justify-content-center'>
                                        <button className='btn btn_them1 text-dark me-2' onClick={closeModal}>Cancel</button>
                                        <button className='btn btn_ok ms-2'>Ok</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className='bg-info'>
                    <Modal isOpen={modalIsOpens} style={customotpStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                        <div className='row'>
                            <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                                <h6></h6>
                            </div>
                            <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                                <a onClick={closeModals}><AiOutlineClose size={23} /></a>
                            </div>
                            <div className='col-md-12 col-lg-12 '>
                                <div className='text-center mx-auto p-3'>
                                    <img src='icon _envelope.png'></img>
                                </div>
                                <h5 className='text-drck text-center pt-3'>We sent your code</h5>
                                <p className='text-center'>
                                    Enter the confirmation code below
                                </p>
                            </div>
                            <div className='col-md-12 col-lg-12 pt-3'>
                                <input class="form-control input " type="text" placeholder="Enter OTP" aria-label="default input example" />
                                <div className='d-flex justify-content-between pb-2 pt-1'>
                                    <p className='text_time'>The Remaining:  01:25</p>
                                    <a className='resend' href=''>Resend OTP </a>
                                </div>
                                <button className='btn btn-themes  w-100'>Verify Code</button>

                            </div>
                        </div>
                    </Modal>
                </div>
            </div> : <></>}

            {activeStep === 1 ? <>
                <Aadharkyc/>

            </> : <>


            </>}

            {activeStep === 2 ? <>
            <Pancardkyc/>
            </> : <>


            </>}

            {activeStep === 3 ? <>
            <Gstkyc/>
            </> : <>
            </>}

        </>
    )
}

export default Customerkycs