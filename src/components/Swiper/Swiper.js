import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import smallLogo from '../../images/fejk.png'
import {NavHashLink as NavLink} from "react-router-hash-link";

const MutipleSlidesPerView = () => {
    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slideToClickedSlide: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
        },
        slidesPerView: 1,
        initialSlide: 2,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },

        }
    }
    return (
        <Swiper {...params}>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O depresji</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <NavLink smooth to={"/o-depresji"} className={"button-see"}>ZOBACZ</NavLink>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O depresji</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <NavLink smooth to={"/o-depresji"} className={"button-see"}>ZOBACZ</NavLink>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O nas</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <NavLink smooth to={"/o-nas"} className={"button-see"}>ZOBACZ</NavLink>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O nas</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <NavLink smooth to={"/o-depresji#aboutdepression"} className={"button-see"}>ZOBACZ</NavLink>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O nas</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <NavLink smooth to={"/o-depresji#aboutdepression"} className={"button-see"}>ZOBACZ</NavLink>
                </div>
            </div>
        </Swiper>

    )
};
export default MutipleSlidesPerView;