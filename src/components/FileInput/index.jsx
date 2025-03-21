import { Container } from './styles'

import img from '../../assets/dowloadIcon.svg'

export function FileInput({onChange, ...rest}){
    return(
        <Container htmlFor='dish-image' {...rest}>
            <img src={img} alt="ícone dowload" />
            <span>Selecione imagem</span>
            <input onChange={onChange} id='dish-image' type='file' accept='image/png, image/png' {...rest} />
        </Container>
    )
}