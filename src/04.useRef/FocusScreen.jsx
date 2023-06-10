import React, { useRef } from 'react'

export const FocusScreen=() =>{
  const inputRef =useRef();// SE UTILIZA PARA USAR MANTENER UNA REFERENCIA Y CUANDO ESA REFERENCIA CAMBIA NO SE VUELVA RENDERIZAR EL COMPONENTE

  const onClick = ()=>{
    //console.log(inputRef)
    inputRef.current.select();

  }
  
  
    return (
    <>
    <h1>Focus Screen</h1>
    <hr />
    <input 
        ref={inputRef}
        type="text" 
        placeholder='Ingrese su nombre'
        className='form-control'/>
    <button className='btn btn-success mt-2'
    onClick={onClick}> 
        Set Focus
    </button>
    </>
  )

}
