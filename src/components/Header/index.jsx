import { Container, Menu, Orders, Title } from './styles'

import { IoIosMenu } from 'react-icons/io'

import logoIcon from '../../assets/Polygon 1.svg'
import order_card from '../../assets/order_card.svg'

import { useAuth } from '../../hooks/auth'
import { useOrders } from '../../hooks/orders'

export function Header({onMenuClick}){
    const { user } = useAuth()
    const { pendingOrdersCount } = useOrders()

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
                    <span>{pendingOrdersCount}</span>
                </Orders>
            )}

        </Container>
    )
}