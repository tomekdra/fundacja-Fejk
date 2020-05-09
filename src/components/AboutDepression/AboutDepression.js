import React from "react";
import img from "../../images/girl-447701.jpg";
import statystyki from "../../images/statystyki.jpg";

const AboutDepression = () => {
    return (
        <section className="aboutdepression-wrapper" id={"aboutdepression"}>
            <div className="container">
                <div className="section-text">
                    <h3>O depresji</h3>
                    <img src={img} alt={"Alone"}/>

                    <p>Mówiąc o depresji przede wszystkim należy pamiętać, że mamy do czynienia z jednostką chorobową. Depresja jest zaburzeniem wchodzącym w skład zaburzeń afektywnych czyli zaburzeń nastroju. To fizyczne i psychiczne zniechęcenie o wielkiej głębi, odmienne od tego co może odczuwać zdrowa osoba, tak w wymierzę jakościowym jak i ilościowym.</p>

                    <h4>Smutek, dołek czy depresja</h4>

                    <p>Chandra, smutek, dołek to synonimy przejściowego złego nastroju, którego doświadcza człowiek na różnych etapach swojej egzystencji. Sama zdolność do odczuwania smutku pośród innych postaw i zachowań, jest ewidentnym dowodem normalności osoby ludzkiej wrażliwej na otoczenie w którym nie może zaradzić czy położyć kresu niesprawiedliwościom. Istnieje jednak smutek głębszy, w terminologii filozoficznej – smutek egzystencjalny – smutek nieproporcjonalny do wywołujących go bodźców, smutek trwający znacznie dłużej i którego reperkusje są głębsze we wszystkich aspektach ludzkiej osoby, jej pracy, relacji społecznych. Smutek ten jest zdecydowanie patologiczny.</p>

                    <h4>Smutek człowieka w depresji. Charakterystyka:</h4>
                    <ul className={"ul-list"}>
                        <li>poczucie niemocy</li>
                        <li>wewnętrzne przepełnienie męką</li>
                        <li>jego intensywność wywołuje uczucie absolutnej bezradności</li>
                    </ul>
                    <p>Takich sygnałów nie sposób przeoczyć. Zwłaszcza wobec osoby którą dobrze znamy.</p>


                    <p>Według Światowej Organizacji Zdrowia (WHO) depresja zaliczana jest do jednego z najpoważniejszych zagrożeń zdrowotnych naszych czasów. Depresja zawsze stanowi bezpośrednie zagrożenie dla życia. Prowadzone przez Policję statystyki obrazują skalę problemu samobójstw. Szczególnie niepokojące są dane dotyczące dzieci i młodzieży. Poniżej przedstawiamy nieco informacji na ten temat z lat 2017-2019r. Proszę pamiętać, że nie każda próba samobójcza jest zgłaszana Policji. Obowiązek zawiadomienia Policji dotyczy sytuacji, kiedy zamach samobójczy zakończy się zgonem. Ostatnia kolumna w tabeli pod wykresem, dotyczy ogólnej ilości zamachów samobójczych w latach 2017-2019 i nie jest uwzględniona na wykresie. Analiza powstała na podstawie ogólnodostępnych raportów Policji. W razie pytań pozostajemy do dyspozycji.
                    </p>
                        <div className={"aboutdepression-statistic"}><img src={statystyki} alt={"Statystyki"} /></div>


                </div>
            </div>
        </section>
    )
}

export default AboutDepression;