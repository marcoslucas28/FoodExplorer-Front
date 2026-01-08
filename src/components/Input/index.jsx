import { Container } from './styles'


export function Input({icon: Icon, placeholder, ...rest}){
    return(
        <Container {...rest}>
            {Icon && <Icon />}
            <input placeholder={placeholder} />
        </Container>
    )
}