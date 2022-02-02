import React, { useState } from 'react';
import './upload.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import Dropzone from "react-dropzone-uploader";
import 'react-dropzone-uploader/dist/styles.css';
import NavHeader from '../NavHeader/NavHeader';
import NavSide from '../NavSide/NavSide';
import swal from 'sweetalert';
import axios from 'axios';
import {useFormik} from 'formik';
import { useNavigate } from 'react-router';


function Upload({ menuClick, isLoggedIn, setActive, isActive}) {
    const navigate = useNavigate()
    const [url, setUrl] = useState("")

    const initialValues = {
        actionType:"250",
        description:" "
    }

    const onSubmit = (values) => {
        const todayDate = new Date();
        const userID = localStorage.getItem('id')
        const bodyObject = {
            user_id: userID,
            image_Url: url,
            actionValue: values.actionType,
            description: values.description,
            createdAt: todayDate
        }
        // console.log(bodyObject)
        axios.post("http://localhost:4000/uploads", bodyObject)
            .then(res => {
                localStorage.setItem('totalPoints', res.data.totalPoints)
            })
            .then(() => {
                swal({
                    title: 'Your rewards are on the way!',
                    text: 'Please allow up to 24hrs for your points to post.',
                    icon: "success"
                })
        }).then(navigate('/home'))       
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        
    })
    
    const getUploadParams = async ({ file }) => {
        const body = new FormData()
        body.append('image', file)
        const result = await axios.post('http://localhost:4000/images', body, { headers: {'Content-Type': 'multipart/form-data'}})
        setUrl(result.data.imagePath)        
        
    }
   
  return (
    <div className='upload'>
        <NavHeader />
        <NavSide isLoggedIn={isLoggedIn} menuClick={menuClick} setActive={setActive} isActive={isActive}/>
        <Logo menuClick={menuClick}/>
        <form className='upload-container' onSubmit={formik.handleSubmit}>  
            <Dropzone
                getUploadParams={getUploadParams}
                accept="image/*"
                maxFiles={1}
                multiple={false}
                styles={{
                dropzone: { width: 254, maxHeight: 250},
            
                }}
            />
            <div className='button-container'>
                <label htmlFor="actions">Which sustainable action did you take today?</label>
                <select name="actionType" id="actions" onChange={formik.handleChange} value={formik.values.actionType} >
                    <option value="2500">Reduced emmisions/consumptions</option>
                    <option value="2000">Composted</option>
                    <option value="1000">Upcycled into something new</option>
                    <option value="500">Reused/Donated for reuse</option>
                    <option value="250">Recycled</option>
                </select>
                <br />
                <label>Describe your photo:<input 
                    type="text" 
                    size="lg" 
                    name='description' 
                    onChange={formik.handleChange} 
                    value={formik.values.description} 
                /></label>
            </div>
            <br />
            <button type="submit" disabled={!formik.isValid}>Submit</button>
        </form>
        <Footer />
    </div>
  );
}

export default Upload;