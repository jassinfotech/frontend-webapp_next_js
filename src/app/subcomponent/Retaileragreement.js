import React from 'react'
import { FaSearch, FaSlidersH, FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import { BsUpload } from "react-icons/Bs";
function Retaileragreement() {
    // Dummy data
    const agreementDocuments = [
        {
            id: 1,
            documentName: "Aadhar Card",
            fileName: "ABC",
            status: "Approved"
        },
        {
            id: 2,
            documentName: "Pan Card",
            fileName: "XYZ",
            status: "Invalid"
        },
        {
            id: 3,
            documentName: "GST",
            fileName: "123",
            status: "Pending"
        },
        {
            id: 3,
            documentName: "GST",
            fileName: "123",
            status: "Invalid"
        },
        {
            id: 3,
            documentName: "GST",
            fileName: "123",
            status: "Approved"
        }
        ,
        {
            id: 3,
            documentName: "GST",
            fileName: "123",
            status: "Invalid"
        }
        ,
        {
            id: 3,
            documentName: "GST",
            fileName: "123",
            status: "Pending"
        }
    ];
    const getStatusColor = (status) => {
        if (status === "Approved") {
            return "green";
        } else if (status === "Invalid") {
            return "red";
        } else if (status === "Pending") {
            return "yellow";
        } else {
            return "black"; // Default color if status is not recognized
        }
    };



    const handleFileChange = (event) => {
        console.log(event.target.files[0]);
    }
    return (
        <>
            <div className='row'>
                <div className='col-md-5 mx-auto'>
                    <select className="form-select ag_select_f" aria-label="Default select example">
                        <option selected>Select Company type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                </div>
                <div className='col-md-12 pt-5 '>
                    <div className='text-center '>
                        <h5>Agreement Download</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin<br /> cursus auctor ante, sit amet imperdiet libero eleifend vel. Ves</p>
                        <button type="button" className="btn mt-4 bg-theme text-white p-2 px-4">Download Agreement</button>
                    </div>
                </div>

                
            </div>

            <div className='row'>
                <div className='col-md-10 col-lg-10 mx-auto'>
                    <div className='row'>
                    <div className='col-md-4 py-5'>
                    <div class="card">
                        <div class="card-body ag_crad">
                            <div className='d-flex justify-content-between'>
                                <h5 class="card-title">Seleckaro Agreement</h5>
                                <a href='#' className='ag_crad_icon' style={{ backgroundColor: "green" }}><FaCheck /></a>
                            </div>

                            <p class="card-text">File upload maximum 10 MB Minimum Upload 2 MB Lorem ipsum</p>
                            <div className='d-flex justify-content-between'>
                                <h6 class="card-subtitle mb-2 text-muted">Aadhar Card</h6>
                                <a href='#'><AiOutlineClose /></a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-4 py-5'>
                    <div class="card">
                        <div class="card-body ag_crad">
                            <div className='d-flex justify-content-between'>
                                <h5 class="card-title">Seleckaro Agreement</h5>
                                <a href='#' className='ag_crad_icon' style={{ background: "rgba(247, 0, 0, 0.50)" }}><FaCheck /></a>
                            </div>

                            <p class="card-text">File upload maximum 10 MB Minimum Upload 2 MB Lorem ipsum</p>
                            <div className='d-flex justify-content-between'>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    <span className='fileuplord border'> <ImCloudUpload /> </span>  Pan Card</h6>
                                <a href='#'><AiOutlineClose /></a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-4 py-5'>
                    <div class="card">
                        <div class="card-body ag_crad">
                            <div className='d-flex justify-content-between'>
                                <h5 class="card-title">Seleckaro Agreement</h5>
                                <a href='#' className='ag_crad_icon' style={{ background: "#D9D000" }}><FaCheck /></a>
                            </div>

                            <p class="card-text">File upload maximum 10 MB Minimum Upload 2 MB Lorem ipsum</p>
                            <div className='d-flex justify-content-between'>
                                <h6 class="card-subtitle mb-2 text-muted">
                                    <span className='fileuplord border'> <ImCloudUpload /> </span>  GST</h6>
                                <a href='#'><AiOutlineClose /></a>
                            </div>

                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                 <div className='col-md-12 col-lg-12'>
                    <hr/>
                    <table class="table agreement">
                        <thead>
                            <tr>
                                <th >Document Name</th>
                                <th >File Name</th>
                                <th >Status</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agreementDocuments.map((document) => (
                                <tr key={document.id}>
                                    <td>{document.documentName}</td>
                                    <td>{document.fileName}</td>
                                    <td style={{ color: getStatusColor(document.status) }}>{document.status}</td>
                                    <td> {document.status != "Approved" ? <><input type="file" id="fileInput" style={{ display: 'none' }} />
                                        <a id="uploadButton" className='fileuplord' onClick={handleFileChange}> <BsUpload className='uploadButton_icon' /></a></> : null}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>


    )
}

export default Retaileragreement