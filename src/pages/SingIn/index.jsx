import { Container, Title, Content } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { useState } from 'react'

import { useAuth } from '../../hooks/auth'

import icon from '../../assets/Polygon 1.svg'

import { Link } from 'react-router-dom'

import { useBreakpoint } from "../../hooks/useBreakpoint"
import { SCREEN } from "../../styles/device"

export function SingIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const isDesktop = !!useBreakpoint(`(min-width: ${SCREEN.lg})`);

    const { singIn } = useAuth()

    function handleSingIn(){
        setLoading(true)
        singIn({email, password}).finally(() => setLoading(false))
    }

    return(
        <Container>
            <Title>
                <img src={icon} alt="Ícone do food explorer" />
                <h1>Food Explorer</h1>
            </Title>

            <Content>
                {isDesktop && <h2>Faça Login</h2>}
                <div>
                    <span>Email</span>
                    <Input placeholder="Exemplo: exemplo@email.com" type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <span>Senha</span>
                    <Input placeholder="No mínimo 6 caracteres" type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <Button title="Entrar" onClick={handleSingIn} disabled={loading} />

                <Link to="/register">Criar uma conta</Link>
                
            </Content>
        </Container>
    )
}