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
        onSubmit: (values, {setSubmitting, resetForm, setStatus}) => {

            const data = JSON.stringify(values);
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://formspree.io/xvowgwlb");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    console.log(xhr.status)
                    console.log("Done")
                    setSubmitting(false);
                    resetForm();
                } else {
                    console.log("Failed")
                }
            };
            xhr.send(data);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className={"contactus-form"}>
            <label htmlFor="email">
                {formik.errors.email ? <div className={"error"}>{formik.errors.email} </div> : "Podaj email:"}
            </label>
            <input
                type="text"
                name={"email"}
                id={"email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                className={"input"}
            />
            <label htmlFor="message">
                {formik.errors.message ? <div className={"error"}>{formik.errors.message}</div> : "Wiadomość:"}
            </label>
            <textarea
                id={"message"}
                value={formik.values.message}
                onChange={formik.handleChange}
            />

            <button type={"submit"} className={"btn-submit"} disabled={formik.isSubmitting}>Wyślij</button>
        </form>
    )
}

export default ContactUsInputs;