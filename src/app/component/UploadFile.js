import React from 'react'

const UploadFile = ({ButtonClick})=> {
    return (
        <button id="uploadButton" onClick={ButtonClick}><i class="fas fa-cloud-upload-alt"></i> Upload File</button>
    )
}

export default UploadFile