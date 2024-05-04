import React from 'react'

function Changepassword() {
  return (
    <div>
        <div className='container p-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div class="form-group">
                            <label id='Currentpassword' className='pb-2 cur_rent'><b>Current password</b></label>
                            <input type="text" for='Currentpassword' class="form-control login_input" placeholder=" Confirm password" required="required" />
                            <br/>
                            <label id='Currentpassword' className='pb-2'><b>New password</b></label>
                            <input type="text" for='Currentpassword' class="form-control login_input" placeholder=" Enter new password" required="required" />
                            <br/>
                            <label id='Currentpassword' className='pb-2'><b>Confirm password</b></label>
                            <input type="text" for='Currentpassword' class="form-control login_input" placeholder="Enter confirm password" required="required" />
                            <br/>
                            <div className='text-end pt-5'>
                            <button type="submit" class="btn   px-3 mybtn ml">submit</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Changepassword