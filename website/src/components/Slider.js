import React from "react";
import Navbar from "./Navbar";

const Slider=()=>{
    return(
        <div className="slider">
        <input type="radio" name="slider" defaultChecked="true" />
        <div className="slider__content">
          <img src="./slider/man-experiencing-virtual-reality-with-device.jpg" />
          <div className="slider__description">
            <h1>Bridging the Gap between Your Business and Metaverse</h1>
            <p>
                We are making Brands and Creators Metaverse ready. Brands who are investing early are getting cutting-edge benefits and are transforming their business models for the future.
            </p>
            
            <a href="#">Contact Us</a>
          </div>
        </div>
        <input type="radio" name="slider" />
        <div className="slider__content">
          <img src="./slider/guerrillabuzz-crypto-pr-JlijbOtSWuw-unsplash.jpg" />
          <div className="slider__description">
            <h1>Squirrel Verse Presents Metascreen India's First NFT as a Movie Ticket</h1>
            <p>
                Watch Mithila Makhaan, first ever Maithili Film to win a national award by government of India.
            </p>
            <a href="#">Visit</a>
          </div>
        </div>
      </div>
    )
}

export default Slider;