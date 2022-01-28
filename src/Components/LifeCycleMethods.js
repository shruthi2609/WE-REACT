import React from "react";
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            msg:"init",
           
        }
    }
    /*componentDidMount=()=>{
      console.log("inside componentDidmount")
    }
    componentWillMount(){
        this.setState({msg:"final"})
    }
    componentWillReceiveProps(newProps){
        console.log(this.props)
        if(this.props!=newProps){
            console.log("receive props is recevied",newProps)
        }
    }*/
    componentDidUpdate(){
       setTimeout(
           ()=>this.setState({msg:"did update"}),5000
       )
    }
    /*shouldComponentUpdate(nextProps,nextState){
        console.log("should update")
        
    }*/
    render(){
        console.log("inside render")
        return(
            <div>
                    <h1>{this.state.msg} {this.props.prop1}</h1>
                    <button onClick={()=>{this.setState({msg:"final"})}}>test</button>
                   
            </div>
        )
    }
}
export default LifeCycleMethods