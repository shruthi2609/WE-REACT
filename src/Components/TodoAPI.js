import React from "react";
import axios from "axios"
class TodoAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todo:[]
        }
    }
    componentDidMount=()=>{
       /* fetch("https://jsonplaceholder.typicode.com/todos").
        then((res)=>res.json()).then((data)=>this.setState({todo:data}))*/
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
            (res)=>this.setState({todo:res.data})
        ).catch((err)=>console.log(err))
    }
    render(){
        return(
            <div>
                    <h1>Todo API</h1>
                   
                    {
                        this.state.todo.map(
                            (item)=>(
                                <div>
                                    <h1>{item.title}</h1>
                                   
                                    </div>
                            )
                        )
                    }
                   
            </div>
        )
    }
}
export default TodoAPI