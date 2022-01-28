import React from "react"
import { useState } from "react"
const CounterHooks=()=>{
    const [count,setCount]=useState(0)
    const [res,setRes]=useState([])
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    return(
        <div>
            <button 
            onClick={increment}>+</button>
            <h3>{count}</h3>
            <button
            onClick={decrement}>-</button>
        </div>
    )
}
export default CounterHooks