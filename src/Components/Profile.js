import { useSelector } from "react-redux";
const Profile=()=>{
   const result= useSelector((state)=>state.user.value)
    return(
        <div>
            <h1> Profile Page</h1>
            <h1>{result.userName}</h1>
            <p>{result.designation}</p>

        </div>
    )
}
export default Profile