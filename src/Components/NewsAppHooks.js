import React from "react";
import { useState,useEffect } from "react";
import axios from "axios"
const NewsAppHooks=()=>{
    const [news,setNews]=useState([])
    const [search,setSearch]=useState("")
    useEffect(
        ()=>{
            axios.get("https://hn.algolia.com/api/v1/search?query=react").
            then((res)=>setNews(res.data.hits)).catch((err)=>console.log(err))
        }
    )
  {/* const callAPI=()=>{
        axios.get("https://hn.algolia.com/api/v1/search?query=react").
        then((res)=>setNews(res.data.hits)).catch((err)=>console.log(err))
    }*/} 
    const handleChange=(event)=>{
       setSearch(event.target.value)
    }
    return(
        <div>
            <h1> News About React </h1>
          { /* <form>
                <input type="text" onChange={handleChange}></input>
            </form>
            <button
            onClick={()=>callAPI()}>get news </button>*/}
            {
                news.map(
                    (item)=>(
                        <div>
                            <h1> {item.title}</h1>
                            <a href={item.url}>read more</a>
                            </div>
                    )
                )
            }
        </div>
    )
}
export default NewsAppHooks