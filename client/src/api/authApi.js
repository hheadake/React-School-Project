import requester from "./requester";

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => {  try {
    const authData = await requester.post(`${BASE_URL}/login`, { email, password });
    console.log('Login successful:', authData);

    if (authData.accessToken) {
        localStorage.setItem('accessToken', authData.accessToken);
    }

    return authData;
} catch (error) {
    console.error('Login failed:', error);
    throw error;
}
 
}

export const register = async (email, password) => {
    const authData = await requester.post(`${BASE_URL}/register`, {email, password})
 
    return authData;
}

export const logout = () => requester.get(`${BASE_URL}/logout`)
