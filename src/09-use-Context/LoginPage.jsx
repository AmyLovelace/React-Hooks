import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const {user,setUser}=useContext(UserContext);
    return (
    <>
        <h1>LoginPage</h1>
        <hr />
        <pre>
            {JSON.stringify(user,null,3)}
        </pre>
        <button
        className="btn btn-success"
        onClick={()=>setUser({id:666, name:'Amy',email:'amy@gmail.com'})}>

            Establecer Usuario
        </button>
    </>
  )
}

export default LoginPage
