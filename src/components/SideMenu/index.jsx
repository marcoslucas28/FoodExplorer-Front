import { Container, Header, Close, Content, List, Opition } from './styles'

import { IoIosClose } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'

import { Input } from '../Input'
import { Footer } from '../Footer'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

export function SideMenu({isVisible = false, onCloseMenu, onSearchDishes}){
    const navigate = useNavigate()
    const { SingOut, user } = useAuth()

    return (
        <Container $isvisible={isVisible}>
            <Header>
                <Close onClick={onCloseMenu}>
                    <IoIosClose />
                </Close>
                <span>Menu</span>
            </Header>

            <Content>
                <Input onChange={onSearchDishes} placeholder="Busque por pratos ou ingredientes" icon={CiSearch} />

                <List>
                    {
                        user.isAdmin == true && (
                        <Opition onClick={() => navigate("/newDish")} title="Novo Prato" />
                    )
                    }
                    <Opition onClick={SingOut} title="Sair" />
                </List>
            </Content>

            <Footer />
        </Container>
    )
}