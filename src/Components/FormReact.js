import React from "react";
class FormReact extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            message:""
        }
    }
    setProperties=(event,key)=>{
      if(key==="username"){
          this.setState({username:event.target.value})
      }
      else if(key==="msg"){
        this.setState({message:event.target.value})
      }
    }
    render(){
        return(
            <div>
                <form >
               Username:     <input type="text" placeholder="enter your message"
                    onChange={(e)=>this.setProperties(e,"username")}></input>
                message:    <input type="text" placeholder="enter your name"
                    onChange={(e)=>this.setProperties(e,"msg")}></input>
                </form>
                <h3>{this.state.username}</h3>
                <h4>{this.state.message}</h4>
            </div>
        )
    }
}
export default FormReact