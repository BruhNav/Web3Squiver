import * as Mui from '@mui/material';
import React from "react";
import Web3 from 'web3';
import NavDrawer from './NavDrawer';

const Navbar =()=>{

    var web3 = new Web3(Web3.givenProvider||"ws://localhost:8545");

    function getWalletAddress(e){
        e.preventDefault();
        web3.eth.requestAccounts().then(console.log);
    }
    if(window.innerWidth<700){
        return (
            <NavDrawer/>
          );
    }
    else{
        return(
            <nav className="navbar">
                <div className="navbar links">
                    <div className="squiverlogo floatLeft"><img src=".\icons\squirrel_Logo.png" alt="" /></div>
                    <div className="navbar-links-container      ">
                        <div className="navbarlinks floatLeft"><button className='leftLine'><a href="">Home</a></button></div>
                        <div className="navbarlinks  floatLeft"><button className='leftLine'><a href="https://squirrelverse.io/about">About</a></button></div>
                        <div className="navbarlinks floatLeft"><button className='leftLine'><a href="">Solutions</a></button></div>
                        <div className="navbarlinks floatLeft"><button className='leftLine'><a href="">Resources</a></button></div>
                        <div className="navbarlinks floatLeft"><button className='leftLine'><a href="#contact">Contact</a></button></div>
                        <div className="navbarlinks floatLeft"><button onClick={getWalletAddress} className='leftLine'><a href="">Get NFT</a></button></div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;