import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

export const CallbackHook = () => {

    const[counter,setCounter]=useState(10);

    useCallback(()=>{

    },
    [],
    )//sirve para memorizar funciones, regresa una funcion memorizada que se ejecuta cuando algo cambie

    const incrementFather = useCallback(()=>{
      setCounter((value)=>value+2);
    },
    [],)


  return (
    <>
    <h1>useCallback hook: {counter}</h1>
    <hr />
    <ShowIncrement increment={incrementFather}/>
    </>
  )
}

export default CallbackHook
