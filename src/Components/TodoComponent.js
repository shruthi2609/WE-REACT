import React from "react"
import Completed from "./Completed"
import Pending from "./Pending"
const todo=[
    {
        title:"buy egss",
        status:true,
        id:1,
        active:true
    },
    {
        title:"buy milk",
        status:false,
        id:2,
        active:true
    },
    {
        title:"buy milk",
        status:false,
        id:3,
        active:true
    },
    {
        title:"watch a series",
        status:false,
        id:4,active:true
    },
    {
        title:"go out for a walk",
        status:true,
        id:5,active:true
    },
    {
        title:"buy groceries",
        status:true,
        id:6,active:false
    }
]
class TodoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:todo
        }
    }
    getCompletedItems=()=>{
        const result=this.state.todos.filter((item)=>item.status===true)
        return result
    }
    getPendingItems=()=>{
        const result=this.state.todos.filter((item)=>item.status===false)
        return result
    }
    changeCompletionStatus=(todoid)=>{
        const temp=this.state.todos
        const result=temp.find((item)=>item.id===todoid)
        result.status=!result.status
        this.setState({todos:temp})
    }
    render(){
        return(
            <div>
                <h3>Task Manager App</h3>
           
                <Pending items={this.getPendingItems()}
                fun1={this.changeCompletionStatus}></Pending>
                <Completed items={this.getCompletedItems()}></Completed>
            </div>
        )
    }
}
export default TodoComponent