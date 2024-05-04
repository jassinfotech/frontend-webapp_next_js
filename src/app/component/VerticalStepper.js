import React, { useState } from 'react';

const VerticalStepper = () => {
    const [activeStep, setActiveStep] = useState(1);

    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    return (
        <div className="container">
            <div className="row">
                <div class="stepper d-flex flex-column mt-5 ml-2">
                    <div class="d-flex mb-1">
                        <div class="d-flex flex-column pr-4 align-items-center">
                            <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
                            <div class="line h-100" style={{ backgroundColor: '#000' }}></div>
                        </div>
                        <div className='m-3 mt-0' style={{ width: "490px" }}>
                            <div class="card text-dark mb-3 bg-white" >
                                <div class="card-header bg-white">
                                    <div className='d-flex justify-content-between'>
                                        <h6> Aadhar kyc </h6>
                                        <button className='v_btn'> Verify </button>
                                    </div>
                                </div>
                                <div class="card-body bg-white">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex mb-1">
                        <div class="d-flex flex-column pr-4 align-items-center">
                            <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
                            <div class="line h-100"></div>
                        </div>
                        <div className='m-3 mt-0' style={{ width: "490px" }}>
                            <div class="card text-dark mb-3 bg-white" >
                                <div class="card-header bg-white">
                                    <div className='d-flex justify-content-between'>
                                        <h6> Aadhar kyc </h6>
                                        <button className='v_btn'> Verify </button>
                                    </div>
                                </div>
                                <div class="card-body bg-white">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex mb-1">
                        <div class="d-flex flex-column pr-4 align-items-center">
                            <div class="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
                            <div class="line h-100 d-none"></div>
                        </div>
                        <div className='m-3 mt-0' style={{ width: "490px" }}>
                            <div class="card text-dark mb-3 bg-white" >
                                <div class="card-header bg-white">
                                    <div className='d-flex justify-content-between'>
                                        <h6> Aadhar kyc </h6>
                                        <button className='v_btn'> Verify </button>
                                    </div>
                                </div>
                                <div class="card-body bg-white">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default VerticalStepper;
