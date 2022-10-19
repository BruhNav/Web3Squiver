import React from "react";
import '../styles/whychoose.css';
import { Grid } from "@mui/material";

const WhyChoose=()=>{
    return(
        <Grid className="gridcontainer" container spacing={2}>
            <Grid sm={12} lg={4}>
                <div className="leftpanel">
                    <h1 className="title">
                        Why choose SquirrelVerse
                    </h1>
                    <p className="paragraph">We are betting on Metaverse becoming the future of the internet</p>
                </div>
            </Grid>
            <Grid sm={12} lg={8}>
                <div className="rightpanel">
                        <div className="rightitem">
                            <h3 className="leftheading">Bridging Web2 and Web3</h3>
                            <p className="rightpara paragraph">Will you drastically shift to Web3? SquirrelVerse offers you solutions that combine tools from both Web2 and Web3.</p>
                        </div>
                        <div className="rightitem">
                            <h3 className="leftheading ">Unique consulting framework</h3>
                            <p className="rightpara paragraph">Our distinguished consulting solutions provide you with the easiest Metaverse roadmap by understanding your true business needs</p>
                        </div>
                        <div className="rightitem">
                            <h3 className="leftheading">World’s 1st Enterprise Software</h3>
                            <p className="rightpara paragraph">SquirrelVerse uses the best elements of both Web2 and Web3 to bring Security, Scalability, and High Performance.</p>
                        </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default WhyChoose;