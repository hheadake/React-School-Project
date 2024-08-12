import { useState } from "react"


export function useForm (initValues, submitCallBack) {
const [values, setValues] = useState(initValues);

const changeStateHandler = (e) => {
setValues(state => ({
    ...state,
    [e.target.name]: e.target.value
}))

}
const submitHandler = (e) => {
    e.preventDefault();
    submitCallBack(values);
}


return {
    values,
    changeStateHandler,
    submitHandler
}


}