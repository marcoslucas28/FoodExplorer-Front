import { Container, Menu, Orders, Title } from './styles'

import { IoIosMenu } from 'react-icons/io'

import logoIcon from '../../assets/Polygon 1.svg'
import order_card from '../../assets/order_card.svg'

import { useAuth } from '../../hooks/auth'

export function Header({onMenuClick}){
    const { user } = useAuth()

    return(
        <Container>
            <Menu onClick={onMenuClick}>
                <IoIosMenu />
            </Menu>

            <Title>
                <img src={logoIcon} alt="Ícone do foodexplorer" />
                <h1>food explorer</h1>
                {
                    user.isAdmin == true && (
                        <span>admin</span>
                    )
                }
            </Title>

            {
                    user.isAdmin == true && (
                        <div></div>
                    )
                }

            {!user.isAdmin && (
                <Orders>
                    <img src={order_card} alt="icone de pedidos" />
                    <span>0</span>
                </Orders>
            )}

        </Container>
    )
}