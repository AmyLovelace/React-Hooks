import { useState } from "react";

export const useForm=(initialForm = {})=> {
  
    const[formState,setFormState]= useState(initialForm);
          
      const onInputChange = ({target})=>{
        const{name,value} = target;
        setFormState({
          ...formState,
          [name]:value//asi se declaran kas propiedades computadas de los objetos en este caso se llama para setearlo
        });
      }
    
      const onResetForm = ()=> {
        setFormState(initialForm);
    }
    return {
        ...formState,
        formState,
        onInputChange,onResetForm
    }
}

export default useForm;