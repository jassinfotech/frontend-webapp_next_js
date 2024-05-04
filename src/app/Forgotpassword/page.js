'use client'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { FaUserAlt, FaPhoneAlt, FaLock, FaMobileAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-modal';
import './password.css'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import Sideslider from '../component/Sideslider';
import { BASE_URL } from '../helper/apiHelper';
const page = () => {
    const router = useRouter();
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    const [isShowaddpassword, setIsShowaddpassword] = useState(false);
    const [otp, setOtp] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [mobileError, setMobileError] = useState('');
    const [message, setMessage] = useState('');
    const [remainingTime, setRemainingTime] = useState(0);
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [cshowPassword, setShowcPassword] = useState(false);


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handlecPasswordChange = (e) => {
        setCpassword(e.target.value);
    };

    const togglecPasswordVisibility = () => {
        setShowcPassword(!showPassword);
    };
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

    console.log("mobileNumber", mobileNumber)
    const handleMobileNumberChange = (e) => {
        const mobile = e.target.name === 'mobileNumber' ? e.target.value : '';
        const numericMobile = mobile.replace(/\D/g, '');
        setMobileNumber(numericMobile);
        const mobilePattern = /^\d{10}$/;
        if (mobilePattern.test(numericMobile)) {
            setMobileError('');
        } else {
            setMobileError('Enter your mobile number')
        }
    };
    const handleotpChange = (e) => {
        setOtp(e.target.value);
    };
    function closeModal() {
        setIsOpen(false);
    }
    const handleGetOtp = async (e) => {
        e.preventDefault();
        if (mobileNumber) {
            try {
                const response = await axios.post(`${BASE_URL}/api/auth/forget-passowrd-send-otp`, {
                    mobileNo: mobileNumber
                }, {
                    headers: { "Content-Type": "application/json", },
                });
                const data = response.data;
                console.log("data orget-passowrd-send-otp", data)
                if (data.success === true) {
                    setRemainingTime(30);
                    startCountdown();
                    setIsOpen(true)
                }
            } catch (error) {
                console.error("Error signing up:", error);
            }
        } else {
            setMobileError('Enter Your Mobile OTP')
        }
    };

    const handleResendOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/api/public/forget-passowrd-resend-otp`, {
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


    const handleSubmitotp = async (e) => {
        e.preventDefault();
        if (otp && mobileNumber) {
            try {
                const response = await axios.post(`${BASE_URL}/api/auth/forget-passowrd-verify-otp`, {
                    mobileNo: mobileNumber,
                    otp: otp,
                }, {
                    headers: { "Content-Type": "application/json", },
                });
                const data = response.data;
                console.log("data forget-passowrd-verify", data)
                if (data.success === true) {
                    setIsOpen(true)
                    setIsShowaddpassword(true)
                }
            } catch (error) {
                console.error("Error signing up:", error);
            }

        } else {
            setMobileError('Enter Your Mobile OTP')
        }
    };
    const handleSubmiChangepss = async (e) => {
        e.preventDefault();
        if (mobileNumber) {
            try {
                const response = await axios.post(`${BASE_URL}/api/auth/forget-passowrd-change-password`, {
                    mobileNo: mobileNumber,
                    newPassword:password,
                    confirmPassword:cpassword
                }, {
                    headers: { "Content-Type": "application/json", },
                });
                const data = response.data;
                console.log("data forget-passowrd-verify", data)
                if (data.success === true) {
                    router.push("/Dashboard");
                }
            } catch (error) {
                console.error("Error signing up:", error);
            }

        } else {
            setMobileError('Enter Your Mobile OTP')
        }
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
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',
        },
    };
    return (
        <div>
            <Header />
            <div className='mt-5'>
                <div className="container">
                    <div className='row from_bg mb-5'>
                        <div className='col-lg-6 back_color text-center py-5'>
                            <Sideslider />
                        </div>
                        <div className='col-lg-6 for_m p-5'>


                            {isShowaddpassword ? <> <div class="signup-form login px-5">
                                <div className='px-5'>
                                    <h2 className="">Change your password</h2>
                                    <div className='pb-4'>Enter a new password below to <br></br>change your password</div>
                                    <div class="form-group mb-3">
                                        <input type={showPassword ? 'text' : 'password'} className="form-control login_input"
                                            value={password} onChange={handlePasswordChange} placeholder="Enter your password" />
                                        <span className='hide_icon' onClick={togglePasswordVisibility}>
                                            {showPassword ? <AiOutlineEye size="26" /> : <AiOutlineEyeInvisible size="26" />}
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <input type={cshowPassword ? 'text' : 'password'} className="form-control login_input"
                                            value={cpassword} onChange={handlecPasswordChange} placeholder="Confirm password" />
                                        <span className='hide_icon' onClick={togglecPasswordVisibility}>
                                            {showPassword ? <AiOutlineEye size="26" /> : <AiOutlineEyeInvisible size="26" />}
                                        </span>
                                    </div>
                                    <div class="form-group pt-4">
                                        <button type="submit" class="btn btn-primary w-100 py-3" onClick={handleSubmiChangepss}>Reset Password </button>
                                    </div>
                                </div>
                            </div></> : <><div class="signup-form login p-5">
                                <div className='p-5 mx-3'>
                                    <h2>FORGOT PASSWORD ?</h2>
                                    <div class="form-group">
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
                                    <div class="form-group ">
                                        <button type="submit" class="btn btn-primary w-100 py-3" onClick={handleGetOtp}> Reset Password  </button>
                                        {/* <a href='/Changepassword'></a> */}
                                    </div>
                                    <div class="or-seperator"><b>or</b></div>
                                    <div class="text-center text-dark dont_haveac">Already known password ?   <a href="#" className='text_them text_d_none'>Sign In</a></div>
                                </div>

                            </div></>

                            }

                        </div>
                    </div>
                </div>

            </div>
            <Modal isOpen={modalIsOpen} style={customStyles} className="" contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='otppopup py-5'>
                    <div className='close_icon'>
                        <a onClick={closeModal}><AiOutlineClose size={23} /></a>
                    </div>
                    <h2 className='text-center mb-0 pb-4'><span className='icon'><FaMobileAlt /></span></h2>
                    <h5 className='text-center'>We sent your code</h5>
                    <p className='text-center'>Enter the confirmation code below</p>
                    <div className='my_10'>
                        <input
                            className='input'
                            type="text"
                            id="otp"
                            placeholder='Enter OTP'
                            value={otp}
                            onChange={handleotpChange}
                        />
                        {message && <span className="text-danger text-left">{message}</span>}
                    </div>

                    <div className='row'>
                        <div className='col p-2'><p>The Remaining: {`00:${remainingTime < 10 ? `0${remainingTime}` : remainingTime}`}</p></div>
                        <div className='col text-end p-2'>
                            {remainingTime > 0 ? <></> : <><a className='resend_btn' onClick={handleResendOTP} >
                                Resend OTP
                            </a></>}
                        </div>
                    </div>
                    <button className='btn_otp text-white' onClick={handleSubmitotp}> Verify Code</button>
                </div>
            </Modal>
            <Footer />
        </div>
    )
}

export default page