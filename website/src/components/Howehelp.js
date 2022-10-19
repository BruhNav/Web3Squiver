import React from "react";
import DivBox from "./DivBox";
import {FcReading,FcDebt,FcCheckmark,FcSafe} from 'react-icons/fc'
import { Grid } from "@mui/material";


const Howehelp=()=>{
    return(
        <div className="howehelp">
            <h1 className="title">We help you to fill the gap between you and Metaverse:</h1>
            <Grid container spacing={2}>
                <DivBox
                icon={<FcReading size={42}/>} 
                title={"Knowledge Barrier"}
                discription={"Easily understand what Metaverse and Web3 are. Better understanding helps you make better decisions"}
                />
                <DivBox
                icon={<FcCheckmark size={42}/>} 
                title={"Web2 Fitment"}
                discription={"Worried about trying new technologies? We provide solutions integrating Web2 and Web3."}
                />
                <DivBox
                icon={<FcDebt size={42}/>} 
                title={"Uncertain ROI"}
                discription={"We know the world’s still prepping, and there are fewer case studies. We consult, handhold, and provide useful tools."}
                />
                <DivBox
                icon={<FcSafe size={42}/>} 
                title={"Safety and Security"}
                discription={"We know what concerns you. SquirrelVerse provides utility-based tools for different verticles"}
                />
            </Grid>
        </div>
    )
}

export default Howehelp;