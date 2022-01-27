import React from "react"

function Alert(props){
    const toUpCase = (msg)=>{
        return msg.slice(0,1).toUpperCase()+msg.slice(1,msg.length);
    }
    
    return(
        <div style={{
            height:"50px"
        }}>
        {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{toUpCase(props.alert.type)}</strong>:{props.alert.msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
        
    )
}

export default Alert