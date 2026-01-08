import { Container, Title, Content } from './styles'

import { FiMail } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import icon from '../../assets/Polygon 1.svg'

import { Link, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { notifySuccess, notifyError, notifyLoading, updateToast, notifyInfo } from '../../utils/toast'

import { useState } from 'react'

import { useBreakpoint } from "../../hooks/useBreakpoint"
import { SCREEN } from "../../styles/device"

export function SingUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const isDesktop = !!useBreakpoint(`(min-width: ${SCREEN.lg})`);

    const navigate = useNavigate()

    function handleSingUp(){
        if(!name || !email || !password){
            return notifyInfo("Preencha todos os campos")
        }

        if(password.length < 6){
            return notifyInfo("A sua senha tem que ter no mínimo 6 caracteres")
        }

        setLoading(true)

        api.post("/users", {name, email, password}).then(() => {
            notifySuccess("usuário cadastrado com sucesso")
            navigate(-1)
        }).catch((error) => {
            if(error.response){
                notifyError(error.response.data.message)
            }else {
                notifyError("Não foi possivel cadastrar o usuário")
            }
        }).finally(() => setLoading(false))
    }

    return(
        <Container>
            <Title>
                <img src={icon} alt="Ícone do food explorer" />
                <h1>Food Explorer</h1>
            </Title>

            <Content>
                {isDesktop && <h2>Crie sua conta</h2>}

                <div>
                    <span>Seu nome</span>
                    <Input placeholder="Exemplo: Maria Silva" type="text" onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <span>Email</span>
                    <Input placeholder="Exemplo: exemplo@email.com" type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <span>Senha</span>
                    <Input placeholder="No mínimo 6 caracteres" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <Button title="Criar conta" disabled={loading} onClick={handleSingUp} />

                <Link to="/">Já tenho uma conta</Link>
                
            </Content>
        </Container>
    )
}