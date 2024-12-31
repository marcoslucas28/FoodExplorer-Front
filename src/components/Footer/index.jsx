import { Container, Content, Title, Copyright } from './styles'

import icon from '../../assets/iconFooter.svg'

export function Footer(){
    return(
        <Container>
            <Content>
                <Title>
                    <img src={icon} alt="Logo do foodexplorer" />
                    <h1>food explorer</h1>
                </Title>

                <Copyright>
                    <p>&copy; 2023 - Todos os direitos reservados.</p>
                </Copyright>
            </Content>
        </Container>
    )
}