import React from "react";
import {useFormik} from 'formik'

const SupportUsInputs = () => {

    const errors = {};

    const validate = values => {
        if (!values.fullName) {
            errors.fullName = "Podaj Imię i nazwisko";
        } else if (values.fullName.length < 5) {
            errors.fullName = "Imię i nazwisko musi sie składać conajmniej 5 znaków";
        }

        if (!values.email) {
            errors.email = "Podaj adres email";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Niepoprawny adres email";
        }

        if(!values.tel) {
            errors.tel = "Podaj nr telefonu";
        } else if (toString(values.tel).length < 9) {
            errors.tel = "Nr telefonu musi zawierciać 9 cyfr"
        }

        return errors;

    }

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            tel: '',
            birth: '',
            message: '',
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        },
    });


    return (

        <form onSubmit={formik.handleSubmit} className={"supportus-form"}>
            <label htmlFor={"fullName"}>{formik.errors.fullName ? <div className={"error"}>{formik.errors.fullName}</div> : "Imię i nazwisko "}</label>
            <input
                id="fullname"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                className={formik.errors.fullName ? "error-input" : "input"}
            />
            <label htmlFor={"email"}>{formik.errors.email ? <div className={"error"}>{formik.errors.email}</div> : "Adres email"}</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={formik.errors.email ? "error-input" : "input"}
            />
            <label htmlFor={"tel"}>{formik.errors.tel ? <div className={"error"}>{formik.errors.tel}</div> : "Numer telefonu"}</label>
            <input
                id="tel"
                name="tel"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.tel}
                className={formik.errors.tel ? "error-input" : "input"}
            />
            <label htmlFor={"birth"}>Data urodzenia</label>
            <input
                id="birth"
                name="birth"
                type="date"
                onChange={formik.handleChange}
                value={formik.values.birth}
            />
            <label htmlFor={"message"}>Dlaczego pragniesz zostać wolontariuszem w naszej fundacji?</label>
            <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            <button type={"submit"} className={"btn-submit"}>Submit</button>
        </form>

    )
}

export default SupportUsInputs;