import React from 'react'
import { FaSearch, FaSlidersH, FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import { BsUpload } from "react-icons/Bs";
function  Agreement() {
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

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (event) => {
        // Handle the file upload logic here
        console.log(event.target.files[0]);
    }
    return (
        <>
            <div className='row p-4'>
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
                                    <td> {document.status  != "Approved" ? <>
                                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                                        <a id="uploadButton" className='fileuplord' onClick={handleButtonClick}> <BsUpload className='uploadButton_icon' /></a></>  :null}</td>
                                        
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>


    )
}

export default Agreement