import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Slider from '../component/Slider'
import Services from '../component/Services'
import Cards from '../component/Cards'
import Link from 'next/link';
import { MdHelp } from "react-icons/md";

function page() {
    const cardData = [
        { id: 1, image: '../images/cardimg1.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg2.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg3.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg4.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
    ];
    return (<>
        <Header />
        <Slider />
        <div className='container'>

            <Services />

        </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-9'>
                    <h5>Trending Gift cards</h5>
                </div>
                <div className='col-md-3 text-end'>
                    <a href="#" class="card-link btn theme_color">View More <i class="fas fa-long-arrow-alt-right"></i> </a>
                </div>
            </div>
            <Cards />
        </div>

        <div className='container'>
            <div className='row '>
                <div className='col-12 sellyourgift'>
                    <h6 className=''>Sell Your Gift card</h6>
                </div>
            </div>
            <div className='row mx-0 pb-3'>
                <div className='col-lg-6 col-md-6  gift_bg'>
                    <h5>Sell Your Gift card</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className='btn btn_sell-now'> Sell Now</button>
                </div>
                <div className='col-lg-6 col-md-6 m-0 p-0'>
                    <img src='imagegift.png' className='w-100'></img>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 pt-5'>
                    <h5>Top Discount Cards</h5>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row py-5'>
                <div className="col-md-3 p-1">
                    <div className="card_box_ft">
                        <Link style={{ textDecoration: 'none' }} href="/Cardbuy">
                            <div className="card p-3 pb-1 border-0 shadow">
                                <img src='../images/cardimg1.png' className="card-img-top w-100" alt="card image" />
                                <div className="card-body">
                                    <div className="card-text cardtewxt">American Eagle E-Gift Card</div>
                                    <div className="col">
                                        <div className='cardtitlestyle py-3'>Rs. 10–1000</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="card_button">10% off</button>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className='btn btn_in_card' type='button' >Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div></Link>
                    </div>
                </div>
                <div className="col-md-3 p-1">
                    <div className="card_box_ft">
                        <Link style={{ textDecoration: 'none' }} href="/Cardbuy">
                            <div className="card p-3 pb-1 border-0 shadow">
                                <img src='../images/cardimg1.png' className="card-img-top w-100" alt="card image" />
                                <div className="card-body">
                                    <div className="card-text cardtewxt">American Eagle E-Gift Card</div>
                                    <div className="col">
                                        <div className='cardtitlestyle py-3'>Rs. 10–1000</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="card_button">10% off</button>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className='btn btn_in_card' type='button' >Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div></Link>
                    </div>
                </div>
                <div className="col-md-3 p-1">
                    <div className="card_box_ft">
                        <Link style={{ textDecoration: 'none' }} href="/Cardbuy">
                            <div className="card p-3 pb-1 border-0 shadow">
                                <img src='../images/cardimg1.png' className="card-img-top w-100" alt="card image" />
                                <div className="card-body">
                                    <div className="card-text cardtewxt">American Eagle E-Gift Card</div>
                                    <div className="col">
                                        <div className='cardtitlestyle py-3'>Rs. 10–1000</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="card_button">10% off</button>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className='btn btn_in_card' type='button' >Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div></Link>
                    </div>
                </div>
                <div className="col-md-3 p-1">
                    <div className="card_box_ft">
                        <Link style={{ textDecoration: 'none' }} href="/Cardbuy">
                            <div className="card p-3 pb-1 border-0 shadow">
                                <img src='../images/cardimg1.png' className="card-img-top w-100" alt="card image" />
                                <div className="card-body">
                                    <div className="card-text cardtewxt">American Eagle E-Gift Card</div>
                                    <div className="col">
                                        <div className='cardtitlestyle py-3'>Rs. 10–1000</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="card_button">10% off</button>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className='btn btn_in_card' type='button' >Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div></Link>
                    </div>
                </div>

            </div>

            <div className='row py-5 refer_and_eran'>
                <div className="col-md-10 mx-auto  ">
                    <h4 className='text-center'>  Refer and  Earn  </h4>
                    <p className='px-45'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='image_bg_web'><img src='imagestep.png' className='w-100'></img></div>
                    <img src='frame.png' className='w-100 mt-3'></img>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3 py-5 px-2 '>
                    <div className=' bgrclr'>
                        <div className='row py-3 mx-1'>
                            <div className='col-4'>
                                <img src="images/card_img1.png" className='pt-2' />
                            </div>
                            <div className='col-8'>
                                <div className='text_countr'><h4>5.5k</h4></div>
                                <div className='cardtext1'> Customer</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3  py-5 px-2 '>
                    <div className='bgrclr'>
                        <div className='row py-3 mx-1'>
                            <div className='col-4 '>
                                <img src="images/card_img2.png" className='pt-2' />
                            </div>
                            <div className='col-8'>
                                <div className='text_countr'><h4>21.5k</h4></div>
                                <div className='cardtext1'> Business Partner</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 py-5 px-2 '>
                    <div className='bgrclr'>
                        <div className='row py-3 mx-1'>
                            <div className='col-4'>
                                <img src="images/card_img3.png" className='pt-2' />
                            </div>
                            <div className='col-8'>
                                <div className='text_countr'><h4>5M</h4></div>
                                <div className='cardtext1'> Total Revenue </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 py-5 px-2 '>
                    <div className='bgrclr'>
                        <div className='row py-3 mx-1'>
                            <div className='col-4'>
                                <img src="images/banking.png" className='pt-2' />
                            </div>
                            <div className='col-8'>
                                <div className='text_countr'><h4>5M</h4></div>
                                <div className='cardtext1'> Transaction </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-12 text-center'>
                    <div className='py-5 pt-0 partner-says'>Testimonial</div>
                </div>
                <div className='col-md-4'>
                    <div className='usertext'>
                        <p className='p-3'>  Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, ”
                        </p>
                        <div className='row bg-clr1 p-0 m-0 py-3'>
                            <div className='col-lg-2'>
                                <img src="images/card-img4.png" className='bg_img_clr' />
                            </div>
                            <div className='col-lg-4 col-md-4'>
                                <div className=''><b>Ram Singh</b></div>
                                <div>Customer</div>
                            </div>
                            <div className='col-md-6 col-lg-6 text-end'>
                                <div className='pt-2'>10 days ago</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-md-4'>
                    <div className='usertext'>
                        <p className='p-3'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, ”
                        </p>
                        <div className='row bg-clr1 p-0 m-0 py-3'>
                            <div className='col-2'>
                                <img src="images/card-img4.png" className='bg_img_clr' />
                            </div>
                            <div className='col-4'>
                                <div className=''><b>Alina </b></div>
                                <div>Partner</div>
                            </div>
                            <div className='col-6 text-end'>

                                <div className='pt-2'>10 days ago</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-md-4'>
                    <div className='usertext'>
                        <p className='p-3'> Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu pellentesque augue, in volutpat tellus.Lorem ipsum dolor sit amet, ”
                        </p>
                        <div className='row bg-clr1 p-0 m-0 py-3'>
                            <div className='col-2'>
                                <img src="images/card-img4.png" className='bg_img_clr' />
                            </div>
                            <div className='col-4'>
                                <div className=''><b>Ram Singh</b></div>
                                <div>Customer</div>
                            </div>
                            <div className='col-6 text-end'>

                                <div className='pt-2'>10 days ago</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='row'>
                <div className='col-lg-12 mt-4'>
                    <div className='row'>
                        <div className='col-lg-7 p-5 help_web'>
                            <h6 className='howcan'> How can we help? </h6>
                            <div class="accordion mt-4" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <MdHelp className='help-icon' /> Lorem ipsum dolor sit amet ipsum dolor?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at risus ipsum. Curabitur nec quam felis. Fusce sit amet lacinia dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at risus ipsum. Curabitur nec quam felis. Fusce sit amet lacinia dolor.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <MdHelp className='help-icon' /> Lorem ipsum dolor sit amet ipsum dolor?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at risus ipsum. Curabitur nec quam felis. Fusce sit amet lacinia dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at risus ipsum. Curabitur nec quam felis. Fusce sit amet lacinia dolor.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <MdHelp className='help-icon' />  Lorem ipsum dolor sit amet ipsum dolor?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at risus ipsum. Curabitur nec quam felis. Fusce sit amet lacinia dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at risus ipsum. Curabitur nec quam felis. Fusce sit amet lacinia dolor.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <MdHelp className='help-icon' />  Lorem ipsum dolor sit amet ipsum dolor?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at risus ipsum. Curabitur nec quam felis. Fusce sit amet lacinia dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at risus ipsum. Curabitur nec quam felis. Fusce sit amet lacinia dolor.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg-5 p-4'>
                            <img src='faq.png' style={{ width: '450px', marginLeft: '40px' }}></img>
                        </div>
                    </div>
                </div>



            </div>

            <div className='row'>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-6 p-5'>
                            <h6 className='howcan pb-2'> Download Customer App </h6>
                            <ul className='howcanul mt-5'>
                                <li><img src='qrcode.png'></img> Scan to login App</li>
                                <li><img src='receipt.png'></img> Here is Multiple Services you can access</li>
                                <li><img src='verified.png'></img> Safe and secure</li>
                                <li><img src='plane.png'></img> Faster and Smoother</li>
                            </ul>


                        </div>
                        <div className='col-lg-6 p-4'>
                            <img src='mobile_im.png' style={{ width: '626px', margin: '0px auto' }}></img>
                        </div>
                    </div>
                </div>



            </div>

            <div className='row'>
                <div className='col-lg-12 col-md-12  help_bg pbc-63'>
                    <div className='row'>
                        <div className='col-lg-12 pt-94'>
                            <h4>How To?</h4>
                        </div>
                        <div className='col-lg-12'>
                            <h5>About - Mobile Recharge, Bill Payments, UPI Payments, Pay Later & Financial Services</h5>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin, ligula magna egestas augue, ac vehicula massa ipsum at velit. Etiam congue nulla tempus leo fermentum, eu egestas nunc elementum.</p>
                        </div>
                        <div className='col-lg-12'>
                            <h6>Online Recharge‚ Mobile, FASTag, DTH, And Data Card Recharge On Freecharge</h6>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin, ligula magna egestas augue, ac vehicula massa ipsum at velit. Etiam congue nulla tempus leo fermentum, eu egestas nunc elementum.</p>
                        </div>
                        <div className='col-lg-12'>
                            <h6>Mobile Recharge</h6>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin, ligula magna egestas augue, ac vehicula massa ipsum at velit. Etiam congue nulla tempus leo fermentum, eu egestas nunc elementum.</p>
                        </div>
                        <div className='col-lg-12'>
                            <h6>Utility Bill Payments ‚ÄìElectricity, Gas, & Water Bill Payment On Freecharge</h6>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin, ligula magna egestas augue, ac vehicula massa ipsum at velit. Etiam congue nulla tempus leo fermentum, eu egestas nunc elementum.</p>
                        </div>
                        <div className='col-lg-12'>
                            <h6>Gas Bill Payment</h6>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin, ligula magna egestas augue, ac vehicula massa ipsum at velit. Etiam congue nulla tempus leo fermentum, eu egestas nunc elementum.</p>
                        </div>
                        <div className='col-lg-12'>
                            <h6>Postpaid Bill Payment</h6>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin,urna at iaculis sollicitudin, ligula magna egestas augue,</p>
                            <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a efficitur risus. Suspendisse efficitur ornare feugiat. Nunc a metus est. Donec hendrerit, urna at iaculis sollicitudin, ligula magna egestas augue, ac vehicula massa ipsum at velit. Etiam congue nulla tempus leo fermentum, eu egestas nunc elementum.</p>
                        </div>
                        <div className='col-lg-12'>
                            <h6>Insurance Premium Payment on Freecharge</h6>
                            <p className='p-2'>Pellentesque a posuere felis, in iaculis nibh. Fusce a magna mauris. Nulla nunc massa, placerat vel malesuada at, malesuada sit amet libero. Quisque et ipsum</p>
                            <p className='p-2'>Pellentesque a posuere felis, in iaculis nibh. Fusce a magna mauris. Nulla nunc massa, placerat vel malesuada at, malesuada sit amet libero. Quisque et ipsum</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>



    )
}

export default page