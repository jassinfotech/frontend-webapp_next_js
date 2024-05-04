'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain'
import { MdOutlineArrowBack } from "react-icons/md";
import '../scss/style.scss';
import "./page.css"

function page() {
  

    const handleFileChange = (event) => {
        // Handle the file upload logic here
        console.log(event.target.files[0]);
    }

    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid p-5'>
                    <div className='row'>
                        <div className='col'>
                            <a className='back_btn_emp' href=''><MdOutlineArrowBack  className='mx-1' size={25}/>Back</a>
                            <div className='text-style1 pt-4'>Employee Bulk Upload </div>
                        </div>

                    </div>
                    <div className='row pt-4 '>
                        <div className='col-md-4 text-center'>
                        <div className='' style={{width: "400px", height: "312px", margin: "0px auto"}}> <img src='../images/employee_image1.png' className='w-100' alt='image' /></div>
                            <div className='text-style2 pt-3'>Don,t have Format ?</div> 
                            <div className='text-style3 pt-2 pb-5'>Required Details Name,  Email, Mobile Number</div>
                            <button className='btn employee_btn' type='button'>Download format</button>
                        </div>
                        <div className='col-md-4 offset-3'>
                            <div className='' style={{width: "400px", height: "312px"}}><img src='../images/employee_image2.png' className='w-100' alt='image' /></div>
                            <div className="card shadow-none deag_f">
                                <div className="card-body text-center p-5">
                                    <input type="file" id="fileInput" onChange={handleFileChange} style={{ display: 'none' }} />
                                    <a id="uploadButton" className='fileuplord'> <img src='../images/Uploadimage.png' alt='image'/></a><br/>
                                    <span className='text-style4'>Drag file here  or browse for file<br/>
                                        upload </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='row'>
                    <div className='col-lg-12 text-end'>
                            <button className='btn submit ' type='button'>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page