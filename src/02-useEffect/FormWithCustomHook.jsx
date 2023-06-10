import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const { username,email,password, onInputChange ,onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  });

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />



      <input
        type="text"
        className="form-control"
        placeholder="nombre de usuario"
        name="username"
        value={username}
        onChange={onInputChange}

      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}

      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}

        
      

      />
      <button  onClick={onResetForm}className="btn btn-success mt-2">
      Borrar campos
      </button>



    </>
  )
}
export default FormWithCustomHook;
