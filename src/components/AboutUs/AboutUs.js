import React from "react";
import img from '../../images/depresja-dzieci-712x515.jpg'

const AboutUs = () => {
    return (
        <section className="aboutus-wrapper" id={"aboutus"}>
            <div className="container">
                    <div className="section-text">
                        <h3>O nas</h3>
                        <img src={img} alt={"Alone"}/>

                            <p>Fundacja Fejk -nazwa pochodzi ze spolszczonego słowa
                                „fake”, co w tłumaczeniu oznacza falsyfikację imitację.
                                Zgodnie z naszą koncepcją ma to to za zadanie,
                                bezpośrednio nawiązywać do rzeczywistości w której
                                przyszło funkcjonować aktualnie wszystkim dzieciom i
                                młodzieży, rzeczywistości która wymusza na nich pewne
                                standardy, standardy z którymi szczególnie kiedy się nie
                                zgadzają muszą boleśnie walczyć. Jest to albo walka
                                wewnętrzna, prowadząca niejednokrotnie do depresji albo
                                walka „otwarta” – nie mniej jednak jedna i druga jest
                                walką z wiatrakami. </p>
                            <p>Fundacja Fejk powstała w odpowiedzi na problem społeczny
                                jakim są choroby psychiczne wśród dzieci i młodzieży.
                                Źródła tych problemów sięgają wielu płaszczyzn. Nasz
                                program zaczynamy od zbudowania świadomości, że problemy
                                psychiczne nie „są” tylko dla ludzi dojrzałych czy
                                starszych. Dotykają także najmłodszych, dotykają
                                młodzież, dotykają nasze dzieci. Może właśnie twoje.
                                Choć trudno się z tym pogodzić, czasem łatwo przeoczyć
                                zwłaszcza w tym trudnym okresie dorastania, dojrzewania,
                                doświadczania nowych rzeczy… Obserwujmy nasze dzieci.
                                Nie każmy im „wziąć się w garść” </p>
                    </div>
            </div>
        </section>
    )
}

export default AboutUs;