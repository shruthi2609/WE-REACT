import React from "react";
import { useState,useEffect } from "react";
const HooksLifeCycle=(props)=>{
    const [msg,setMsg]=useState("inital")
    useEffect(
       ()=>
       {
           setMsg(props.message)
       },[props]
    )
    return(
        <div>
            <h1>{msg}</h1>
            <h2>{props.uname}</h2>
        </div>
    )
}
export default HooksLifeCycle