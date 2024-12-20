import { Container, Title, Content } from './styles'

import { FiMail } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import icon from '../../assets/Polygon 1.svg'

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
                    <Input placeholder="Exemplo: exemplo@email.com" type="text" icon={FiMail}  />
                </div>

                <div>
                    <span>Senha</span>
                    <Input placeholder="Exemplo: exemplo@email.com" type="password" icon={FiMail}  />
                </div>

                <Button title="Entrar" />
                
            </Content>
        </Container>
    )
}