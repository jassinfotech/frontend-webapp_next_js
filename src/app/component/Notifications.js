'use client'
import React, { useState } from 'react';
function Notifications() {
    const [markTrue, setMarkTrue] = useState(false);

    const [value, setValue] = useState(false);
    const handleClick = () => {
        setValue(!value);
    };

    const handleClickMarkTrue = () => {
        setMarkTrue(!value);
    };
    return (
        <div>
            <div className='row'>
                <div className='col-lg-8 col-md-8'>
                    <h6>Notifications</h6>
                </div>
                <div className='col-lg-4 col-md-4 text-end'>
                    <div className='d-flex pt-2'>
                        <h5>Notifications</h5>
                        <div className="form-check form-switch mx-2">
                            <input
                                className="form-check-input switch_input"
                                type="checkbox"
                                checked={value}
                                onChange={handleClick}
                                role="switch"
                                id="flexSwitchCheckDefault"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row pt-4'>
                <div className='col-lg-8 col-md-8'>
                    <div className='text_all_f'>All</div>
                </div>
                <div className='col-lg-4 col-md-4 text-end'>
                    <button className='btn delte_btn_n'>Delete</button>
                </div>
            </div>

            <div className='row py-4'>
                <div className='col-lg-8 col-md-8'>
                    <div className='text_mark '>Today</div>
                </div>
                <div className='col-lg-4 col-md-4 text-end'>
                    <div className='text_today ' onClick={handleClickMarkTrue}>MARK AS READ</div>
                </div>
            </div>


            <div className='row pt-3 box_noti'>
                <div className='col-lg-9 col-md-9'>
                    <div class="media d-flex meassges">
                        {markTrue && <input class="form-check-input form-check-input_2 mt-2" type="checkbox" value={markTrue} id="flexCheckDefault" />}
                        <div class="icon_box_n"></div>
                        <div class="media-body pt-1">
                            <h5 class="mt-0">Cashback 50%</h5>
                            <p>Get 50% cashback for the Next Top up</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 text-end'>
                    <div className='text_today mt-2'>Top up now </div>
                </div>
            </div>
            <div className='row pt-3 mt-2'>
                <div className='col-lg-12 col-md-12'>
                    <div className='test_yesd'> YESTERDAY </div></div>
            </div>
            <div className='row pt-3 box_notinactiv mt-2'>
                  <div className='col-lg-9 col-md-9'>
                    <div class="media d-flex meassges">
                        {markTrue && <input class="form-check-input form-check-input_2 mt-2" type="checkbox" value={markTrue} id="flexCheckDefault" />}
                        <div class="icon_box_n"></div>
                        <div class="media-body pt-1">
                            <h5 class="mt-0"> Cashback 50%</h5>
                            <p>8:20 AM</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 text-end'>
                    <div className='text_today mt-2'>Top up now </div>
                </div>
            </div>

            <div className='row pt-3 box_notinactiv mt-2'>
                  <div className='col-lg-9 col-md-9'>
                    <div class="media d-flex meassges">
                        {markTrue && <input class="form-check-input form-check-input_2 mt-2" type="checkbox" value={markTrue} id="flexCheckDefault" />}
                        <div class="icon_box_n"></div>
                        <div class="media-body pt-1">
                            <h5 class="mt-0"> Cashback 50%</h5>
                            <p>8:20 AM</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 text-end'>
                    <div className='text_today mt-2'>Top up now </div>
                </div>
            </div>

            <div className='row pt-3 box_notinactiv mt-2'>
                  <div className='col-lg-9 col-md-9'>
                    <div class="media d-flex meassges">
                        {markTrue && <input class="form-check-input form-check-input_2 mt-2" type="checkbox" value={markTrue} id="flexCheckDefault" />}
                        <div class="icon_box_n"></div>
                        <div class="media-body pt-1">
                            <h5 class="mt-0"> Cashback 50%</h5>
                            <p>8:20 AM</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-3 text-end'>
                    <div className='text_today mt-2'>Top up now </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications