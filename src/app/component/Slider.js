'use client'
import { useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.css';
import './custom.css'
function Slider() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (

        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 py-3'>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="slider_1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="slider_1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="slider_1.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <div className='icon_bg_control'> <span ><FaAngleLeft size={30} color='#28A5C1' /></span>
                                <span className="visually-hidden">Previous</span>
                            </div>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <div className='icon_bg_control'><span><FaAngleRight size={30} color='#28A5C1' /></span>
                                <span className="visually-hidden">Next</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider