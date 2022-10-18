import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import * as Mui from '@mui/material';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const IntroductionSwiper=()=>{
    const slides = [];

        slides.push(
            <SwiperSlide key={1}>
                <div >
                    <div className="sliderText">
                        <h1 className="title">Bridging the Gap between Your Business and Metaverse</h1>
                        <div>We are making Brands and Creators Metaverse ready. Brands who are investing early are getting cutting-edge benefits and are transforming their business models for the future.</div>
                        <button className="fillup" variant="contained"><link rel="stylesheet" href="" />Contact Us</button>
                    </div>
                    <img src="./icons/squirrel-min.3c7e9d82a47c04484f3c.webp" alt="" className="sliderImage"/>
                </div>
            </SwiperSlide>
        )
        slides.push(
            <SwiperSlide key={2}>
                    <div>
                        <div className="sliderText">
                            <h1 className="title">Squirrel Verse Presents Metascreen India's First NFT as a Movie Ticket</h1>
                            <div>Watch Mithila Makhaan, first ever Maithili Film to win a national award by government of India.</div>
                            <button className="fillup" variant="contained"><link rel="stylesheet" href="" />Visit</button>
                        </div>
                        <img src="./icons/float.71f6b5460cd4989ea608.webp" alt="" className="sliderImage"/>
                    </div>
            </SwiperSlide>
            )

    return(
        <React.Fragment>
            <Swiper id='main'>{slides}</Swiper>
        </React.Fragment>
    )
}

export default IntroductionSwiper;