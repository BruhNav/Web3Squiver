import React from "react";
import { Grid } from "@mui/material";
import '../styles/whoAndWhat.css';

const WhoAndWhat=()=>{
    return(
        <Grid>
            <Grid lg={4}>
            <div className="girlimg"><img src="./icons/Whoarewe.c82be53eb54b68ca94d.webp" alt="" /></div>
            </Grid>
            <Grid lg={8}>
                <div className="whoandwhat ">
                    <h2 className="title">Who are we?</h2>
                    <p className="paragraph">SquirrelVerse provides you with Metaverse solutions to leverage its full potential. We Educate, Consult, Onboard, and Manage when you decide to take a step into the Metaverse world.</p>
                    <h2 className="title">What do we do?</h2>
                    <p className="paragraph">SquirrelVerse is your elevator to Metaverse. We all have been listening to what Metaverse is. But how do we utilize it for your business benefit?</p>
                </div>
            </Grid>
            <div className="answer">SquirrelVerse is the answer to that question.</div>
        </Grid>
    )
    
}

export default WhoAndWhat;