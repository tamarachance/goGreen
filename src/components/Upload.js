import React from 'react';
import Logo from './Logo';
import Footer from './Footer';
import Dropzone from "react-dropzone-uploader";
import 'react-dropzone-uploader/dist/styles.css'

function Upload({ fetchUploads }) {
    const getUploadParams = () => console.log('something uploaded goes here')
//   const getUploadParams = ({ file }) => {
//     const body = new FormData()
//     body.append('image', file)
//     return {
//       url: 'http://localhost:8000/api/uploads',
//       body
//     };
//   }
    const handleSubmit=()=> console.log('you uploaded a photo')
//   const handleSubmit = (files, allFiles) => {
//     allFiles.forEach(f => f.remove())
//     fetchUploads();
//   }

  return (
    <div className='upload'>
        <Logo />
        <div className='upload-container'>  
            <Dropzone
                getUploadParams={getUploadParams}
                onSubmit={handleSubmit}
                accept="image/*"
                maxFiles={1}
                multiple={false}
                styles={{
                dropzone: { width: 254, maxHeight: 250}
                }}
            />
            <div className='button-container'>
                <input type="radio" /> Reduce
                <br />
                <input type="radio" /> Reuse
                <br />
                <input type="radio" /> Recycle
                <br />
                <input type="text" size="lg" />
            </div>
            <button>Submit</button>
        </div>
        <Footer />
    </div>
  );
}

export default Upload;