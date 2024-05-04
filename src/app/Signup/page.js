'use client'
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { FaUserAlt, FaPhoneAlt, FaLock, FaMobileAlt } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Link from 'next/link';
import Modal from 'react-modal';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './signup.css';
import Sideslider from '../component/Sideslider';
import { BASE_URL } from '../helper/apiHelper';

const page = () => {
    const router = useRouter();
    const [remainingTime, setRemainingTime] = useState(0);
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
    useEffect(() => {
        // Execute this code only on the client-side
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    const [otp, setOtp] = useState('');
    const [modalIsOpen, setShowModal] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [message, setMessage] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    console.log("mobileNumber", mobileNumber)

    const handleotpChange = (e) => {
        setMessage('')
        setOtp(e.target.value);

    };
    function openModal() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false);
    }
    const getOTPFromBackend = async (e) => {
        e.preventDefault();
        if (isChecked) {
            setMobileError('');
            if (mobileNumber) {
                setMobileError('');
                try {
                    const response = await axios.post(`${BASE_URL}/api/public/registration-send-otp`, {
                        mobileNo: mobileNumber,
                        isChecked: isChecked,
                    },
                        {
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });
                    const data = response.data;
                    console.log("data", data)
                    if (data.success === true) {
                        setRemainingTime(30);
                        startCountdown();
                        setShowModal(true);
                    }
                } catch (error) {
                    console.error("Error signing up:", error);
                }

            } else {
                setMobileError('Invalid mobile number');
            }
        }
        else {
            setMobileError('Please agree terms and Conditions');
        }

    };

    const handleMobileNumberChange = (e) => {
        const mobile = e.target.name === 'mobileNumber' ? e.target.value : '';
        const numericMobile = mobile.replace(/\D/g, '');
        setMobileNumber(numericMobile);
        const mobilePattern = /^\d{10}$/;
        if (mobilePattern.test(numericMobile)) {
            setMobileError('');
            setMessage('')
        } else {
            setMessage('Enter your mobile number')
        }
    };
    const handleSubmitotp = async (e) => {
        e.preventDefault();
        if (otp && mobileNumber) {
            try {
                const response = await axios.post(`${BASE_URL}/api/public/registration-verify-otp`, {
                    mobileNo: mobileNumber,
                    otp: otp,
                    deviceType: "t2t2",
                    ipAddress: "205.142.121.230"
                }, {
                    headers: { "Content-Type": "application/json", },
                });
                const data = response.data;
                console.log("data", data)
                if (data.success === true) {
                    console.log("data.token", data.data.token)
                    console.log("data.user", data.data.user)
                    localStorage.setItem("token", data.data.token);
                    localStorage.setItem("user", JSON.stringify(data.data.user));
                    router.push("/CustomerSign");
                }
            } catch (error) {
                console.error("Error signing up:", error);
            }

        } else {
            setMessage('Enter Your Mobile OTP')
        }
    };
    const handleResendOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/api/public/registration-resend-otp`, {
                mobileNo: mobileNumber,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = response.data;
            console.log("data", data)
            if (data.success === true) {
                setRemainingTime(30);
                startCountdown();
                setShowModal(true);
            }
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '397px',
            padding: '0px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',
            overflow: "hidden",
        },
    };

    return (
        <div>
            <Header />
            <div className='mt-5'>
                <div className="container">
                    <div className='row from_bg mb-5'>
                        <div className='col-lg-6 p-0'>
                            <div className='back_color text-center  pb-0'>
                                <Sideslider />
                            </div>
                        </div>
                        <div className='col-lg-6 for_m p-3'>
                            <div class="signup-form login p-5">
                                <div className='p-5 mx-4'>
                                    <h2 className='text-uppercase signup'>Sign UP</h2>

                                    <div class="form-group text-left">
                                        <i> <FaPhoneAlt /></i>
                                        <input type="text" style={{ borderColor: mobileError ? '#d72f2f' : '' }}
                                            class="form-control login_let"
                                            placeholder="Enter your mobile number"
                                            name="mobileNumber"
                                            pattern="[0-9]*"
                                            onChange={handleMobileNumberChange}
                                        />
                                        {mobileError && <span className="text-danger text-left">{mobileError}</span>}

                                    </div>

                                    <div class="form-group">
                                        <button class="btn btn-primary w-100 py-2" onClick={getOTPFromBackend}>Sign Up </button>
                                    </div>
                                    <div className='text-start py-2'>
                                        <input class="form-check-input fs-5" style={{ borderColor: mobileError ? '#d72f2f' : '' }} type="checkbox" checked={isChecked} onChange={handleCheckboxChange} required />
                                        <label className='formtextstyle ps-2 pt-1' for='CheckDefault'>agree terms and Conditions</label>
                                    </div>

                                    <div class="or-seperator maintextclr"><b className='maintextclr'>or</b></div>
                                    <div class="text-center text-dark dont_haveac">
                                        If have Account already
                                        <Link href="/Login" className='text_them text-decoration-none ps-1'>Sign In</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='popu_header'>
                    <div className='close_icon'>
                        <a onClick={closeModal}><AiOutlineClose size={23} /></a>
                    </div>
                </div>
                <div className='otppopup p-3'>
                    <h2 className='text-center mb-0 pb-4'><span className='icon'><FaMobileAlt /></span></h2>
                    <h5 className='text-center pb-2'>We sent your code</h5>
                    <p className='text-center textstyle1 pb-4'>Enter the confirmation code below</p>
                    <div className='my_10'>
                        <input className='input' style={{ borderColor: message ? '#d72f2f' : '' }}
                            type="text"
                            id="otp"
                            placeholder='Enter OTP'
                            value={otp}
                            onChange={handleotpChange}
                        />
                        {message && <span className="text-danger text-left">{message}</span>}
                    </div>
                    <div className='row px-2'>
                        <div className='col p-2 pt-0'> <p>The Remaining: {`00:${remainingTime < 10 ? `0${remainingTime}` : remainingTime}`}</p></div>
                        <div className='col text-end p-2 pt-0'>
                            {remainingTime > 0 ? <></> : <><a className='resend_btn' onClick={handleResendOTP}>
                                Resend OTP
                            </a></>}
                        </div>
                    </div>
                    <button className='btn_otp text-white mt-3' onClick={handleSubmitotp}> Verify Code</button>
                </div>
            </Modal>
            <Footer />
        </div>
    );
}

export default page;
