import React from 'react'
import { Carousel } from 'react-responsive-carousel'; // Import Carousel from react-responsive-carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel styles
import 'bootstrap/dist/css/bootstrap.css';
import "./custom.css";

function Sideslider() {
    return (
        <>
            <Carousel showThumbs={false} showArrows={false} showStatus={false} infiniteLoop autoPlay={true}>
                <div className='py-3'>
                    <img src='./images/slide1.png' alt="Slide 1" className='p-5 w-75' />
                    <h3 className='text-light'>Sign Up</h3>
                    <p className='text-light'>Aspire and Accomplish! Find your interests by browsing our online<br />
                        courses. Upgrade your skills, level up in life.<br />
                        Courses from 9,99 € ends July 14.</p>
                </div>
                <div className='py-3'>
                    <img src='images/slide1.png' alt="Slide 2" className='p-5 w-75' />

                    <h3 className='text-light'>Sign Up</h3>
                    <p className='text-light'>Aspire and Accomplish! Find your interests by browsing our online<br />
                        courses. Upgrade your skills, level up in life.<br />
                        Courses from 9,99 € ends July 14.</p>
                </div>
                <div className='py-3'>
                    <img src='images/slide1.png' alt="Slide 3" className='p-5 w-75' />
                    <h3 className='text-light'>Sign Up</h3>
                    <p className='text-light'>Aspire and Accomplish! Find your interests by browsing our online<br />
                        courses. Upgrade your skills, level up in life.<br />
                        Courses from 9,99 € ends July 14.</p>
                </div>

            </Carousel>

        </>
    )
}

export default Sideslider