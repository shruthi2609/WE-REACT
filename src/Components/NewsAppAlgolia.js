import axios from "axios"
import { useEffect, useState } from "react"
const NewsAppAlgolia=(props)=>{
    console.log(props.search)
    const [news,setNews]=useState([])
    useEffect(
        ()=>{
            axios.get("https://hn.algolia.com/api/v1/search?query=react").then((res)=>setNews(res.data.hits)).catch((err)=>console.log(err))
        }
    )
return(
    <div>
        <h3> News  about {props.search}</h3>
        {
            news.map((item)=>(
                <div>
                    <h1>{item.title}</h1>
                    <a href={item.url}>Read here</a>
                </div>
            ))
        }

        
    </div>
)
}
export default NewsAppAlgolia