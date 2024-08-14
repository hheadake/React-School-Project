import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";


export const AuthContext = createContext({
    email: '',
    userID: '',
    accessToken: '',
    role: '',
    name: '',
    familyName: '',
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
        role: authState.select,
        name: authState.name,
        familyName: authState.familyName,
        userID: authState._id,
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