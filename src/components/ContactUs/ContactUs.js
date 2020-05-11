import React from "react";
import img from '../../images/fejk.png'
import ContactUsInputs from "./ContactUsInputs";

const ContactUs = () => {
    return (
        <section className="contactus-wrapper" id={"contactus"}>
            <div className="container">
                <div className={"contactus-container"}>
                    <h3>Kontakt</h3>
                    <img src={img} className={"contactus-fejk-logo"} alt={"Fejk logo"}/>

                    <p>Masz jakieś pytania? Potrzebujesz pomocy? Napisz do nas: </p>
                    <div className="contactus-form-container">
                        <ContactUsInputs />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;