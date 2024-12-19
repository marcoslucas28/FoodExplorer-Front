import { Container, Title } from './styles'

import icon from '../../assets/Polygon 1.svg'

export function SingIn(){
    return(
        <Container>
            <Title>
                <img src={icon} alt="Ícone do food explorer" />
                <h1>Food Explorer</h1>
            </Title>
        </Container>
    )
}