import { useDispatch } from "react-redux";
import {login,logout} from '../reducer/userReducer'
const Login=()=>{
    const dispatch=useDispatch()
    const trigerLogin=()=>{
        dispatch(login({userName:"john",designation:"SSE"}))
    }
    const trigerLogout=()=>{
        dispatch(logout())
    }
    return(
        <div>
            <button onClick={trigerLogin}>login</button>
            <button onClick={trigerLogout}>logout</button>
        </div>
    )
}
export default Login