import React from "react";
import DivBox from "./DivBox";
import {FcReading} from 'react-icons/fc'

const Howehelp=()=>{
    return(
        <div className="howehelp">
            <h1 className="title">We help you to fill the gap between you and Metaverse:</h1>
            <div className="divboxcontainer">
                <DivBox
                icon={<FcReading size={42}/>} 
                title={"Knowledge Barrier"}
                discription={"Easily understand what Metaverse and Web3 are. Better understanding helps you make better decisions"}
                />
                <DivBox
                icon={<FcReading size={42}/>} 
                title={"Web2 Fitment"}
                discription={"Worried about trying new technologies? We provide solutions integrating Web2 and Web3."}
                />
                <DivBox
                icon={<FcReading size={42}/>} 
                title={"Uncertain ROI"}
                discription={"We know the world’s still prepping, and there are fewer case studies. We consult, handhold, and provide useful tools."}
                />
                <DivBox
                icon={<FcReading size={42}/>} 
                title={"Safety and Security"}
                discription={"We know what concerns you. SquirrelVerse provides utility-based tools for different verticles"}
                />
            </div>
        </div>
    )
}

export default Howehelp;