import { Container, Title, Content } from './styles'

import { FiMail } from 'react-icons/fi'

import { Input } from '../../components/Input'

import icon from '../../assets/Polygon 1.svg'

export function SingIn(){
    return(
        <Container>
            <Title>
                <img src={icon} alt="Ícone do food explorer" />
                <h1>Food Explorer</h1>
            </Title>

            <Content>
                <Input placeholder="Exemplo: exemplo@email.com" type="text" icon={FiMail}  />
            </Content>
        </Container>
    )
}