import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-block;
  color: black;
  list-style: none;
  padding: 5px 15px;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid black;
  border-radius: 10px;

  &:hover {
    color: red;
  }
`;
