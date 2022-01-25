import React from "react";
import Footer from "./Footer";
import Logo from "./Logo";
import { useFormik } from "formik";
import { useNavigate } from "react-router";

const Upload = () => {
    const navigate = useNavigate()

    const initialValues = {
        uploadImg: "",
        actionType: "",
        actionDescription: ""
    }

    const onSubmit = () => {
        console.log("hit")
        navigate("/home")
    }

    const validate = (values) => {
        const errors = {}
        if(!values.uploadImg) {
            errors.uploadImg = "You must upload an image."
        }
        if(!values.actionType) {
            errors.actionType = "Please select action type."
        }
        return errors
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return ( 
        <div>
            <form action="submit" onSubmit={formik.handleSubmit}>
                <input 
                    type="img"
                    name="upload"
    
                />
                <button type="radio" />
                <button type="radio" />
                <button type="radio" />
                <button type="radio" />
                <button type="radio" />
                <textarea 
                    type="text"
                    rowCount={3}
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.actionDescription}
                    placeholder="Describe your sustainable action."
                />
            </form>
        </div>
     );
}
 
export default Upload;