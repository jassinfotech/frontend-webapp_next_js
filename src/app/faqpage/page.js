import React from 'react'
import './faq.css'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { FaSearch } from "react-icons/fa";
import { MdHelp } from "react-icons/md";


function page() {
  return (
    <>
      <Header />
      <div className='row_padding'>
        <div className='container-fluid'>
          <div className='row '>
            <div className='col align-items-end'>
              <div className='heding1'>FAQ </div>
              <span className='heding2'>Home</span>
              <a className='link_contact' href='#'>/ FAQ</a>
            </div>
          </div>
        </div>
      </div>
      <section className='pt-5'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <div className='text-center heding3 py-4'>They frequently asked question</div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='row'>
                <div className='col-lg-5 col-md-5 mx-auto py-4'>
                  <div className="search-box">
                    <div className="input-group search_b d-flex">
                      <input type="text" id="search" className="form-control" placeholder="Search Keyword" />
                      <span className="input-group-addon search_icon"><FaSearch /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-6 p-5'>
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

                <div className='col-lg-6 p-5'>
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
              </div>
            </div> </div>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-7 p-5'>
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
                  <img src='faq.png' style={{ width: '400px', margin: '0px auto' }}></img>
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