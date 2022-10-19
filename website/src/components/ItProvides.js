import React from "react";
import DivBox from './DivBox';
import {FcDocument,FcPhotoReel,FcMoneyTransfer,FcGlobe,FcSmartphoneTablet} from 'react-icons/fc';
import '../styles/Itprovides.css';
import  Grid  from "@mui/material/Grid";

const ItProvides=()=>{
    return(
        <div className="provides">
            <h1 className="title">
                It provides us:
            </h1>
            <Grid container spacing={2}>
                <DivBox
                icon={<FcDocument size={35}/>}
                title={'Digital proof of ownership'}
                discription={'You can instantly have proof of ownership of any asset by connecting your wallet.'}
                />
                <DivBox
                icon={<FcPhotoReel size={35}/>}
                title={'Digital collection'}
                discription={'Have collectibles that can never be copied or forged.'}
                />
                <DivBox
                icon={<FcMoneyTransfer size={35}/>}
                title={'Transfer of value'}
                discription={'Transfer of value/earnings becomes highly secure.'}
                />
                <DivBox
                icon={<FcGlobe size={35}/>}
                title={'Interoperability'}
                discription={'A single metaverse with multiverse projects is being worked on using blockchain.'}
                />
                <DivBox
                icon={<FcSmartphoneTablet size={35}/>}
                title={'Accessibility'}
                discription={'Anyone from anywhere can create a wallet on public blockchains'}
                />
            </Grid>
        </div>
    )
}

export default ItProvides;