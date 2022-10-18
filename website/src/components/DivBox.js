import React from "react";  

const DivBox = (props) =>{
    return(
        <div className="divbox">
            <i className="icon">{props.icon}</i>
            <h2 className="title">{props.title}</h2>
            <p className="paragraph">{props.discription}</p>
        </div>
    )
}

export default DivBox;