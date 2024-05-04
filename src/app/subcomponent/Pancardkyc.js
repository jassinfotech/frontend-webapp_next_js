'use client'
import React, { useState } from 'react'
import { FaSearch, FaSlidersH, FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import Modal from 'react-modal';
import { postApi } from '../helper/apiHelper';

function Pancardkyc({ handleNextStep }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [message, setMessage] = useState(null);
    const [panno, setPanNo] = useState(null);
    const [messageerro, setMessageerro] = useState(null);

    function closeModal() {
        setIsOpen(false);
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
            height: '355px',
            paddingTop: '10px',
            border: '1px solid rgb(196 196 196 / 30%)',
            boxShadow: '2px 5px 60px -32px #28A5C1',
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

        },
    };


    const handlePanNumber = (e) => {
        const panNo = e.target.name === 'panNo' ? e.target.value : '';
        const numericPanNo = panNo.replace(/\s+/g, '').toUpperCase();
        setPanNo(numericPanNo);
        const panPattern = /^([A-Z]{5})(\d{4})([A-Z]{1})$/;

        if (panPattern.test(numericPanNo)) {
            setMessage('');
        } else {
            setMessage('Enter a valid PAN number');
        }
    };

    const handleSubmit = async (e) => {
        console.log("panno", panno)
        e.preventDefault();
        if (panno) {
            setMessage('')
            try {
                const response = await postApi('/api/user/kyc-verify-pan-auto', { pan: panno });
                console.log('Response:', response.success);
                if(response.success === true){
                    handleNextStep()
                }
            } catch (error) {
                console.error('Error: message', error.response.data.message);
                var messages = error.response.data.message
                setMessageerro(messages)
                setIsOpen(true)
            }
        }
      
    };

    return (
        <>
            <div className='row'>
                <div className='col-lg-10 col-md-10 mx-auto'>
                    <div className='row'>
                        <div className='head py-3'>
                            <h5>Pan kyc</h5>
                        </div>
                        <div className='col-lg-6 fro_mp '>
                            <div className='pl-5'>
                                <div className="mb-3">
                                    <label className="form-label label_kyc">Pan Number</label><br />
                                    <input type="text" className="form-control input" placeholder="Enter your pan number" name="panNo" style={{ borderColor: message ? '#d72f2f' : '' }} onChange={handlePanNumber} />
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
                            <ul className='text_check'>
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


            <div className='bg-info'>
                <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal">
                    <div className='row'>
                        <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                            <h6>Manual Kyc</h6>
                        </div>
                        <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                            <a onClick={closeModal}><AiOutlineClose size={23} /></a>
                        </div>

                        <div className='col-md-12 col-lg-12 pt-5'>
                            <h5 className='text-danger text-center  pt-4'>{messageerro}</h5>
                            <p className='text-center '>
                                you can go manual Kyc
                            </p>
                        </div>
                        <div className='col-md-12 col-lg-12 pt-5'>
                            <div className='row'>
                                <div className='col-md-8 mx-auto d-flex justify-content-between'>
                                    <button type="submit" className="btn manl_but_skip" onClick={closeModal}> Skip </button>
                                    <button className='btn manaul_btn'>Manual KYC</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

            {/* <div className='bg-info'>
                <Modal isOpen={modalIsOpens} style={customotpStyles} contentLabel="Example Modal">
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
                            <button className='btn btn-themes  w-100' onClick={openErrorpoup}>Verify Code</button>

                        </div>
                    </div>
                </Modal>
            </div> */}

        </>
    )
}

export default Pancardkyc