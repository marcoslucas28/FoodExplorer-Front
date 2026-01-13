import { Container, Header, Close, Content, List, Opition } from './styles'

import { IoIosClose } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'

import { Input } from '../Input'
import { Footer } from '../Footer'

import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'

import { useAuth } from '../../hooks/auth'

export function SideMenu({isVisible = false, onCloseMenu, onSearchDishes}){
    const navigate = useNavigate()
    const { SingOut, user } = useAuth()

    useEffect(() => {
            if (isVisible) {
                document.body.style.overflow = "hidden";
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                document.body.style.overflow = "auto";
            }
            return () => {
                document.body.style.overflow = "auto";
            };
        }, [isVisible]);

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
                    {
                        !user.isAdmin && (
                            <>
                                <Opition onClick={() => navigate("/orderHistory")} title="Histórico de pedidos" />
                                <Opition onClick={() => navigate("/orderHistory")} title="Meus favoritos" />
                            </>
                        )
                    }
                    <Opition onClick={SingOut} title="Sair" />
                </List>
            </Content>

            <Footer />
        </Container>
    )
}