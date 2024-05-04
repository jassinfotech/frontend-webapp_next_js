'use client'
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineEyeInvisible, AiOutlineEye, } from "react-icons/ai";
import { FaUserAlt, FaPhoneAlt, FaLock, FaMobileAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-modal';
import './password.css'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Link from 'next/link';
import Sideslider from '../component/Sideslider';
const page = () => {
    useEffect(() => {
        // Execute this code only on the client-side
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleotpChange = (e) => {
        setOtp(e.target.value);
    };
    const handleSubmitotp = () => {
        // Handle form submission logic here
        console.log('Form submitted!');
    };
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
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
                            <div class="signup-form login px-5">
                                <div className='px-5'>
                                    <h2 className="">Change your password</h2>
                                    <div className='pb-4'>Enter a new password below to <br></br>change your password</div>
                                    <div class="form-group mb-3">
                                        <input type="text" class="form-control login_input" placeholder=" New password" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control login_input" placeholder=" Confirm password" required="required" />
                                    </div>
                                    <div class="form-group pt-4">
                                        <button type="submit" class="btn btn-primary w-100 py-3">Reset Password </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default page