import React from "react";
import '../styles/keyobjective.css'
import { Grid } from "@mui/material";

const KeyObjective=()=>{
    return(
        <div style={{"margin-top":"100px"}} >
            <h1 className="title">Our Key Objective</h1>
            <Grid className="keyobjcontainer" container spacing={2} >
                <Grid lg={4} xs={6} className="keyobj"><div className="breakline"></div>Our mission at Squirrel Verse is to be the trusted metaverse innovation and adoption partner.</Grid>
                <Grid lg={4} xs={6} className="keyobj"><div className="breakline"></div>Help your brand Evolve with the market</Grid>
                <Grid lg={4} xs={6} className="keyobj"><div className="breakline"></div>Drive Metaverse adoption</Grid>
                <Grid lg={4} xs={6} className="keyobj"><div className="breakline"></div>Support Creator economy and other Web3 principles</Grid>
                <Grid lg={4} xs={6} className="keyobj"><div className="breakline"></div>Build thriving communities around your brand</Grid>
                <Grid lg={4} xs={6} className="keyobj"><div className="breakline"></div>Integrate Web3 and Web2 principles</Grid>
            </Grid>
        </div>
    )
}

export default KeyObjective;