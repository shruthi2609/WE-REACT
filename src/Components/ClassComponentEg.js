import React from 'react'
class ClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"Welcome User",
            isLoggedIn:false
        }
    }
    setLogin=()=>{
        this.setState({isLoggedIn:true})
    }
    render(){
        return(
            <div>
                {
                    this.state.isLoggedIn?<h1>{this.state.msg}</h1>:
                    <button onClick={this.setLogin}>Login </button>
                }
            </div>
        )
    }
}
export default ClassComponent