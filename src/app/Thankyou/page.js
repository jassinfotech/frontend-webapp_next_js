import React from 'react'
import Header from '../component/Header'

function page() {
    return (
        <div>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-8 col-lg-8 mx-auto text-center pt-5'>
                        <h4>Please wait we will Contact you <br/>very shortly</h4>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6 col-lg-6 mx-auto'>
                        <img src='thanks.png' className='w-100'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page