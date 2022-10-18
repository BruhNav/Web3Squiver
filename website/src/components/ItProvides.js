import React from "react";
import DivBox from './DivBox'
import {FcDocument} from 'react-icons/fc'

const ItProvides=()=>{
    return(
        <div className="provides">
            <h1 className="title">
                It provides us:
            </h1>
            <div className="divboxcontainer">
                <DivBox
                icon={<FcDocument/>}
                title={'Digital proof of ownership'}
                discription={'You can instantly have proof of ownership of any asset by connecting your wallet.'}
                />
                <DivBox
                icon={<FcDocument/>}
                title={'Digital proof of ownership'}
                discription={'You can instantly have proof of ownership of any asset by connecting your wallet.'}
                />
                <DivBox
                icon={<FcDocument/>}
                title={'Digital proof of ownership'}
                discription={'You can instantly have proof of ownership of any asset by connecting your wallet.'}
                />
                <DivBox
                icon={<FcDocument/>}
                title={'Digital proof of ownership'}
                discription={'You can instantly have proof of ownership of any asset by connecting your wallet.'}
                />
                <DivBox
                icon={<FcDocument/>}
                title={'Digital proof of ownership'}
                discription={'You can instantly have proof of ownership of any asset by connecting your wallet.'}
                />
            </div>
        </div>
    )
}

export default ItProvides;