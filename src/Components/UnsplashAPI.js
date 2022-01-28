import React from "react";
import axios from "axios"
class UnsplashAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            images:[],
            search:""
        }
    }
   componentDidMount(){
       setTimeout(()=>{
        const url="https://api.unsplash.com/search/photos?client_id=qdaCRvUmyx6hQiAghT-SuxRpUP5SPqOkx-rtktFz7ag&page=1&query=india"
        axios.get(url).then((res)=>this.setState({images:res.data.results})).catch((err)=>console.log(err))
       },6000)
    
    }
    
    handleSearchText=(event)=>{
        this.setState({search:event.target.value})
    }
    render(){
       
        return(
            <div>
              
                    <input type="text" placeholder="enter search text"
                    onChange={this.handleSearchText}></input>
                    
                {
                    this.state.images.map(
                        (item)=>(
                            
                                <img src={item.urls.small} alt="not available"></img>
                           
                        )
                    )
                }
            </div>
        )
    }
}
export default UnsplashAPI