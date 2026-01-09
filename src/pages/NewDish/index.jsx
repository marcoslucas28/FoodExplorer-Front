import { Container, Content, Ingredients, InputText, InputOption, Form } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SideMenu } from '../../components/SideMenu'
import { FileInput } from '../../components/FileInput'
import { ButtonText } from '../../components/ButtonText'
import { Ingredient } from '../../components/Ingredient'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'

import { MdKeyboardArrowLeft } from 'react-icons/md'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { notifyError, notifySuccess, notifyInfo } from '../../utils/toast'

import { useBreakpoint } from '../../hooks/useBreakpoint'
import { SCREEN } from '../../styles/device'


export function NewDish(){
    const navigate = useNavigate()
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const isDesktop = !!useBreakpoint(`(min-width: ${SCREEN.md})`);

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState("meals")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [ingredientsTags, setIngredient] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    function toggleMenu(){
        setIsMenuVisible(!isMenuVisible)
    }

    function handleBack(){
        navigate(-1)
    }

    function handleAddIngredient(){
        if(newIngredient == ''){
            return notifyInfo("O campo de adicionar ingrediente esta vazio. Por favor, preencha o campo para adicionar novo ingrediente")
        }

        setIngredient((prevState) => [...prevState, newIngredient])
        setNewIngredient('')
    }

    function handleRemoveIngredient(deleted){
        setIngredient((prevState) => prevState.filter((tag) => tag !== deleted))
    }

    async function handleNewDish(){
        setLoading(true)

        if(!name || !image || !category || !price || !description || ingredientsTags <= 0){
            if(ingredientsTags <= 0){
                setLoading(false)
                return notifyInfo("Por favor, informe os ingredientes de seu prato")
            }
            setLoading(false)
            return notifyInfo("Preencha todos os campos para cadastrar seu prato")
        }

        if(newIngredient){
            setLoading(false)
            return notifyInfo("Você deixou um ingrediente no campo para adicionar, adicione o ingrediente ou deixe o campo vazio")
        }

        try {
            const data = new FormData()

            data.append('name', name)
            data.append('description', description)
            data.append('price', price)
            data.append('category', category)
            data.append('image', image)

            ingredientsTags.forEach(ingredient => {
                data.append('ingredients[]', ingredient)
            })

            await api.post("/dishes", data)
            notifySuccess("Prato adicionado")
            navigate(-1)
            
        } catch (error) {
            if(error.response){
                notifyError(error.response.data.message)
            }else {
                notifyError("Não foi possivel cadastrar o novo prato")
            }
        } finally{
            setLoading(false)
        }
       
    }

    return(
        <Container>
            {!isDesktop && <SideMenu isVisible={isMenuVisible} onCloseMenu={() => setIsMenuVisible(false)} onSearchDishes={handleSearchDishes} />}
            <Header onMenuClick={toggleMenu} />

            <Content>
                {isDesktop ? <ButtonText onClick={handleBack} isBigSize={true} title="voltar" icon={MdKeyboardArrowLeft} /> : <ButtonText onClick={handleBack} isBigSize={false} title="voltar" icon={MdKeyboardArrowLeft} />}
                {isDesktop ? <h1>Adicionar prato</h1> : <h1>Novo prato</h1>}

                <Form>
                    <div className='item-1'>
                        <span>Imagem</span>

                        <FileInput placeholder="Selecione imagem" onChange={(e) => setImage(e.target.files[0])} />
                    </div>

                    <div className='item-2'>
                        <span>Nome</span>

                        <InputText placeholder="Ex.: Salada Ceasar" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='item-3'>
                        <span>Categoria</span>

                        <InputOption onChange={(e) => setCategory(e.target.value)}>
                            <option value="meals">Refeição</option>
                            <option value="desserts">Sobremesa</option>
                            <option value="drinks">Bebida</option>
                        </InputOption>
                    </div>

                    <div className='item-4'>
                        <span>Ingredientes</span>

                        <Ingredients>

                            {
                                ingredientsTags.map((ingredient, index) => (
                                    <Ingredient value={ingredient} key={String(index)} onClick={() => handleRemoveIngredient(ingredient)}  />
                                ))
                            }

                            <Ingredient 
                            placeholder="Adicionar" 
                            isNew={true} 
                            value={newIngredient} 
                            onChange={(e) => setNewIngredient(e.target.value)} 
                            onClick={handleAddIngredient}
                            />
                        </Ingredients>
                    </div>

                    <div className='item-5'>
                        <span>Preço</span>

                        <InputText onChange={(e) => setPrice(e.target.value)} type="number" step="0,01" placeholder="R$ 00,00" />
                    </div>

                    <div className='item-6'>
                        <span>Descrição</span>

                        <TextArea onChange={(e) => setDescription(e.target.value)} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                    </div>

                    <Button className="item-7" onClick={handleNewDish} type="button" disabled={loading} title="Salvar alterações" />
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}