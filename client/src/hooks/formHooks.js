import { useState } from "react"

export function useForm(initValues, submitCallBack) {
    const [values, setValues] = useState(initValues);
  
    const changeStateHandler = (e) => {
      const { name, value, type, files } = e.target;
      
      if (type === "file") {
        // Handle file input
        setValues((state) => ({
          ...state,
          [name]: files[0], // Only support single file uploads for now
        }));
      } else {
        // Handle text inputs
        setValues((state) => ({
          ...state,
          [name]: value,
        }));
      }
    };
  
    const submitHandler = async (e) => {
      e.preventDefault();
      await submitCallBack(values);
  
      setValues(initValues); // Reset form after submission
    };
  
    return {
      values,
      changeStateHandler,
      submitHandler,
    };
  }