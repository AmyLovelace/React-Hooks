import { useState } from "react"
import { UserContext } from "./UserContext"

/*const user={
    id: 123,
    name:'Ami',
    email:'ami@gmail.com'
}*/

export const UserProvider = ({children}) => {
  
 const [user,setUser] = useState();
    return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
