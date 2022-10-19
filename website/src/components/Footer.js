import React from "react";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram} from 'react-icons/ai';
import {BsMedium} from 'react-icons/bs';
import '../styles/footer.css';


const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer_social">
                <span>FOLLOW US ON</span>
                <a href="https://www.instagram.com/metascreen_nft/"><AiFillInstagram size={23}/></a>
                <a href="https://www.linkedin.com/company/squirrel-web3/"><AiFillLinkedin size={23}/></a>
                <a href="https://twitter.com/Squirrel_web3"><AiFillTwitterCircle size={23}/></a>
                <a href="https://medium.com/@SquirrelVerse"><BsMedium size={23}/></a>
            </div>
            <div className="morelinks">
                <a href="/">Home</a>
                <a href="https://metascreen.squirrelverse.io/terms-and-conditions">Terms & Conditions</a>
                <a href="https://metascreen.squirrelverse.io/privacy-policy">Privacy Policy</a>
            </div>
            <p className="border-line"></p>
            <div className="copy">COPYRIGHT © 2022 SQUIRRELVERSE LLC </div>
            <div className="rights">ALL RIGHTS RESERVED</div>
            <div className="logosquiver"><img src="./icons/squirrel_logo.png" alt="" /></div>
        </div>
    )
}

export default Footer;