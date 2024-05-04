'use client'
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { FaUserAlt, FaPhoneAlt, FaLock, FaMobileAlt } from "react-icons/fa";
import Header from '../component/Header';
import Footer from '../component/Footer';
import Link from 'next/link';
import Modal from 'react-modal';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import './login.css'
import 'bootstrap/dist/css/bootstrap.css';
import Sideslider from '../component/Sideslider';
import { BASE_URL } from '../helper/apiHelper';
import GeolocationComponent from '../component/GeolocationComponent';
const page = () => {

    const router = useRouter();
    useEffect(() => {
        // Execute this code only on the client-side
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [modalIsOpen, setShowModal] = useState(false);
    const [mobileError, setMobileError] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [message, setMessage] = useState(null);
    const [messageError, setMessageError] = useState(null);
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleotpChange = (e) => {
        setOtp(e.target.value);
    };
    const getLoginFrom = async (e) => {
        e.preventDefault();
        if (mobileNumber && password) {
            try {
                const response = await axios.post(`${BASE_URL}/api/auth/login`, {
                    mobileNo: mobileNumber,
                    password: password,
                    deviceType: "t2t2",
                    ipAddress: "205.142.121.230"
                }, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.data;
                console.log("data login", data)
                if (data.success === true) {
                    console.log("data.token", data.data.token)
                    console.log("data.user", data.data.user)
                    localStorage.setItem("token", data.data.token);
                    localStorage.setItem("user", JSON.stringify(data.data.user));
                    router.push("/Dashboard");
                }
            } catch (error) {
                console.error("Error signing up:", error.response.data);
                setMessageError(error.response.data.message)
            }
        }
        else {
            setMobileError('Invalid mobile number');
        }
    };
    function closeModal() {
        setShowModal(false);
    }

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
                            <div class="signup-form login p-5">
                                <div className='p-5 mx-4'>
                                    <h2 className='text-uppercase'>Sign In</h2>
                                    <div className="form-group">
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
                                    <div className="form-group">
                                        <i> <FaLock />  </i>
                                        <input type={showPassword ? 'text' : 'password'} className="form-control login_input"
                                            value={password} onChange={handlePasswordChange} placeholder="Enter your password" />
                                        <span className='hide_icon' onClick={togglePasswordVisibility}>
                                            {showPassword ? <AiOutlineEye size="26" /> : <AiOutlineEyeInvisible size="26" />}
                                        </span>

                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary w-100 py-3" onClick={getLoginFrom}>Sign In </button>
                                    </div>
                                    {messageError && <span className="text-danger text-left">{messageError}</span>}
                                    <div className="form-group Forgot text-center">
                                        <Link href="/Forgotpassword">Forgot Password?</Link>
                                    </div>

                                    <div className="or-seperator"><b>or</b></div>
                                    <div className="text-center text-dark dont_haveac"> Don,t have Account ?  <Link href="/Signup" className='text_them'>Sign Up</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
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
                    </div>
                    <div className='row'>
                        <div className='col p-2'><p>The Remaining: 01:25</p></div>
                        <div className='col text-end p-2'>
                            <a className='resend_btn'>
                                Resend OTP
                            </a>
                        </div>
                    </div>
                    <button className='btn_otp text-white' >  <Link href="/Changepassword" className='btn_otp text-white' > Verify Code</Link> </button>
                </div>
            </Modal>
            <Footer />
        </div>
    )
}

export default page