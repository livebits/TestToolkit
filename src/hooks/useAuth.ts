import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
    const { setToken } = useContext(AuthContext)

    const login = (username: string, password: string) => {
        // handle in promise
        return new Promise((resolve, reject) => {
            if (username === 'admin' && password === 'admin') {
                localStorage.setItem('token', 'VALID-TOKEN');
                setToken('VALID-TOKEN');
                resolve('VALID-TOKEN');
            } else {
                reject('Invalid username or password');
            }
        });
    }

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    return { login, logout };
}

export default useAuth;