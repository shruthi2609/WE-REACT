import React  from "react";
const Completed=(props)=>{
    console.log(props)
    return(
        <div>
        <h2>Completed Tasks </h2>
        {
            props.items.map((item)=>(
                item.active?
                <div>
                    <p> {item.title}</p>
                    <button>Delete</button>
                </div>:<></>
            ))
        }
        </div>
    )
}
export default Completed