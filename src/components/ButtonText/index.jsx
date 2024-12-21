import { Container } from './styles'

export function ButtonText({title, isBigSize=true, icon: Icon, ...rest}){
    return(
        <Container $isbigsize={isBigSize} {...rest}>
            {Icon && <Icon />}
            {title}
        </Container>
    )
}