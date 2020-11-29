import React from "react"

function Alert(props){


    return (
        
    <div className={`alert alert-${props.type}`}>{props.text}</div>
    )
}

export default Alert