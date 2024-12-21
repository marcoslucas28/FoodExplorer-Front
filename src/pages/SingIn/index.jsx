import { Container, Title, Content } from './styles'

import { FiMail } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import icon from '../../assets/Polygon 1.svg'

import { Link } from 'react-router-dom'

export function SingIn(){
    

    return(
        <Container>
            <Title>
                <img src={icon} alt="Ícone do food explorer" />
                <h1>Food Explorer</h1>
            </Title>

            <Content>
                <div>
                    <span>Email</span>
                    <Input placeholder="Exemplo: exemplo@email.com" type="text" />
                </div>

                <div>
                    <span>Senha</span>
                    <Input placeholder="No mínimo 6 caracteres" type="password" />
                </div>

                <Button title="Entrar" />

                <Link to="/register">Criar uma conta</Link>
                
            </Content>
        </Container>
    )
}