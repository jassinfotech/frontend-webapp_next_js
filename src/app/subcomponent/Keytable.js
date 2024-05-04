import React from 'react'
import './Personaldetails.css';

import { AiFillLock } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
function Apikey() {
    return (
        <>
            <div className='row  p-5'>

                <div className='text-start'>
                    <table className='w-100'>
                        <tr className='border-bottom pb-2'>
                            <th className='pb-2'>Name </th>
                            <th className='pb-2'>API Key</th>
                            <th className='pb-2'>Status</th>
                            <th className='pb-2'>Created date</th>
                            <th className='pb-2'>Action</th>
                        </tr>
                        <tr className=''>
                            <td className='pt-2'>My new API Key</td>
                            <td className='pt-2'><AiFillLock />*****************************</td>
                            <td className='pt-2'>Active</td>
                            <td className='pt-2'>10/06/2023</td>
                            <td className='pt-2'>
                                <div class="dropdown ">

                                    <a className='text-dark' id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">  <FaEllipsisV /></a>
                                    <ul class="dropdown-menu shadow border-none" aria-labelledby="dropdownMenu2">
                                        <li><button class="dropdown-item text_clr" type="button">Active </button></li>
                                        <li><button class="dropdown-item text_clr" type="button">Inactive</button></li>

                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Apikey