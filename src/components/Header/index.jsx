import { Container, Menu, Orders, Title, NewButton } from './styles'

import { IoIosMenu } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { MdLogout } from "react-icons/md";

import logoIcon from '../../assets/Polygon 1.svg'
import order_card from '../../assets/order_card.svg'

import { useAuth } from '../../hooks/auth'
import { useOrders } from '../../hooks/orders'

import { Input } from '../Input'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'

import { useBreakpoint } from '../../hooks/useBreakpoint'
import { SCREEN } from '../../styles/device'

import { useNavigate } from 'react-router-dom'

export function Header({onMenuClick, onSearchDishes}){
    const navigate = useNavigate()
    const { user, SingOut } = useAuth()
    const { pendingOrdersCount } = useOrders()

    const isDesktop = !!useBreakpoint(`(min-width: ${SCREEN.lg})`);
    const isBigDesktop = !!useBreakpoint(`(min-width: ${SCREEN.xl})`);

    const isAdmin = !!user.isAdmin;

    function goToOrdersPage(){
        if(user.isAdmin){
            navigate("/orders")
        }else {
            navigate("/myOrder")
        }
    }

    return(
        <Container>
            {!isDesktop && (
            <Menu onClick={onMenuClick}>
                <IoIosMenu />
            </Menu>
            )}

            <Title onClick={() => navigate("/")}>
            <div>
                <img src={logoIcon} alt="Ícone do foodexplorer" />
                <h1>food explorer</h1>
            </div>

            {isAdmin && <span>admin</span>}
            </Title>

            {isDesktop && (
            <Input
            style={{maxWidth: '40rem'}}
                onChange={onSearchDishes}
                placeholder="Busque por pratos ou ingredientes"
                icon={CiSearch}
            />
            )}

            {
                !isAdmin  && isDesktop && (
                    <ButtonText title="Favoritos" isBigSize={false} />
                )
            }
            {
                !isAdmin  && isDesktop && (
                    <ButtonText onClick={() => navigate("/orders")} title="Histórico de pedidos" isBigSize={false} />
                )
            }

            {!isBigDesktop && (
            <Orders onClick={goToOrdersPage}>
                <img src={order_card} alt="icone de pedidos" />
                <span>{pendingOrdersCount}</span>
            </Orders>
            )}

            {isAdmin && isDesktop && (
            <Button
                style={{maxWidth: '20rem'}}
                onClick={() => navigate('/newDish')}
                title="Novo prato"
            />
            )}

            {isBigDesktop && (
            <NewButton onClick={goToOrdersPage}>
                <img src={order_card} alt="icone de pedidos" />
                Pedidos ({pendingOrdersCount})
            </NewButton>
            )}

            {isDesktop && (
                <MdLogout className='logout' onClick={SingOut} />
            )}

        </Container>
    )
}