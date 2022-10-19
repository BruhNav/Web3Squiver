import Grid from "@mui/material/Grid";
import React from "react";  
import '../styles/divbox.css'

const DivBox = (props) =>{
    return(
        <Grid xs={12} lg={6} >
            <div className="divbox">
                <i className="icon">{props.icon}</i>
                <h2 className="title">{props.title}</h2>
                <p className="paragraph">{props.discription}</p>
            </div>
        </Grid>
    )
}

export default DivBox;