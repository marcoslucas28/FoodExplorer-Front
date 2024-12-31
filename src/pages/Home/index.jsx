import { Container } from './styles'

import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'

import { useState } from 'react'

export function Home(){
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    function toggleMenu(){
        setIsMenuVisible(!isMenuVisible)
    }

    return(
        <Container>
            <SideMenu isVisible={isMenuVisible} onCloseMenu={() => setIsMenuVisible(false)} />
            <Header isMenuVisible={isMenuVisible} onMenuClick={toggleMenu} />
        </Container>
    )
}