'use client'
import React, { useState } from 'react';
import { FaSearch, FaSlidersH, FaCheck, FaStarOfLife } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import './personaldetails.css';
import { postApi } from '../helper/apiHelper';

function Personaldetails({ handleNextStep }) {
    const [profileimage, setProfileImage] = useState({ preview: '', data: '' })
    const [profileimagefile, setProfileimagefile] = useState(null)
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
    const [firstname, setFirstname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [alternateMobile, setAlternateMobile] = useState('')
    const [whatsappNumber, setWhatsappNumber] = useState('')
    const [refferalCode, setRefferalCode] = useState('')
    const [addressLine1, setAddressLine1] = useState('')
    const [addressLine2, setAddressLine2] = useState('')
    const [stateId, setStateId] = useState('')
    const [cityId, setCityId] = useState('')
    const [postcode, setPostcode] = useState('')
    const [avtars, setAvtars] = useState('')
 console.log("valus ", firstname, middlename)


    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!firstname.trim()) {
            errors.firstname = "First name is required.";
        }
        if (!lastname.trim()) {
            errors.lastname = "Last name is required.";
        }
        if (!email.trim()) {
            errors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errors.email = "Invalid email format.";
        }
        if (!alternateMobile.trim()) {
            errors.alternateMobile = "Mobile number is required.";
        } else if (!/^[0-9]+$/.test(alternateMobile)) {
            errors.alternateMobile = "Mobile number must contain only digits.";
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0; // Returns true if there are no errors
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

    const handleProfileImage = (event) => {
        let file = event.target.files[0];
        console.log(file);
        if (file.size > 1 * 1024 * 1024) {
            window.alert("File size must be less than 2 MB.");
            return false;
        } else {
            setProfileimagefile(file);
            const img = {
                preview: URL.createObjectURL(event.target.files[0]),
                data: event.target.files[0],
            };
            setProfileImage(img);
        }
    };

    const handleChangestate = (event) => {
        setStateId(event.target.value);
        console.log(event.target.value)
    };

    const handleChangeCity = (event) => {
        setCityId(event.target.value);
        console.log(event.target.value)
    };
  

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const formData = new FormData();
            formData.append('firstname', firstname);
            formData.append('middlename', middlename);
            formData.append('lastname', lastname);
            formData.append('email', email);
            formData.append('alternateMobile', alternateMobile);
            formData.append('whatsappNumber', whatsappNumber);
            formData.append('refferalCode', refferalCode);
            formData.append('addressLine1', addressLine1);
            formData.append('addressLine2', addressLine2);
            formData.append('stateId', stateId);
            formData.append('cityId', cityId);
            formData.append('postcode', postcode);
            formData.append('avtar', selectedImage);


            console.log("formData", formData)
            try {
                const response = await postApi('/api/user/save-user-profile', formData);
                console.log('Response:', response.data.success);
                if (response.data.success === true) {
                    handleNextStep();
                }
            } catch (error) {
                console.error('Error:', error.response);
            }
        }
    };


    return (
        <div className='row'>
            <div className='col-md-4 p-2'>
                <div className='profile_pic'>
                    {profileimage.preview ? <><img src={profileimage.preview} className="w-100" alt="..." /></> : <><img src={selectedImage} className="w-100" alt="..." /></>}
                    <div className='d-flex justify-content-between py-3'>
                        <a className='btn imgbtn1' onClick={toggleAvtar}>Choose Avtar</a>
                        <input name="file" type="file" id="fileInput" accept="image/png, image/jpeg" onChange={handleProfileImage} style={{ display: 'none' }} />
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
                                <input type="text" className="form-control input" placeholder="Enter your first name" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                {formErrors.firstname && <span className="text-danger">{formErrors.firstname}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Middle  name </label>
                                <input type="text" className="form-control input" placeholder="Enter your middle name" name="middlename" value={middlename} onChange={(e) => setMiddlename(e.target.value)} />
                                {formErrors.middlename && <span className="text-danger">{formErrors.middlename}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Last name <span><FaStarOfLife /> </span></label>
                                <input type="text" className="form-control input" placeholder="Enter your Last name" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                                {formErrors.lastname && <span className="text-danger">{formErrors.lastname}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Email  <span><FaStarOfLife /> </span></label>
                                <input type="text" className="form-control input" placeholder="Enter your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Alternate mobile number <span><FaStarOfLife /> </span></label>
                                <input type="text" className="form-control input" placeholder="Enter your mobile number" name="alternateMobile" value={alternateMobile} onChange={(e) => setAlternateMobile(e.target.value)} />
                                {formErrors.alternateMobile && <span className="text-danger">{formErrors.alternateMobile}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Whatsapp number</label>
                                <input type="text" className="form-control input" placeholder="Whatsapp number" name="whatsappNumber" value={whatsappNumber} onChange={(e) => setWhatsappNumber(e.target.value)} />
                                {formErrors.whatsappNumber && <span className="text-danger">{formErrors.whatsappNumber}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Referral code</label>
                                <input type="text" className="form-control input" placeholder="Enter referral code" name="refferalCode" value={refferalCode} onChange={(e) => setRefferalCode(e.target.value)} />
                                {formErrors.refferalCode && <span className="text-danger">{formErrors.refferalCode}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Address</label>
                                <input type="text" className="form-control input" placeholder="Address line 1" name="addressLine1" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />
                                {formErrors.addressLine1 && <span className="text-danger">{formErrors.addressLine1}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">Address line2 <small>Optional</small></label>
                                <input type="text" className="form-control input" placeholder="Address line 2" name="addressLine2" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
                                {formErrors.addressLine2 && <span className="text-danger">{formErrors.addressLine2}</span>}
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="mb-4">
                                <label className="form-label formtext1">State</label>
                                <select className="form-select input" aria-label="Default select example" value={stateId} onChange={handleChangestate}>
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
                                <select className="form-select input" aria-label="Default select example" value={cityId} onChange={handleChangeCity}>
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
                                <input type="text" className="form-control input" placeholder="Enter postcode" name="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
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
