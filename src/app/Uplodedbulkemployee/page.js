'use client'
import React,{useState} from 'react'
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css'
import Sidebarmain from '../component/Sidebarmain'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaSearch, FaSlidersH, FaEllipsisV } from "react-icons/fa";
import { FiEdit } from "react-icons/fi"
import { AiOutlineExclamationCircle, AiOutlineClose } from "react-icons/ai"
import '../scss/style.scss';
import "./page.css"

function page() {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
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
        width: '397px',
        paddingTop: '10px',
        border: '1px solid rgb(196 196 196 / 30%)',
        boxShadow: '2px 5px 60px -32px #28A5C1',
  
      },
    };
    // Dummy data for the table
    const data = [
        { id: 1, name: 'Ram Singh', balance: 500, mobile: '7880829986', email: 'ram@gmail.com' },
        { id: 2, name: 'Ram Singh', balance: 1000, mobile: '7880829986', email: 'ram@gmail.com' },
        { id: 3, name: 'Ram Singh', balance: 100, mobile: '7880829986', email: 'ram@gmail.com' },
        { id: 4, name: 'Ram Singh', balance: 100, mobile: '7880829986', email: 'ram@gmail.com' },
        { id: 5, name: 'Ram Singh', balance: 200, mobile: '7880829987', email: 'ram@gmail.com' },
        { id: 6, name: 'Ram Singh', balance: 200, mobile: '7880829986', email: 'ram@gail.com' },
        { id: 7, name: 'Ram Singh', balance: 300, mobile: '7880829986', email: 'ram@gmail.com' },
        { id: 8, name: 'Ram Singh', balance: 500, mobile: '7880829986', email: 'ram@gmail.com' },
        { id: 9, name: 'Ram Singh', balance: 500, mobile: '7880829986', email: 'ram@gmail.com' }
    ];

    return (
        <>
            <Sidebarmain />
            <section id="main" className='main'>
                <div className='container-fluid p-5'>
                    <div className='row'>
                        <div className='row'>
                            <div className='col-lg-10 p-2'>
                                <div className="search-box">
                                    <div className="input-group input-groups d-flex">
                                        <input type="text" id="search" className="form-control" placeholder="Search Keyword" />
                                        <span className="input-group-addon search_icon"><FaSearch /></span>
                                    </div>
                                    <button className='fliter_btn' > <FaSlidersH className='fliter_icon' /> Filter</button>
                                </div>
                            </div>
                            <div className='col-lg-2 p-2'></div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='text-style1 py-3'>Total  100</div>
                                <table class="table uplordbulck">
                                    <thead>
                                        <tr>
                                            <th className='table_heding' scope="col">#</th>
                                            <th className='table_heding' scope="col">Employee Name</th>
                                            <th className='table_heding' scope="col">Balance</th>
                                            <th className='table_heding' scope="col">Mobile number</th>
                                            <th className='table_heding' scope="col">Email</th>
                                            <th className='table_heding' scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(item => (
                                            <tr key={item.id}>
                                                <th>{item.id}</th>
                                                <td>{item.name}</td>
                                                <td>{item.balance}</td>
                                                <td> <div className='d-flex' style={{ color: item.mobile === "7880829987" ? '#FF6666' : "#59667D" }}>{item.mobile} <span style={{ display: item.mobile === "7880829987" ? 'block' : "none" }}> <AiOutlineExclamationCircle size={20} className='mx-2' color='#FF6666' /></span></div> </td>
                                                <td> <div className='d-flex' style={{ color: item.email === "ram@gail.com" ? '#FF6666' : "#59667D" }}>{item.email} <span style={{ display: item.email === "ram@gail.com" ? 'block' : "none" }}> <AiOutlineExclamationCircle size={20} className='mx-2' color='#FF6666' /></span></div> </td>
                                                <td>
                                                    <a className='fs-4' onClick={openModal}><RiDeleteBin5Line /></a>
                                                    <a href='/Editbulkemploye' className='ps-4 fs-4'><FiEdit /></a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 text-end px-5'>
                                <button className='Submit' type='button'>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
                <div className='row'>
                    <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
                        <div className='poipuptext'>Information</div>
                    </div>
                    <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
                        <a  onClick={closeModal}><AiOutlineClose size={23} /></a>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-2 pb-5 px-3'>
                        <h5 className='top_popup_text pt-3 d-flex justify-content-center '>Are you sure you Want to </h5>
                        <h5 className='top_popup_text pb-2  d-flex justify-content-center '>Save Changes?</h5>
                    </div>
                    <div className='col-md-12 col-lg-12 pt-2 pb-3  d-flex justify-content-center'>
                        <button className='btn btn_up_cancel me-2'  onClick={closeModal}>Cancel</button>
                        <button className='btn btn_up_ok ms-2 '  onClick={closeModal}>Delete</button>

                    </div>
                </div>
            </Modal>
        </>
    )
}

export default page