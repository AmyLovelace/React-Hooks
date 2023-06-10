import { useEffect, useState } from "react";
import Message from "./Message";

export const  SimpleForm = () =>{
  
  const[formState,setFormState]= useState({
    username:'amisauria',
    email:'amy.sauria@mimi.com'
  });
  
  const{username,email} = formState;

  const onInputChange = ({target})=>{
    const{name,value} = target;
    setFormState({
      ...formState,
      [name]:value//asi se declaran kas propiedades computadas de los objetos en este caso se llama para setearlo
    });
  }

  useEffect(()=>{
    //console.log('useEffect Used');

  },[]);//cada vez   que haya un cambio en formstate se "disparará el useEffect"

  useEffect(()=>{
    //console.log('formeState changed');

  },[formState]);//cada vez   que haya un cambio en formstate se "disparará el useEffect"

  useEffect(()=>{
    //console.log('email change');

  },[email]);//cada vez   que haya un cambio en email se "disparará el useEffect"

 


    return (
   <>
   <h1>Formulario Simple</h1>
   <hr />



   <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}

    />
    <input 
        type="email"
        className="form-control"
        placeholder="@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}

    />
 

    {

      (username === "amisauria")&& <Message/>
    }
    

   </>
  )
}
