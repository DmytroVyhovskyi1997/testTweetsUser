import { StyledLink } from "./Navigation.styled"

export const Navigation = () =>{
    return(
        <nav>
            <li>
                <StyledLink to='/'>Home</StyledLink>
            </li>
            <li>
            <StyledLink to='user'>Users</StyledLink>
            </li>
        </nav>
    )
}