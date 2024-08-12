import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";


export const AuthContext = createContext({
    email: '',
    // userId: authState._id,
    accessToken: '',
    select: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});

export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState({})
    const changeAuthState = (state) => {

        localStorage.setItem('accessToken', state.accessToken)
        setAuthState(state)
    
      }
      const contextData = {
        email: authState.email,
        select: authState.select,
        accessToken: authState.accessToken,
        changeAuthState,
        isAuthenticated: !!authState.email,
    
      }
     

return (
    <AuthContext.Provider value={contextData}>
        {props.children}
    </AuthContext.Provider>
)




}