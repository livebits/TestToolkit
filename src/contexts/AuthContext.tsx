import { createContext, useState } from "react";

interface AuthContextProps {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}
const AuthContext = createContext<AuthContextProps>({ token: null, setToken: () => null });

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };