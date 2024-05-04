'use client'
import React, { useState } from 'react'
import { FaSearch, FaSlidersH, FaCheck, FaStarOfLife } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import Modal from 'react-modal';
import Manualkyc from './Manualkyc';
import { postApi } from '../helper/apiHelper';

function Aadharkyc({ handleNextStep }) {
    const [remainingTime, setRemainingTime] = useState(0);
    const [otp, setOtp] = useState('');
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpens, setIsOpens] = React.useState(false);
    const [manualkyc, setManualkyc] = React.useState(0);
    const [message, setMessage] = useState(null);
    const [messageerro, setMessageerro] = useState(null);
    const [addharno, setAddharno] = useState('')
    const [clientId, setClintID] = useState('')
    console.log("clientId", clientId, " otp", otp)
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
    function openErrorpoup() {
        setIsOpens(false);
        setIsOpen(true);
    }
    function Manualkycfun() {
        setIsOpen(false);
        setManualkyc(1)
    }

    const startCountdown = () => {
        let timeLeft = 30; // Initialize with 30 seconds
        const timerId = setInterval(() => {
            timeLeft--;
            if (timeLeft >= 0) {
                setRemainingTime(timeLeft);
            } else {
                clearInterval(timerId);
            }
        }, 1000);
    };

    const handleAadharNumberChange = (e) => {
        const aadhar = e.target.name === 'aadharNo' ? e.target.value : '';
        const numericAadhar = aadhar.replace(/\D/g, '');
        setAddharno(numericAadhar);
        const AadharPattern = /^\d{12}$/;
        if (AadharPattern.test(numericAadhar)) {
            setMessage('')
        } else {
            setMessage('Enter your Aadhar number')
        }
    };
    const handleSubmit = async (e) => {
        console.log("addharno", addharno)
        e.preventDefault();
        if (addharno) {
            setMessage('')
            const aadharNo = addharno
            try {
                const response = await postApi('/api/user/kyc-verify-aadhar-auto-generate-otp', { aadharNo });
                console.log('Response:', response.data);
                var data = response.data.data
                if (response.success === true) {
                    setClintID(data.client_id)
                    setRemainingTime(30);
                    startCountdown();
                    setIsOpens(true)
                }
            } catch (error) {
                console.error('Error: message', error.response.data.message);
                var messages = error.response.data.message
                setMessageerro(messages)
                setAddharno('');
                setIsOpen(true);

            }
        }

    };
    const handleotpChange = (e) => {
        setMessage('')
        setOtp(e.target.value);

    };

    const handleOTPSubmit = async (e) => {

        if (clientId && otp) {
            setIsOpens(false);
            e.preventDefault();
            var data = {
                otp: otp,
                clientId: clientId
            }
            console.log("data", data)
            try {
                const response = await postApi('/api/user/kyc-verify-aadhar-auto-verify-otp', data);
                console.log('Response:', response.success);
                if (response.success === true) {
                    handleNextStep()
                }
            } catch (error) {
                console.error('Error: message', error.response.data.message);
                var messages = error.response.data.message
                setMessageerro(messages)
                setAddharno('');
                setIsOpen(true)
            }
        }

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
            height: '335px',
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',
            zindex: 10,

        },
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
            zindex: 10,


        },
    };
    return (
        <>
            {manualkyc === 1 ? <> <Manualkyc handleNextStep={handleNextStep} /> </> : <>
                <div className='row'>
                    <div className='col-lg-12 col-md-12'>
                        <div className='row'>
                            <div className='head py-5 text-center'>
                                <h5>Aadhar kyc</h5>
                            </div>
                            <div className='col-lg-6 fro_mp'>
                                <div className='pl-5'>
                                    <div className="mb-4">
                                        <label className="form-label label_kyc">Aadhar number  <span><FaStarOfLife /> </span> </label><br />
                                        <input type="text" className="form-control input" name="aadharNo" style={{ borderColor: message ? '#d72f2f' : '' }} placeholder="Enter your Aadhar number" onChange={handleAadharNumberChange} />
                                        {message && <span className="text-danger">{message}</span>}
                                    </div>
                                    <div className="my-4 text-end ">
                                        <button type="submit" className="btn btn-themes mt-4" onClick={handleSubmit}>
                                            Submit
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <ul className='text_check text_kyc_2'>
                                    <li><FaCheck color='#fff' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li><FaCheck color='#59667D' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li><FaCheck color='#fff' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li><FaCheck color='#59667D' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li><FaCheck color='#fff' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li><FaCheck color='#fff' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li><FaCheck color='#59667D' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li><FaCheck color='#fff' /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </>
            }



            <div className='bg-info'>
                <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                    <div className='row'>
                        <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                            <h6>Aadhar kyc</h6>
                        </div>
                        <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                            <a onClick={closeModal}><AiOutlineClose size={23} /></a>
                        </div>
                        <div className='col-md-12 col-lg-12 facingIssue'>
                            <h5 className='text-center '>{messageerro}</h5>
                            <p className='text-center'> you can go manual Kyc </p>
                        </div>
                        <div className='col-md-12 col-lg-12'>
                            <div className='row'>
                                <div className='col-md-8 mx-auto d-flex justify-content-between'>
                                    <button className="btn but_skip_mu" onClick={closeModal}> Skip </button>
                                    <button className='btn manulkyc_btn ' onClick={Manualkycfun}>ManualKYC</button>
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
                            <input class="form-control input " type="text" value={otp}
                                onChange={handleotpChange} placeholder="Enter OTP" aria-label="default input example" />
                            <div className='d-flex justify-content-between pb-2 pt-1'>
                                <p className='text_time'>The Remaining: {`00:${remainingTime < 10 ? `0${remainingTime}` : remainingTime}`}</p>
                                {remainingTime > 0 ? <></> : <><a className='resend_btn' >
                                    Resend OTP
                                </a></>}
                            </div>
                            <button className='btn btn-themes w-100' onClick={handleOTPSubmit}>Verify Code</button>
                        </div>
                    </div>
                </Modal>
            </div>

        </>
    )
}

export default Aadharkyc