import React from "react";
import img from '../../images/fejk.png'
import ContactUsInputs from "./ContactUsInputs";

const ContactUs = () => {
    return (
        <section className="contactus-wrapper" id={"contactus"}>
            <div className="container">

                <h3>Kontakt</h3>

                <div className={"contactus-container"}>

                    <img src={img} className={"contactus-fejk-logo"} alt={"Fejk logo"}/>


                    <div className="contactus-form-container">
                        <p>Masz jakieś pytania? Potrzebujesz pomocy? Napisz do nas: </p>
                        <ContactUsInputs/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;