import React from 'react';
import './upload.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import Dropzone from "react-dropzone-uploader";
import 'react-dropzone-uploader/dist/styles.css';
import NavHeader from '../NavHeader/NavHeader';
import NavSide from '../NavSide/NavSide';

function Upload({ fetchUploads, menuClick, isLoggedIn, setActive, isActive }) {
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
        <NavHeader />
        <NavSide isLoggedIn={isLoggedIn} menuClick={menuClick} setActive={setActive} isActive={isActive}/>
        <Logo menuClick={menuClick}/>
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
                <input type="radio" /> Reduced your consumption/emission
                <br />
                <input type="radio" /> Reused an item or donated for reuse
                <br />
                <input type="radio" /> Recycled <br />
                <br />
                Describe your photo:<input type="text" size="lg" />
            </div>
            <br />
            <button>Submit</button>
        </div>
        <Footer />
    </div>
  );
}

export default Upload;