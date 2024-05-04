import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import Carousel from react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel styles
import 'bootstrap/dist/css/bootstrap.css';
const Testimonials = () => {
    return (
        <div className="row">
            <div className="col-sm-10">
                <Carousel showThumbs={false} showArrows={false} showStatus={false} infiniteLoop autoPlay={true}>
                    <div className="row">
                        <div className='col-md-6'>
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

                         <div className='col-md-6'>
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
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Testimonials;
