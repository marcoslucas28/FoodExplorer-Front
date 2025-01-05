import { Container, Content, Ingredients, InputText, InputOption, Form } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SideMenu } from '../../components/SideMenu'
import { FileInput } from '../../components/FileInput'
import { ButtonText } from '../../components/ButtonText'
import { Ingredient } from '../../components/Ingredient'

import { MdKeyboardArrowLeft } from 'react-icons/md'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

export function NewDish(){
    const navigate = useNavigate()
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [tags, setTags] = useState([])

    function toggleMenu(){
        setIsMenuVisible(!isMenuVisible)
    }

    function handleBack(){
        navigate(-1)
    }

    return(
        <Container>
            <SideMenu isVisible={isMenuVisible} onCloseMenu={() => setIsMenuVisible(false)} />
            <Header onMenuClick={toggleMenu} />

            <Content>
                <ButtonText onClick={handleBack} isBigSize={false} title="Voltar" icon={MdKeyboardArrowLeft} />

                <h1>Novo prato</h1>

                <Form>
                    <div>
                        <span>Imagem</span>

                        <FileInput />
                    </div>

                    <div>
                        <span>Nome</span>

                        <InputText placeholder="Ex.: Salada Ceasar" />
                    </div>

                    <div>
                        <span>Categoria</span>

                        <InputOption>
                            <option value="meals">Refeição</option>
                            <option value="desserts">Sobremesa</option>
                            <option value="drinks">Bebida</option>
                        </InputOption>
                    </div>

                    <div>
                        <span>Ingredientes</span>

                        <Ingredients>
                            <Ingredient value="Adicionar" isNew={false} />
                            <Ingredient placeholder="Adicionar" isNew={true} />
                        </Ingredients>
                    </div>
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}