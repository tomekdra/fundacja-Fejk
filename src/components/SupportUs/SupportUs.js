import React from "react";
import SupportUsInputs from "./SupportUsInputs";

const SupportUs = () => {
    return (
        <section className="supportus-wrapper" id={"supportus"}>
            <div className="container">

                <h3>Wolontariat</h3>
                <div className={"supportus-text"}>
                    <p>Wszystkich chętnych zapraszamy do współpracy z naszą fundacją w ramach wolontariatu. Dla naszych wolontariuszy przygotowaliśmy specjalny program wolontariatu, który pomoże Wam nie tylko w rozwijaniu wrażliwości, pracy na rzecz innych osób ale również w samorozwoju w dziedzinach, które ściśle związane są z naszą działalnością. </p>
                    <p>Wolontariat to wielka misja, która należy pielęgnować w sobie każdego dnia. W Fundacji Fejk będziecie mieć okazję do uczestnictwa we wszystkich naszych projektach ale również współtworzyć z nami od podstaw organizację z wielką przyszłością.</p>
                </div>

                <div className="supportus-form-container">
                    <SupportUsInputs />
                </div>
            </div>
        </section>
    )

}

export default SupportUs;