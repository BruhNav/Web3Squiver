import React from "react";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai';
import {BsMedium} from 'react-icons/bs';



const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer_social">
                <span>FOLLOW US ON</span>
                <a><AiFillInstagram size={23}/></a>
                <a><AiFillLinkedin size={23}/></a>
                <a><AiFillTwitterCircle size={23}/></a>
                <a><BsMedium size={23}/></a>
            </div>
            <div className="morelinks">
                <a href="/">Home</a>
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
            </div>
            <p className="border-line"></p>
            <div className="copy">COPYRIGHT © 2022 SQUIRRELVERSE LLC </div>
            <div className="rights">ALL RIGHTS RESERVED</div>
            <div className="logosquiver"><img src="./icons/squirrel_logo.png" alt="" /></div>
        </div>
    )
}

export default Footer;