import { createContext, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const storedUser = localStorage.getItem('miniverse_user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        } else {
            const defaultUser = { name: 'Harshita', email:'har@gamil.com' }
            setUser(defaultUser)
            localStorage.setItem('miniverse_user', JSON.stringify(defaultUser))
        }
        setLoading(false)
    }, [])

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('miniverse_user', JSON.stringify(userData))
    }

    const logout =()=>{
        setUser(null)
        localStorage.removeItem('miniverse_user')
    }

    return(
        <AuthContext.Provider value = {{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}