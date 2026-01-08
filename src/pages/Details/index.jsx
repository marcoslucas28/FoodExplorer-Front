import { Container, Content, DetailsContainer, IngredientsItems, NewButton } from "./styles";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SideMenu } from '../../components/SideMenu'
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdKeyboardArrowLeft } from 'react-icons/md'

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

import { useAuth } from '../../hooks/auth'

import orderIcon from '../../assets/order_card.svg'

import { notifyInfo } from '../../utils/toast'

export function Details() {
    const navigate = useNavigate()
    const params = useParams()

    const { user } = useAuth()

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [quantities, setQuantities] = useState({})

    const [name, setName] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [category, setCategory] = useState("meals")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [ingredientsTags, setIngredient] = useState([])

    function toggleMenu(){
        setIsMenuVisible(!isMenuVisible)
    }

    function handleBack(){
        navigate(-1)
    }

    function handleAdd(dishId) {
    setQuantities(prev => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1
    }))
  }

  function handleRemove(dishId) {
    setQuantities(prev => ({
      ...prev,
      [dishId]: Math.max((prev[dishId] || 0) - 1, 1)
    }))
  }

  async function includeItem(dishId) {
    const quantity = quantities[dishId] || 0
    if (quantity > 0) {
      await api.post("/order-items", {
        dish_id: dishId,
        quantity
      });

      setQuantities(prev => ({
        ...prev,
        [dishId]: 0
      }))
    } else {
      notifyInfo("Selecione a quantidade antes de incluir o item.")
    }
  }

    useEffect(() => {
        async function fetchPlate(){    
            const dishInfo = await api.get(`/dishes/${params.id}`)
    
            const { name, description, price, ingredients, category, image } = dishInfo.data
    
            setName(name)
            setDescription(description)
            setPrice(price)
            setCategory(category)
            setIngredient(ingredients.map(item => item.name))

            setImageURL(api.defaults.baseURL + "/files/" + image);
            setQuantities({ [params.id]: 1 })
        }
    
            fetchPlate()
        }, [])

  return(
    <Container>
      <SideMenu isVisible={isMenuVisible} onCloseMenu={() => setIsMenuVisible(false)} />  
      <Header onMenuClick={toggleMenu} />
      <Content>
        <ButtonText style={{
            alignSelf: 'flex-start'
        }} onClick={handleBack} isBigSize={true} title="voltar" icon={MdKeyboardArrowLeft} />

        <img src={imageURL} alt={name} />

        <DetailsContainer>

            <div className="detailsText">
                <h2>{name}</h2>

                <p>{description}</p>

                <section>
                    {ingredientsTags.map((ingredient, index) => (
                        <IngredientsItems key={String(index)}>
                            {ingredient}
                        </IngredientsItems>
                    ))}
                </section>
            </div>

            { user.isAdmin ? (
                <Button 
                    title="Editar prato"
                    onClick={() => navigate(`/editDish/${params.id}`)}
                />
            ) : (

                <div className="addItens">
                    <div>
                        <FaMinus className="icon2" onClick={() => handleRemove(params.id)} />
                        <span>0{quantities[params.id] || 1}</span>
                        <FaPlus className="icon2" onClick={() => handleAdd(params.id)} />
                    </div>
                    <NewButton onClick={() => includeItem(params.id)} >
                        <img src={orderIcon} alt="Ícone de pedido" />
                        Pedir ∙ R$ {price}
                    </NewButton>
                </div>
            )}
        </DetailsContainer>

      </Content>
      <Footer />
    </Container>
  )
}