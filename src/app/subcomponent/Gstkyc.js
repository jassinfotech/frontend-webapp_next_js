import React from 'react'
import { FaSearch, FaSlidersH, FaCheck, FaStarOfLife } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { ImCloudUpload } from "react-icons/im";
import Modal from 'react-modal';

function Gstkyc({ Submit }) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpens, setIsOpens] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);

    }

    function openModals() {
        setIsOpens(true);
    }
    function closeModals() {
        setIsOpens(false);
    }

    function openErrorpoup() {
        setIsOpens(false);
        setIsOpen(true);

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
            height: '335px',
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
    return (
        <>
            <div className='row'>
                <div className='col-lg-10 col-md-10 mx-auto'>
                    <div className='row'>
                        <div className='head py-3'>
                            <h5>Gst Kyc</h5>
                        </div>
                        <div className='col-lg-6 fro_mp '>
                            <div className='pl-5'>
                                <div className="mb-3">
                                    <label className="form-label label_kyc">Gst Code <span><FaStarOfLife /> </span></label><br />
                                    <input type="text" className="form-control input" placeholder="Enter pan number" required />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label label_kyc">Name  <span><FaStarOfLife /> </span> </label><br />
                                    <input type="text" className="form-control input" placeholder="Enter your name" required />

                                </div>
                                <div className="mb-3 text-end">
                                    <button className="btn btn-themes p-3" >
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
        </>
    )
}

export default Gstkyc