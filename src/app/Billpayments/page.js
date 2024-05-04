'use client'
import React,{useState} from 'react'
import Sidebarmain from '../component/Sidebarmain'
import { MdArrowBack } from "react-icons/md";
import Select from 'react-select';
import { AiOutlineArrowRight } from "react-icons/ai"
import '../scss/style.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Billrecharges from '../component/Billrecharges';

function page() {
    const [rechargtype, setRechargtype]= useState('Gas')
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
                    <Billrecharges rechargtype={rechargtype}/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default page