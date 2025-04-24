import { Container } from './styles'

export function Button({title, isDelete=false, ...rest}){
    return(
        <Container $isdelete={isDelete} {...rest}>{title}</Container>
    )
}