import React from "react";

export const ShowIncrement = React.memo(({increment}) => {
    
    console.log('me volvi a dibujar');

    return (
    <button
    className="btn btn-success"
    onClick={()=>{
        increment();
    }}>
        incrementar
    </button>
      
  )
})

export default ShowIncrement
