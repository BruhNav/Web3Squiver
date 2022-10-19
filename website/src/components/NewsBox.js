import React from "react";
import '../styles/resources.css';

const NewsBox = (props) =>{
    return(
        <div className="cardcontainer">
                <img src={props.imagelink} alt="" />
            <div className="headlines ">
                {props.headlines}
            </div>
        </div>
    )
}
export default NewsBox;
