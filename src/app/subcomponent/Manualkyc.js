'use client'
import React, { useState } from 'react'
import { FaSearch, FaSlidersH, FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import { BsUpload } from "react-icons/Bs";
import { postApi, BASE_URL } from '../helper/apiHelper';
import axios from 'axios'; // Import Axios
function Manualkyc({ handleNextStep }) {
    const [imagepan, setImagePan] = useState({ preview: '', data: '' })
    const [imagefront, setImagefront] = useState({ preview: '', data: '' })
    const [imageback, setImageBack] = useState({ preview: '', data: '' })
    const [frontAdhar, setFrontAdhar] = useState(null);
    const [backAdhar, setBackAdhar] = useState(null);
    const [pan, setPan] = useState(null);
    const [errormessage, setErrormessage] = useState(null)


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!frontAdhar == '' && !backAdhar == '') {
            const formData = new FormData();
            formData.append("frontAdhar", frontAdhar);
            formData.append("backAdhar", backAdhar);
            formData.append("pan", pan);
            console.log("formData------------->", formData)
            try {
                const token = localStorage.getItem('token');
                console.log("token", token)
                const response = await axios.post(`${BASE_URL}/api/user/save-user-kyc-manualy`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = response.data;
                console.log('API Response:', data);
                if (data.success === true) {
                    handleNextStep()
                }
            } catch (error) {
                console.error('Error: message', error.response);
            }
        }
    }
    const handleFrontAdhar = (event) => {
        let file = event.target.files[0];
        console.log(file);
        if (file.size > 2 * 1024 * 1024) {
            window.alert("File size must be less than 2 MB.");
            return false;
        } else {
            setFrontAdhar(file);
        }
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0],
        }
        setImagefront(img)
    }
    const handleSkipfun = async (event) => {
        event.preventDefault()
        try {
            const response = await postApi('/api/user/skip-user-kyc');
            console.log('Response:', response);
            if (response.success === true) {
                handleNextStep()
            }
        } catch (error) {
            console.error('Error: message', error.response);
        }
    }
    const handleBackAdhar = (event) => {
        let file = event.target.files[0];
        console.log(file);
        if (file.size > 2 * 1024 * 1024) {
            window.alert("File size must be less than 2 MB.");
            return false;
        } else {
            setBackAdhar(file);
        }
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0],
        }
        setImageBack(img)
    }


    const handleFilePan = (event) => {
        let file = event.target.files[0];
        console.log(file);
        if (file.size > 2 * 1024 * 1024) {
            window.alert("File size must be less than 2 MB.");
            return false;
        } else {
            setPan(file);
        }
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0],
        }
        setImagePan(img)
    }

    return (
        <>
            <div className='row'>
                <div className='col-lg-12 col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-12 col-lg-12 text-center mb-5'>
                            <h5>Manual Aadhar Kyc</h5>
                            {errormessage ? <><p>{errormessage}</p></> : <></>}
                        </div>
                        <div className='col-lg-5'>
                            <div className="Upload_box_main">
                                <h6>Upload Aadhar</h6>

                                <div className="Upload_box">
                                    {imagefront.preview ? <div className='uplord_img'><img src={imagefront.preview} alt="..." /></div> : <>
                                        <input name="file" type="file" id="fileInput" accept="image/png, image/jpeg" onChange={handleFrontAdhar} style={{ display: 'none' }} />
                                        <a id="uploadButton" className='fileuplord' > <img src='upload.svg' /></a>
                                    </>}
                                </div>
                                <p>Upload file up to 2 MB</p>



                                <h6>Upload Pan</h6>
                                <div className="Upload_box">
                                    {imageback.preview ? <div className='uplord_img'><img src={imageback.preview} alt="..." /></div> : <>
                                        <input name="file" type="file" id="fileInput" accept="image/png, image/jpeg" onChange={handleBackAdhar} style={{ display: 'none' }} />
                                        <a id="uploadButton" className='fileuplord'> <img src='upload.svg' /> </a>
                                    </>}


                                </div>
                                <p>Upload file up to 2 MB</p>



                                <h6>Upload Pan</h6>
                                <div className="Upload_box">
                                    {imagepan.preview ? <div className='uplord_img'><img src={imagepan.preview} alt="..." /></div> : <>
                                        <input type="file" id="fileInput" onChange={handleFilePan} style={{ display: 'none' }} />
                                        <a id="uploadButton" className='fileuplord'> <img src='upload.svg' /> </a>
                                    </>}

                                </div>
                                <p>Upload file up to 2 MB</p>
                                <div className="my-4 text-end ">
                                    <button type="submit" className="btn btn-themes mt-4" onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className='col-lg-7'>
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
                        <div className='col-7 mx-auto'> <div className="text-end ">
                            <button type="submit" className="btn but_skip_mu" onClick={handleSkipfun} >
                                Skip
                            </button>
                        </div>
                        </div>

                    </div>
                </div>
            </div >

        </>
    )
}

export default Manualkyc