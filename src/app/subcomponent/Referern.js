import React from 'react'


function Referern() {
    return (


        <>

            <div className='container pt-5'>
               
                <div className='row p-5 pt-0'>
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item px-3" role="presentation">
                            <button className=" text_clr btn_tabs btn_border px-3 py-1 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">  <img src='referral_0.png' className='pe-3' />My Referral </button>
                        </li>
                        <li className="nav-item px-3" role="presentation">
                            <button className=" text_clr btn_tabs  btn_border px-3 py-1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><img src='referral_1.png' className='pe-3' />View Offers</button>
                        </li>
                        <li className="nav-item  px-3" role="presentation">
                            <button className=" text_clr btn_tabs btn_border  px-3 py-1 " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><img src='referral_2.png' className='pe-3' />My Reward</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div><b>Referral users</b></div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <th>Email</th>
                                        <th>Offer</th>
                                        <th>Created at</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row"><img src='table1.svg' className='pe-2' />Ram Singh</th>
                                        <td>ram@gmail.com</td>
                                        <td>Google play Gift card 40% off</td>
                                        <td>10/05/2023</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img src='table1.svg' className='pe-2' />Ram Singh</th>
                                        <td>ram@gmail.com</td>
                                        <td>Flat Rs. 50</td>
                                        <td>10/05/2023</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"><img src='table1.svg' className='pe-2' />Ram Singh</th>
                                        <td>ram@gmail.com</td>
                                        <td>Cashback Rs. 100</td>
                                        <td>10/05/2023</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className='py-3'><b>Chance To win offers</b></div>
                            <div className='row justify-content-around'>
                                <div className='card card_bg1 card_width'>
                                    <div className='card-text'><i>20% off Ajio Gift card up To
                                        Rs. 200</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr'>Google</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center'>Ajio Gift card</div>
                                </div>
                                <div className='card card_bg2 card_width'>
                                    <div className='card-text'><i>40 % Cashback On Bus Tickets</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr'>Amazon </b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center'>Book now</div>
                                </div>
                                <div className='card card_bg3 card_width'>
                                    <div className='card-text'><i>40 % Cashback On Bus Tickets</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr px-3'>Bus</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center text_clr'>Book now</div>
                                </div>
                                <div className='card card_bg4 card_width'>
                                    <div className='card-text'><i className='text-white'>40 % Cashback On Bus Tickets</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text '><b className='text_clr '>Myntra</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center text-white'>Ajio Gift card</div>
                                </div>
                                <div className='card card_bg5 card_width'>
                                    <div className='card-text'><i className='text-white'>20% off Ajio Gift card up To
                                        Rs. 200</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr px-3 '>Ajio</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center text-white'>Ajio Gift card</div>
                                </div>

                            </div>
                            <div className='row justify-content-around py-3'>
                                <div className='card card_bg6 card_width'>
                                    <div className='card-text'><i>20% off Ajio Gift card up To
                                        Rs. 200</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr'>Google</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center'>Ajio Gift card</div>
                                </div>
                                <div className='card card_bg7 card_width'>
                                    <div className='card-text'><i>40 % Cashback On Bus Tickets</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr'>Amazon </b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center'>Book now</div>
                                </div>
                                <div className='card card_bg8 card_width'>
                                    <div className='card-text'><i>40 % Cashback On Bus Tickets</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr px-3'>Bus</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center text_clr'>Book now</div>
                                </div>
                                <div className='card card_bg9 card_width'>
                                    <div className='card-text'><i className='text-white'>40 % Cashback On Bus Tickets</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr '>Myntra</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center text-white'>Ajio Gift card</div>
                                </div>
                                <div className='card card_bg10 card_width'>
                                    <div className='card-text'><i className='text-white'>20% off Ajio Gift card up To
                                        Rs. 200</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr px-3 '>Ajio</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center text-white'>Ajio Gift card</div>
                                </div>

                            </div>


                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className='py-3'><b>My Reward</b></div>
                            <div className='row justify-content-around'>
                                <div className='card card_bg1 card_width'>
                                    <div className='card-text'><i>20% off Ajio Gift card up To
                                        Rs. 200</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr'>Google</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center'>Ajio Gift card</div>
                                </div>
                                <div className='card card_bg2 card_width'>
                                    <div className='card-text'><i>40 % Cashback On Bus Tickets</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr'>Amazon </b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center'>Book now</div>
                                </div>
                                <div className='card card_bg3 card_width'>
                                    <div className='card-text'><i>40 % Cashback On Bus Tickets</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr px-3'>Bus</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center text_clr'>Book now</div>
                                </div>
                                <div className='card card_bg4 card_width'>
                                    <div className='card-text'><i className='text-white'>40 % Cashback On Bus Tickets</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr '>Myntra</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center text-white'>Ajio Gift card</div>
                                </div>
                                <div className='card card_bg5 card_width'>
                                    <div className='card-text'><i className='text-white'>20% off Ajio Gift card up To
                                        Rs. 200</i></div>
                                    <div className='text-center py-3'>
                                        <span className='card_center_text'><b className='text_clr px-3 '>Ajio</b></span>
                                    </div>
                                    <img src='' className='' />
                                    <div className='card-tille text-center text-white'>Ajio Gift card</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row p-5'>
                    <div className='col-md-6'>
                        <div className='text-center'><b>Refer friends to Earn money </b></div>
                        <img src='pepoleimg.png' className='w-100' alt='image' />
                        <br />

                        <div className='py-2'>your invitation code</div>
                        <input type="text" value="SE78548565" id="myInput" className='bdr_clr2 myp-12 text_clr w-75' />
                        <button  className='myp-12 text_clr bdr_clr1 '>Copy</button>

                        <br />
                        <div className='py-2'>Share your Referral Link</div>
                        <input type="text" value="www.https//selectkaro.com/ram" id="myInput" className='bdr_clr2 myp-12 text_clr w-75' />
                        <button  className='myp-12 text_clr bdr_clr1'>Copy</button>

                    </div>
                    <div className='col-md-6'>
                        <div className='p-5 border'>
                            <div className='text-center pb-3'>How It Works ?</div>
                            <div className='text-center text_clr'><b>1</b></div>
                            <div className=''>Earn 50% reward in advance once referee registers for a new User</div>
                            <br />
                            <div className='text-center text_clr'><b>2</b></div>
                            <div className=''>Earn 50% reward in advance once referee registers for a new User</div>
                            <br />
                            <div className='text-center text_clr'><b>3</b></div>
                            <div className=''>Earn 50% reward in advance once referee registers for a new User</div>
                        </div>
                        <div className='text-end'>Referral T&C <a className='text-decoration-none text_clr' href=''> Click here</a></div>

                    </div>
                </div>

                {/* <div className='row'>
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#home" className=' mx-2 text_clr btn_border px-3 py-2'><img src='referral_0.png' className='pe-3' />My Referral</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#menu1" className=' mx-2 text_clr btn_border px-3 py-2'><img src='referral_1.png' className='pe-3' />View Offers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#menu2" className='mx-2 text_clr btn_border px-3 py-2'><img src='referral_2.png' className='pe-3' />My Reward</a>
                        </li>
                    </ul>

                 
                    <div class="tab-content">
                        <div id="home" class="container tab-pane active"><br />
                            <h3>HOME</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div id="menu1" class="container tab-pane fade"><br />
                            <h3>Menu 1</h3>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div id="menu2" class="container tab-pane fade"><br />
                            <h3>Menu 2</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                        </div>
                    </div>
                </div> */}
            </div>


        </>

    )
}

export default Referern
