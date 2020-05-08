import React from "react";
import { useFormik } from 'formik'

const SupportUsInputs = () => {

    const formik = useFormik(
        {
            initialValues: {
                fullName: '',
                email: '',
                tel: '',
                birth: '',
                message: '',
            },
            onSubmit: values => {
                console.log(JSON.stringify(values, null, 2))
            },
        }
    );

    return (
        <form onSubmit={formik.handleSubmit} className={"supportus-form"}>
            <label htmlFor={"fullName"}>Podaj imię i nazwisko</label>
            <input
                id="fullname"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullName}
            />
            <label htmlFor={"email"}>Email adress</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor={"tel"}>Numer Telefonu</label>
            <input
                id="tel"
                name="tel"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.tel}
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