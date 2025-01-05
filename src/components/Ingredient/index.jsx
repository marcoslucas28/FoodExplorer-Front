import { Container } from './styles'

import { FiX } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'

export function Ingredient({isNew = false, value, onClick, ...rest}){
    return(
        <Container $isnew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />

            <button onClick={onClick}>
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}