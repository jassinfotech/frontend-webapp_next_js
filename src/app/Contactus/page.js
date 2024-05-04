import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import './contact.css'
function page() {
  return (
    <>
      <Header />
      <div className='row_padding'>
        <div className='container'>
          <div className='row '>
            <div className='col align-items-end'>
              <div className='heding1'>CONTACT US</div>
              <span className='heding2'>Home</span>
              <a className='link_contact' href='#'>/ CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
      <section className='pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text-center heding3 py-4'>Get in touch</div>
            </div>
          </div>
          <div className='light_clrmain'>
            <div className='row bg-white p-4'>
              <div className='col-md-4 '>
                <div className='heding4 pb-4'>Our office</div>
                <div className='row'>
                  <div className='col-md-3  py-3 pe-3 '>
                  <div className='icoin_box_cont'>
                    <div className='text-center pt-3'>< MdLocationOn size={30} /></div>
                  </div>
                  </div>
                  <div className='col-md-8 '>
                    <div className='contact_text light_clr2'>Plot NO 107-A/1 KH.NO. 37/14 Ground Floor Blk-D  NewDelhi North West DL 110086 IN</div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 pe-3'>
                <div className='heding4 pb-4'>Mobile number</div>
                <div className='row'>
                  <div className='col-md-3  py-3'>
                  <div className='icoin_box_cont'>
                    <div className='text-center pt-3 py-3'><AiFillPhone size={30} /></div>
                  </div>
                  </div>
                  <div className='col-md-8 px-0 '>
                    <div className='contact_text light_clr2 pt-4 px-2 pb-5'>(+91)90154 83838 </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 '>
                <div className='heding4 pb-4'>Mail</div>
                <div className='row'>
                  <div className='col-md-3 py-3 '>
                    <div className='icoin_box_cont'>
                      <div className='text-center py-3'><AiOutlineMail size={30} /></div>
                    </div>

                  </div>
                  <div className='col-md-8 px-0 '>
                    <div className='contact_text light_clr2 pt-4 px-2 pb-5'>info@selectkaro</div>
                  </div>
                </div>
              </div>

              <div className='row pt-5'>
                <div className='col-md-6'>
                  <div className='heding4'>SUPPORT</div>
                  <div className='contact_text'>AVAILABLE 24*7 A DAY!</div>
                  <div className='light_clr p-5 pb-3 mt-5'>
                    <div class="mb-3">
                      <input type="email" class="form-control input_bg_clr" id="exampleFormControlInput1" placeholder="Enter your Name" />
                    </div>
                    <div class="mb-3">
                      <input type="email" class="form-control input_bg_clr" id="exampleFormControlInput1" placeholder="Enter your mobile Number" />
                    </div>
                    <div class="mb-3">
                      <textarea class="form-control input_bg_clr" id="exampleFormControlTextarea1" placeholder='Enter your query…' rows="7"></textarea>
                    </div>
                    <div class="mb-3">
                      <button type="submit" class="btn submit_btn w-100 text-white">Submit</button>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='heding4'>WE ARE HERE</div>
                  <div className='contact_text'>INDER INCLAVE NEW DELHI</div>
                  <div className='mt-5'>
                    <div class="mapouter ">
                      <div class="gmap_canvas ">
                        <iframe className='w-100' width="" height="420" id="gmap_canvas" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        <a href="https://online-timer.me/"></a>
                        <br />
                        <a href="https://timenowin.net/"></a>
                        <br />

                      </div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </>
  )
}

export default page