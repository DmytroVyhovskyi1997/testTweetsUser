import { Li, Nav, StyledLink } from "./Navigation.styled"

export const Navigation = () =>{
    return(
        <Nav>
            <Li>
                <StyledLink to='/'>Home</StyledLink>
            </Li>
            <Li>
            <StyledLink to='user'>Tweets</StyledLink>
            </Li>
        </Nav>
    )
}