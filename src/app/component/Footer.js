import React from 'react'

function Footer() {
  return (
    <>
      <footer class="pt-5 pb-3 ftr_bg_clr">
        <div class="container pt-3">
          <div class="row">
            <div class="col-md-3">
              <div class=" pb-4">
                <span class="logo">Select</span><span class="logo1">karo</span>
              </div>
              <p class="footer_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                sed eleifend augue. Etiam in augue dolor. Phasellus felis orci,
                mattis sed lectus porttitor, dictum sollicitudin sapien. Vivamus
                leo tellus, commodo at feugiat sit amet, auctor in leo. Nullam
                quis nibh vestibulum, ornare urna eget,
              </p>
              <div className='social_icon mx-auto'>
                <a href='#'><img src='yout.svg'></img></a>
                <a href='#'><img src='twt.svg'></img></a>
                <a href='#'><img src='instag.svg'></img></a>
                <a href='#'><img src='facebook.svg'></img></a>

              </div>
            </div>
            <div class="col-md-2 offset-1">
              <div class="ps-4 pb-4">
                <span class="list_hading">Services</span>
              </div>
              <ul class="list">
                <li><a class="link_list" href="#">Recharge</a></li>
                <li><a class="link_list" href="#">Bill Payment</a></li>
                <li><a class="link_list" href="#">Money Transfer</a></li>
                <li><a class="link_list" href="#">Flight Booking</a></li>
                <li><a class="link_list" href="#">water</a></li>
                <li><a class="link_list" href="#">shopping</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <div class="ps-4 pb-4">
                <span class="list_hading">Company</span>
              </div>
              <ul class="list">
                <li><a class="link_list" href="#">Services</a></li>
                <li><a class="link_list" href="#">About Us</a></li>
                <li><a class="link_list" href="#">Contact Us</a></li>
                <li><a class="link_list" href="#">Privacy Policy</a></li>
                <li><a class="link_list" href="#">Refund Policy</a></li>
                <li><a class="link_list" href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <div class="ps-4 pb-4">
                <span class="list_hading">Contact Us</span>
              </div>
              <ul class="list">
                <li><a class="link_list" href="#">+91 90154 83838</a></li>
                <li><a class="link_list" href="#">+91 90154 83838</a></li>
                <li><a class="link_list" href="#">info@selectkaro.com</a></li>
              </ul>
              <div class="ps-4">
                <div class="bdr_top pt-1">
                  <div class="hrad_offic py-2">Head Office</div>
                  <p class="link_list">
                    Plot NO 107-A/1 KH.NO. 37/14 Ground Floor Blk-D Inder Enclave
                    Phase 2 NewDelhi North West DL 110086 IN
                  </p>
                </div>
              </div>
            </div>
            <div class="row bdr_top mt-15 pt-3">
              <div class="col-md-6">
                <div class="link_list">Allright reserved 2022 @Selectkaro</div>
              </div>
              <div class="col-md-6 text-end">
                <a href="#" class="link_list">Refund policy</a>
                <a href="#" class="link_list ps-5">Privacy policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>

  )
}

export default Footer