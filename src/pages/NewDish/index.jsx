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

export function NewDish(){
    const navigate = useNavigate()
    const [isMenuVisible, setIsMenuVisible] = useState(false)

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
            return alert("O campo de adicionar ingrediente esta vazio. Por favor, preencha o campo para adicionar novo ingrediente")
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
                return alert("Por favor, informe os ingredientes de seu prato")
            }

            return alert("Preencha todos os campos para cadastrar seu prato")
        }

        if(newIngredient){
            return alert("Você deixou um ingrediente no campo para adicionar, adicione o ingrediente ou deixe o campo vazio")
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
            alert("Prato adicionado")
            navigate(-1)
            
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else {
                alert("Não foi possivel cadastrar o novo prato")
            }
        } finally{
            setLoading(false)
        }
       
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

                        <FileInput onChange={(e) => setImage(e.target.files[0])} />
                    </div>

                    <div>
                        <span>Nome</span>

                        <InputText placeholder="Ex.: Salada Ceasar" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <span>Categoria</span>

                        <InputOption onChange={(e) => setCategory(e.target.value)}>
                            <option value="meals">Refeição</option>
                            <option value="desserts">Sobremesa</option>
                            <option value="drinks">Bebida</option>
                        </InputOption>
                    </div>

                    <div>
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

                    <div>
                        <span>Preço</span>

                        <InputText onChange={(e) => setPrice(e.target.value)} type="number" step="0,01" placeholder="R$ 00,00" />
                    </div>

                    <div>
                        <span>Descrição</span>

                        <TextArea onChange={(e) => setDescription(e.target.value)} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                    </div>

                    <Button onClick={handleNewDish} type="button" disabled={loading} title="Salvar alterações" />
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}