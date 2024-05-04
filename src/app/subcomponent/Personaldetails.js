'use client'
import React, { useState } from 'react';
import { FaSearch, FaSlidersH, FaCheck, FaStarOfLife } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import './personaldetails.css';
import { postApi, BASE_URL } from '../helper/apiHelper';
import axios from 'axios'; // Import Axios

function Personaldetails({ handleNextStep }) {
    const [profileimage, setProfileImage] = useState({ preview: '', data: '' })

    const [avtar, setAvtar] = useState(false);
    const [selectedImage, setSelectedImage] = useState('user_pic1.png');
    const states = [
        { id: '1', name: 'Punjab' },
        { id: '2', name: 'Haryana' },
        { id: '3', name: 'Goa' },
        // Add more states as needed
    ];

    const cities = [
        { id: '1', name: 'Ludhiana' },
        { id: '2', name: 'Chandigarh' },
        { id: '3', name: 'Amritsar' },
        // Add more cities as needed
    ];

    const [formData, setFormData] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        alternateMobile: "",
        whatsappNumber: '',
        refferalCode: '',
        addressLine1: '',
        addressLine2: '',
        stateId: states.length > 0 ? states[0].id : '', // Set default state value
        cityId: cities.length > 0 ? cities[0].id : '', // Set default city value
        postcode: '',
        avtar: selectedImage,
    });


    const [formErrors, setFormErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    console.log(formData, "formData")
    const validateForm = () => {
        const errors = {};
        if (!formData.firstname.trim()) {
            errors.firstname = "First name is required.";
        }
        if (!formData.lastname.trim()) {
            errors.lastname = "Last name is required.";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = "Invalid email format.";
        }
        if (!formData.alternateMobile.trim()) {
            errors.alternateMobile = "Mobile number is required.";
        } else if (!/^[0-9]+$/.test(formData.alternateMobile)) {
            errors.alternateMobile = "Mobile number must contain only digits.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Returns true if there are no errors
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            try {
                const response = await postApi('/api/user/save-user-profile', formData);
                console.log('Response:', response.success);
                if (response.success === true) {
                    handleNextStep()
                }
            } catch (error) {
                console.error('Error: message', error.response.data.message);
            }
        }
    };

    
    const handleUplordprofile = async (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            try {
                const response = await postApi('/api/user/save-user-profile', formData);
                console.log('Response:', response.success);
                if (response.success === true) {
                    handleNextStep()
                }
            } catch (error) {
                console.error('Error: message', error.response.data.message);
            }
        }
    };


    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
    };

    const toggleAvtar = () => {
        setAvtar(!avtar);
    };

    const imageUrls = [
        "user_pic1.png",
        "user_pic2.png",
        "user_pic3.png",
        "user_pic4.png",
        "user_pic5.png",
        // Add more image URLs as needed
    ];

    const handleprofileimage = async (event) => {

        let file = event.target.files[0];
        if (file.size > 2 * 1024 * 1024) {
            window.alert("File size must be less than 2 MB.");
            return false;
        } else {
            setSelectedImage(file);
        }

        const img = {
            preview: URL.createObjectURL(file),
            data: file,
        };
        setProfileImage(img);

        // Perform the API call
        try {
            const token = localStorage.getItem('token');
            console.log("token", token)
            const formData = new FormData();
            formData.append('ProfileImage', file);
            const response = await axios.post(`${BASE_URL}/api/user/upload-user-profile-image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            const data = response.data;
            console.log('API Response:', data);
        } catch (error) {
            // Handle errors here
            console.error('Error uploading image:', error);
        }
    };
  

    return (
        <div className='row'>
            <div className='col-md-4 p-2'>
                <div className='profile_pic'>
                    {profileimage.preview ? <><img src={profileimage.preview} className="w-100" alt="..." /></> : <><img src={selectedImage} className="w-100" alt="..." /></>}
                    <div className='d-flex justify-content-between py-3'>
                        <a className='btn imgbtn1' onClick={toggleAvtar}>Choose Avtar</a>
                        <input name="file" type="file" id="fileInput" accept="image/png, image/jpeg" onChange={handleprofileimage} style={{ display: 'none' }} />
                        <a className='btn imgbtn2 px-4' id="uploadButton" >Upload</a>
                    </div>
                </div>

                <div className='row' style={{ display: avtar ? 'block' : 'none' }}>
                    <div className='col-lg-12 col-md-12 user_img px-5'>
                        <div className='hadow_propf bg-white py-2'>
                            <div className='row justify-content-center pb-2'>
                                {imageUrls.map((imageUrl, index) => (
                                    <div key={index} className='col-2'>
                                        <img
                                            src={imageUrl}
                                            className={`w-100 ${selectedImage === imageUrl ? 'selected' : ''}`}
                                            alt="..."
                                            onClick={() => handleImageClick(imageUrl)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-8 p-4 user_customersign'>
                <form onSubmit={handleSubmit}>
                    <div className='row '>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">First name <span><FaStarOfLife /></span></label>
                                <input type="text" className="form-control input" placeholder="Enter your first name" name="firstname" value={formData.firstname} onChange={handleInputChange} />
                                {formErrors.firstname && <span className="text-danger">{formErrors.firstname}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Middle  name </label>
                                <input type="text" className="form-control input" placeholder="Enter your middle name" name="middlename" value={formData.middlename} onChange={handleInputChange} />
                                {formErrors.middlename && <span className="text-danger">{formErrors.middlename}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Last name <span><FaStarOfLife /> </span></label>
                                <input type="text" className="form-control input" placeholder="Enter your Last name" name="lastname" value={formData.lastname} onChange={handleInputChange} />
                                {formErrors.lastname && <span className="text-danger">{formErrors.lastname}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Email  <span><FaStarOfLife /> </span></label>
                                <input type="text" className="form-control input" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleInputChange} />
                                {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Alternate mobile number <span><FaStarOfLife /> </span></label>
                                <input type="text" className="form-control input" placeholder="Enter your mobile number" name="alternateMobile" value={formData.alternateMobile} onChange={handleInputChange} />
                                {formErrors.alternateMobile && <span className="text-danger">{formErrors.alternateMobile}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Whatsapp number</label>
                                <input type="text" className="form-control input" placeholder="Whatsapp number" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleInputChange} />
                                {formErrors.whatsappNumber && <span className="text-danger">{formErrors.whatsappNumber}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Referral code</label>
                                <input type="text" className="form-control input" placeholder="Enter referral code" name="refferalCode" value={formData.refferalCode} onChange={handleInputChange} />
                                {formErrors.refferalCode && <span className="text-danger">{formErrors.refferalCode}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Address</label>
                                <input type="text" className="form-control input" placeholder="Address line 1" name="addressLine1" value={formData.addressLine1} onChange={handleInputChange} />
                                {formErrors.addressLine1 && <span className="text-danger">{formErrors.addressLine1}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Address line2 <small>Optional</small></label>
                                <input type="text" className="form-control input" placeholder="Address line 2" name="addressLine2" value={formData.addressLine2} onChange={handleInputChange} />
                                {formErrors.addressLine2 && <span className="text-danger">{formErrors.addressLine2}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">State</label>
                                <select className="form-select input" aria-label="Default select example" name="stateId" value={formData.stateId} onChange={handleInputChange}>
                                    <option value="">Select your state</option>
                                    {states.map(state => (
                                        <option key={state.id} value={state.id}>{state.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="mb-4 ">
                                <label className="form-label formtext1">City</label>
                                <select className="form-select input" aria-label="Default select example" name="cityId" value={formData.cityId} onChange={handleInputChange}>
                                    <option value="">Select your City</option>
                                    {cities.map(city => (
                                        <option key={city.id} value={city.id}>{city.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Postal/ Zip code</label>
                                <input type="text" className="form-control input" placeholder="Enter postcode" name="postcode" value={formData.postcode} onChange={handleInputChange} />
                                {formErrors.postcode && <span className="text-danger">{formErrors.postcode}</span>}
                            </div>
                        </div>

                        <div className='col-md-12 text-end'>
                            <div className="my-4">
                                <button type="submit" className="btn btn-themes">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Personaldetails;
