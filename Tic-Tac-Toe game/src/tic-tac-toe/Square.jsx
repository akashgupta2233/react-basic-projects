import React  from "react";
import './Square.css'

const Square=(props)=>{
    return(
        <div onClick={props.onClick} className="square">
            {props.value}
        </div>
    )
}

export default Square ;