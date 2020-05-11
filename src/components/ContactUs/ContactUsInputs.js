import React from "react";
import { useFormik } from "formik";

const ContactUsInputs = () => {

    const errors = {};

    const validate = (values) => {
        if (!values.email) {
            errors.email = "Podaj adres email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Niepoprawny adres email";
        }

        if(!values.message) {
            errors.message = "Jakie masz pytania?";
        } else if (values.message.length < 6) {
            errors.message = "Napisz coś więcej";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            message: '',
        },
        validate,
        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={"contactus-form"}>
            <label htmlFor="email">{formik.errors.email ? <div className={"error"}>{formik.errors.email} </div> : "Podaj email:"}</label>
            <input type="text" name={"email"} id={"email"} value={formik.values.email} onChange={formik.handleChange} className={"input"}/>
            <label htmlFor="message">{formik.errors.message ? <div className={"error"}>{formik.errors.message}</div> : "Napisz o co pytasz:"}</label>
            <textarea type="text" id={"message"} value={formik.values.message} onChange={formik.handleChange} />
            <button type={"submit"} className={"btn-submit"}>Wyślij</button>
        </form>
    )
}

export default ContactUsInputs;