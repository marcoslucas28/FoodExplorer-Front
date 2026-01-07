import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000 // 7 dias em ms

function AuthProvider({children}){
    const [data, setData] = useState({})

    async function singIn({email, password}){
        try {
            const response = await api.post("/sessions", {email, password})
            const { user } = response.data

            const sessionData = {
                user,
                timestamp: Date.now()
            }

            localStorage.setItem("@foodexplorer:session", JSON.stringify(sessionData))

            setData({user})
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else {
                alert("Não foi possivel entrar")
                console.log(error)
            }
        }
    }

    function handleLogout(){
        localStorage.removeItem("@foodexplorer:session")
        setData({})
    }

    function SingOut(){
        handleLogout()
    }

    useEffect(() => {
        const session = localStorage.getItem("@foodexplorer:session")

        if(session){
            const parsedSession = JSON.parse(session)
            const now = Date.now()

            if(now - parsedSession.timestamp < SESSION_DURATION){
                setData({user: parsedSession.user})
            } else {
                // Sessão expirada, limpar
                handleLogout()
            }
        }
    }, [])

    useEffect(() => {
        // Adicionar interceptor para capturar 401 e deslogar
        const interceptor = api.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    handleLogout()
                }
                return Promise.reject(error)
            }
        )

        return () => {
            api.interceptors.response.eject(interceptor)
        }
    }, [])

    return(
        <AuthContext.Provider value={{user: data.user, singIn, SingOut}}>{children}</AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }