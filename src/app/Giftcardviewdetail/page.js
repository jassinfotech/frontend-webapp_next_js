'use client'
import React, { useState } from 'react';
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain';
import { AiOutlineArrowLeft } from "react-icons/ai"
import { HiDownload } from "react-icons/hi";
import { AiOutlineCopy } from "react-icons/ai"
import { FaFilePdf } from "react-icons/fa"
import "./card.css";

function page() {
    return (
        <>
            <>
                <Sidebarmain />
                <section id="main" className='main '>
                    <div className='bg_img'>
                        <div className='container-fluid p-5 ps-0'>
                            <div className='ps-5'>
                                <a className=' mainclr text-decoration-none' href='#'><AiOutlineArrowLeft />Back</a>
                            </div>
                            <div className='row'>
                                <div className='col-md-4 '>
                                    <img src='./images/sideimg.png' className='w-100' alt='img' />
                                    <div className='imgbottomtext ps-5'> Yatra FHBH Non Cum Multi <br />E-Gift Card</div>
                                    <div className='totletext pt-3 ps-5'> Total ₹10000.00</div>
                                </div>
                                <div className='col-md-8'>
                                    <div className='p-3'>
                                        <span className='pe-4 tabletoptext'>Quantity (6)</span>
                                        <span className='px-4 tabletoptext'>Used(2)</span>
                                        <span className='px-4 tabletoptext'>Unused(5)</span>
                                        <span className='ps-4 '><a href='' className='text-decoration-none tabletoptext'><HiDownload className='fs-5 mainclr' />Download All</a></span>
                                    </div>
                                    <div >
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className='table-text1' scope="col">Card Number</th>
                                                    <th className='table-text1' scope="col">Pin Number</th>
                                                    <th className='table-text1' scope="col">Expiry Date </th>
                                                    <th className='table-text1' scope="col">Mark in Used</th>
                                                    <th className='table-text1' scope="col">Download</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='table-text2'>42554313441288<AiOutlineCopy className='fs-5 mainclr ps-1' /></td>
                                                    <td className='table-text2'>5588<AiOutlineCopy className='fs-5 ps-1 mainclr' /></td>
                                                    <td className='table-text2'>10/02/2023</td>
                                                    <td className='table-text2'> <input class="form-check-input fs-4 checkboxclr" type="checkbox" value="" /></td>
                                                    <td className='table-text2'><FaFilePdf className='fs-4 mainclr' /></td>
                                                </tr>
                                                <tr>
                                                    <td className='table-text2'>42554313441288<AiOutlineCopy className='fs-5 mainclr ps-1' /></td>
                                                    <td className='table-text2'>5588<AiOutlineCopy className='fs-5 ps-1 mainclr' /></td>
                                                    <td className='table-text2'>10/02/2023</td>
                                                    <td className='table-text2'> <input class="form-check-input fs-4 checkboxclr" type="checkbox" value="" /></td>
                                                    <td className='table-text2'><FaFilePdf className='fs-4 mainclr' /></td>
                                                </tr>
                                                <tr>
                                                    <td className='table-text2'>42554313441288<AiOutlineCopy className='fs-5 mainclr ps-1' /></td>
                                                    <td className='table-text2'>5588<AiOutlineCopy className='fs-5 ps-1 mainclr' /></td>
                                                    <td className='table-text2'>10/02/2023</td>
                                                    <td className='table-text2'> <input class="form-check-input fs-4 checkboxclr" type="checkbox" value="" /></td>
                                                    <td className='table-text2'><FaFilePdf className='fs-4 mainclr' /></td>
                                                </tr>
                                                <tr>
                                                    <td className='table-text2'>42554313441288<AiOutlineCopy className='fs-5 mainclr ps-1' /></td>
                                                    <td className='table-text2'>5588<AiOutlineCopy className='fs-5 ps-1 mainclr' /></td>
                                                    <td className='table-text2'>10/02/2023</td>
                                                    <td className='table-text2'> <input class="form-check-input fs-4 checkboxclr" type="checkbox" value="" /></td>
                                                    <td className='table-text2'><FaFilePdf className='fs-4 mainclr' /></td>
                                                </tr>
                                                <tr>
                                                    <td className='table-text2'>42554313441288<AiOutlineCopy className='fs-5 mainclr ps-1' /></td>
                                                    <td className='table-text2'>5588<AiOutlineCopy className='fs-5 ps-1 mainclr' /></td>
                                                    <td className='table-text2'>10/02/2023</td>
                                                    <td className='table-text2'> <input class="form-check-input fs-4 checkboxclr" type="checkbox" value="" /></td>
                                                    <td className='table-text2'><FaFilePdf className='fs-4 mainclr' /></td>
                                                </tr>
                                                <tr>
                                                    <td className='table-text2'>42554313441288<AiOutlineCopy className='fs-5 mainclr ps-1' /></td>
                                                    <td className='table-text2'>5588<AiOutlineCopy className='fs-5 ps-1 mainclr' /></td>
                                                    <td className='table-text2'>10/02/2023</td>
                                                    <td className='table-text2'> <input class="form-check-input fs-4 checkboxclr" type="checkbox" value="" /></td>
                                                    <td className='table-text2'><FaFilePdf className='fs-4 mainclr' /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default page