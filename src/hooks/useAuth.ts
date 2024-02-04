
const useAuth = () => {

    const login = (username: string, password: string) => {
        // handle in promise
        return new Promise((resolve, reject) => {
            if (username === 'admin' && password === 'admin') {
                localStorage.setItem('token', 'VALID-TOKEN');
                resolve('VALID-TOKEN');
            } else {
                reject('Invalid username or password');
            }
        });
    }

    const logout = () => {
        localStorage.removeItem('token');
    }

    return { login, logout };
}

export default useAuth;