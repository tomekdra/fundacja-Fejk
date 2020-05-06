import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import smallLogo from '../../images/fejk.png'

const MutipleSlidesPerView = () => {
    const params = {

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
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
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
                slidesPerView: 5,
                spaceBetween: 20,
            },

        }
    }
    return (

        <Swiper {...params}>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O nas</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <a href="?f=ONas" className="button-see">ZOBACZ</a>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O nas</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <a href="?f=ONas" className="button-see">ZOBACZ</a>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O nas</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <a href="?f=ONas" className="button-see">ZOBACZ</a>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O nas</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <a href="?f=ONas" className="button-see">ZOBACZ</a>
                </div>
            </div>
            <div className="swiper-slide">
                <div className="card">
                    <img src={smallLogo} alt="Fundacja Fejk"/>
                    <h2>O nas</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda cumque exercitationem magni, maiores
                        natus repellat.</p>
                    <a href="?f=ONas" className="button-see">ZOBACZ</a>
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </Swiper>

    )
};
export default MutipleSlidesPerView;