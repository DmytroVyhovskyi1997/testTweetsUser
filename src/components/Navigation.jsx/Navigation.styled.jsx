import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
padding-bottom: 5px;
position: relative;
color:white;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
&.active {
  color: red;
  &::after,
  hover {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: 0;
    background-color: red;
    border-radius: 2px;
  }
}
} 
`
export const Nav = styled.nav`
display:flex;
margin-left:40px;
margin-top:30px;
margin-bottom:30px;
`
export const Li = styled.li`
padding-left:40px;
`