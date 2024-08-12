import { useContext } from "react"
import { login, register } from "../api/authApi"
import { AuthContext } from "../context/authContext.jsx"

export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext)
    const loginHandler = async (email, password) => {
        try {
            const result = await login(email, password)
            changeAuthState(result);
        } catch (error) {
            console.log(error)
        }



    }


    return loginHandler


}

export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext)

    const registerHandler = async (email, password) => {
        const result = await register(email, password)
        changeAuthState(result);
        return result
    }

    return registerHandler;

}