import { Container } from "./styles";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { PiPencilSimple } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

import {api} from "../../services/api";

import { Button } from '../../components/Button';

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

export function Card({ data, goToDetails, handleAdd, handleRemove, includeItem, quantity, handleToggleFavorite, ...rest }) {
  const { image, name, description, price, id, isFavorite } = data;

  const { user } = useAuth();

  const navigate = useNavigate();

  const imageURL = api.defaults.baseURL + "/files/" + image;

  return <Container $isfavorite={isFavorite} {...rest}>
    { user.isAdmin ?
        <PiPencilSimple className="icon" onClick={() => navigate(`/editDish/${id}`)} />
        :
      isFavorite ? <FaHeart className="icon" onClick={handleToggleFavorite}/> : <FaRegHeart className="icon" onClick={handleToggleFavorite}/>
    }
    <img onClick={goToDetails} src={imageURL} alt={name} />
      <h3 onClick={goToDetails}>{name} &gt; </h3>
      <p>R$ {price}</p>

      {
        !user.isAdmin &&
        <div>
          <div>
              <FaMinus className="icon2" onClick={handleRemove} />
              <span>0{quantity}</span>
              <FaPlus className="icon2" onClick={handleAdd} />
          </div>
          <Button onClick={includeItem} title="incluir" />
        </div>
      }
  </Container>;
}