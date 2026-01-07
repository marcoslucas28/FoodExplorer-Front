import { Container, Content, Ingredients, InputText, InputOption, Form, ButtonsContent } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SideMenu } from '../../components/SideMenu'
import { FileInput } from '../../components/FileInput'
import { ButtonText } from '../../components/ButtonText'
import { Ingredient } from '../../components/Ingredient'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'

import { MdKeyboardArrowLeft } from 'react-icons/md'

import { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { api } from '../../services/api'

import { notifyError, notifySuccess, notifyInfo, confirmToast } from '../../utils/toast'

export function EditDish(){
    const navigate = useNavigate()
    const params = useParams()
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState("meals")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [ingredientsTags, setIngredient] = useState([])
    const [newIngredient, setNewIngredient] = useState("")

    useEffect(() => {
        async function fetchPlate(){    
            const dishInfo = await api.get(`/dishes/${params.id}`)

            const { name, description, price, ingredients, category } = dishInfo.data

            setName(name)
            setDescription(description)
            setPrice(price)
            setCategory(category)
            setIngredient(ingredients.map(item => item.name))
        }

        fetchPlate()
    }, [])

    function toggleMenu(){
        setIsMenuVisible(!isMenuVisible)
    }

    function handleBack(){
        navigate(-1)
    }

    async function handleRemoveDish(){
        const check = await confirmToast("Tem certeza que deseja excluir o prato? Essa ação não poderá ser desfeita.")

        if(check){
            await api.delete(`/dishes/${params.id}`)
            notifySuccess("Prato excluído")

            navigate(-1)
        }
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

    async function handleEditDish(){
        setLoading(true)

        if(!name & !image & !category & !price & !description & ingredientsTags <= 0){
            if(ingredientsTags <= 0){
                setLoading(false)
                return notifyInfo("O prato não pode ter nenhum ingrediente.")
            }

            setLoading(false)
            return notifyInfo("Preencha pelo menos um campo para atualizar seu prato")
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

            await api.put(`/dishes/${params.id}`, data)
            notifySuccess("Alterações salvas")
            navigate(-1)
            
        } catch (error) {
            if(error.response){
                notifyError(error.response.data.message)
            }else {
                notifyError("Não foi possivel salvar as alterações")
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

                <h1>Editar prato</h1>

                <Form>
                    <div>
                        <span>Imagem do prato</span>

                        <FileInput placeholder="Selecione imagem para alterá-la" onChange={(e) => setImage(e.target.files[0])} />
                    </div>

                    <div>
                        <span>Nome</span>

                        <InputText placeholder="Ex.: Salada Ceasar" onChange={(e) => setName(e.target.value)} value={name} />
                    </div>

                    <div>
                        <span>Categoria</span>

                        <InputOption onChange={(e) => setCategory(e.target.value)} value={category}>
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

                        <InputText value={price} onChange={(e) => setPrice(e.target.value)}  type="number" step="0,01" placeholder="R$ 00,00" />
                    </div>

                    <div>
                        <span>Descrição</span>

                        <TextArea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                    </div>

                    <ButtonsContent>
                        <Button onClick={handleEditDish} type="button" disabled={loading} title="Salvar alterações" />
                        <Button onClick={handleRemoveDish} isDelete={true} type="button" disabled={loading} title="Excluir prato" />
                    </ButtonsContent>
                    
                </Form>
            </Content>

            <Footer />
        </Container>
    )
}