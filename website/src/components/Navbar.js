import * as Mui from '@mui/material';
import React from "react";
<<<<<<< HEAD
import Web3 from 'web3';

const Navbar =()=>{

    var web3 = new Web3(Web3.givenProvider||"ws://localhost:8545");

    function getWalletAddress(e){
        e.preventDefault();
        web3.eth.requestAccounts().then(console.log);
    }
    
=======

const Navbar =()=>{
>>>>>>> f8f25b7f7dca2870de03aa7c89de58f678e125e3
    return(
        <nav className="navbar">
            <div className="navbar links">
                <div className="squiverlogo floatLeft"><img src=".\icons\squirrel_Logo.png" alt="" /></div>
                <div className="navbar-links-container      ">
                    <div className="navbarlinks floatLeft"><button className='leftLine'><a href="">Home</a></button></div>
                    <div className="navbarlinks  floatLeft"><button className='leftLine'><a href="">About</a></button></div>
                    <div className="navbarlinks floatLeft"><button className='leftLine'><a href="">Solutions</a></button></div>
                    <div className="navbarlinks floatLeft"><button className='leftLine'><a href="">Resources</a></button></div>
                    <div className="navbarlinks floatLeft"><button className='leftLine'><a href="">Contact</a></button></div>
<<<<<<< HEAD
                    <div className="navbarlinks floatLeft"><button onClick={getWalletAddress} className='leftLine'><a href="">Get NFT</a></button></div>
=======
>>>>>>> f8f25b7f7dca2870de03aa7c89de58f678e125e3
                </div>
            </div>
        </nav>
    )
}

export default Navbar;