import React from "react";
import '../stylesheet/Testimony.css'
function Testimony(props) {
    return (
        <div className="testimony">
            <img
                className="image-testimony"
                src={require(`../image/photo-${props.img}.png`)}
                alt="emma-photo"
            /> 
            <div className="testimony-text-container">
                <p className="text-name">
                    <strong> {props.name} </strong> in <strong> {props.place} </strong>
                </p>
                <p className="text-job">
                    {props.job} at <strong>{props.fabric} </strong>
                </p>
                <p className="text-testimony">"{props.testimony}"</p>
            </div>
            
        </div>
    )
}

export default  Testimony