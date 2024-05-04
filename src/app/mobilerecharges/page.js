'use client'
import React from 'react'
import Sidebarmain from '../component/Sidebarmain'
import { MdArrowBack } from "react-icons/md";
import Select from 'react-select';
import { AiOutlineArrowRight } from "react-icons/ai"
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Recharges from '../component/recharges';
import { useState } from 'react';

function page() {
    const [rechargtype, setRechargtype0]= useState('MetroCard')
    // Define the options with images and text
    const options = [
        { value: '1', label: 'Option 1', image: '../images/offerimage1.png' },
        { value: '2', label: 'Option 2', image: '../images/offerimage1.png' },
        { value: '3', label: 'Option 3', image: '../images/offerimage1.png' },
    ];
    // Custom Option component to render images and text
    const Option = ({ innerProps, label, data }) => (
        <div {...innerProps}>
            <img src={data.image} alt={label} style={{ width: '30px', marginRight: '10px' }} />
            {label}
        </div>
    );
    // Custom SingleValue component to render selected value with image
    const SingleValue = ({ innerProps, label, data }) => (
        <div {...innerProps}>
            <img src={data.image} alt={label} style={{ width: '30px', marginRight: '10px' }} />
            {label}
        </div>
    );
    // Custom styles for the select dropdown
    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '5px',
        }),
        option: (provided, state) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            padding: '5px',
            backgroundColor: state.isSelected ? '#007bff' : state.isFocused ? '#e9ecef' : 'white',
            color: state.isSelected ? 'white' : 'black',
        }),
    };
    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 pt-2'>
                            <div className='ancor_text'><span><MdArrowBack /></span> Back</div>
                        </div>
                    </div>
                    <div>
                        <Recharges rechargtype={rechargtype} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default page