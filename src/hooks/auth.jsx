import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000 // 7 dias em ms

import { notifySuccess, notifyError, notifyLoading, updateToast } from '../utils/toast'

function AuthProvider({children}){
    const [data, setData] = useState({})

    async function singIn({email, password}){
        const tostID = notifyLoading("Entrando...")
        try {
            const response = await api.post("/sessions", {email, password})
            const { user } = response.data

            const sessionData = {
                user,
                timestamp: Date.now()
            }

            localStorage.setItem("@foodexplorer:session", JSON.stringify(sessionData))

            setData({user})
            updateToast(tostID, "Login realizado com sucesso!", "success")
        } catch (error) {
            if(error.response){
                updateToast(tostID, error.response.data.message, "error")
            }else {
                updateToast(tostID, "Não foi possivel entrar", "error")
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