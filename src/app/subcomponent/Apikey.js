'use client'
import React, { useState, useRef } from 'react'
import Modal from 'react-modal';
import './Personaldetails.css';
import Keytable from '../subcomponent/Keytable';
import { AiOutlineClose } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { AiTwotoneCopy } from "react-icons/ai"

function Apikey() {
  const inputRef = useRef(null);
  const [modalIsOpens, setIsOpens] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [keylist, setKeylist] = useState('t')
  function openModals() {
    setIsOpens(true);
  }
  function closeModals() {
    setIsOpens(false);
  }
  function openModal() {
    setIsOpens(false);
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
      width: '466px',
      paddingTop: '10px',
      border: '1px solid rgb(196 196 196 / 30%)',
      boxShadow: '2px 5px 60px -32px #28A5C1',


    },


  };

  
  return (
    <>
      <div className='row text-center p-5'>

        {keylist ? <>

          <div className=''>
            <Keytable />
          </div></> : <>
          <div className='py-5'><b className=''>You don,t have any API keys.</b></div>
          <div>
            <button type='button' className='apibtn' onClick={setIsOpens}>Generate API Key</button>
          </div>
        </>}


      </div>

      <div className='bg-info'>
        <Modal isOpen={modalIsOpens} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
          <div className='row'>
            <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
              <h6>API KEY</h6>
            </div>
            <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
              <a onClick={closeModals}><AiOutlineClose size={23} /></a>
            </div>
            <div className='col-md-12 col-lg-12 p-4 pb-1'>
              <div className='group-from py-4'>
                <label for='lbl1' className='pb-2' ><b>API Key Name</b></label>
                <input class="form-control input p-3 " id='lbl1' type="text" placeholder="Enter API key name" aria-label="default input example" />
              </div>
              <div className='group-from'>
                <label for='lbl2' className='pb-2' ><b>IP Address</b></label>
                <input class="form-control input p-3" id='lbl2' type="text" placeholder="Enter IP address" aria-label="default input example" />

              </div>
              <div className='d-flex justify-content-end pb-2 pt-1  '>
                <p className=' '>Ex@IP Adress 182.64.119.247</p>

              </div>
              <div className='d-flex justify-content-end pt-5'>
                <button className='btn btn-themes '>Cancel</button>
                <button className='btn btn-themes mx-3' onClick={openModal}>Generate</button>
              </div>


            </div>
          </div>
        </Modal>

        <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal" overlayClassName="Overlay">
          <div className='row'>
            <div className='col-md-10 col-lg-10 text-start pt-0 mt-0'>
              <h6>API KEY</h6>
            </div>
            <div className='col-md-2 col-lg-2 text-end pt-0 mt-0'>
              <a onClick={closeModal}><AiOutlineClose size={23} /></a>
            </div>
            <div className='com-md=12'>
              <div className='text-center  py-3 iconbold'>< MdDone /></div>
              <div className='text-center pb-1'><b>Your API Key is generated</b></div>
            </div>
            <div className='col-md-12 col-lg-12 px-5 pb-1'>
              <div className='w-100 d-flex'>
                <input type="text" value="da2e250d-99d5-4c60-b77d-ee249ac2d6d3" className='bdr_clr2 p-2 w-100'/>
                <button className='p-2 text_clr bdr_clr1 '>
                  <AiTwotoneCopy />
                </button>
              </div>
              <div className='group-from py-3'>
                <label for='lbl2' className='' ><b>IP Address</b></label>
                <input class="form-control  input p-2 " id='lbl2' type="text" placeholder="182.64.119.247" aria-label="default input example" />
              </div>
              <div className='pt-5'>
                <p className='text-center '>For security reason,s this API key will not be  Displayed Again. Make sure you store it Safely</p>

              </div>
              <div className='d-flex justify-content-center pt-2'>

                <button className='btn btn-themes mx-3 px-5 py-2'>ok</button>
              </div>


            </div>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Apikey