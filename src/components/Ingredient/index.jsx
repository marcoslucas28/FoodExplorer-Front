import { Container } from './styles'

import { FiX } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'

export function Ingredient({isNew = false, value, onClick, ...rest}){
    return(
        <Container $isnew={isNew}>
            { isNew ? <input type="text" value={value} readOnly={!isNew} {...rest} /> : <span>{value}</span> }

            <button type="button" onClick={onClick}>
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}