import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData] = useState({})

    async function singIn({email, password}){
        try {
            const response = await api.post("/sessions", {email, password})
            const { user } = response.data

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

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

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user")

        if(user){
            setData({user})
        }
    }, [])

    return(
        <AuthContext.Provider value={{user: data.user, singIn}}>{children}</AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }