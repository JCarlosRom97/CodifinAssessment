import { Link } from "react-router-dom";
import styled from "styled-components";


export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    align-items: center; 
`


export const TitleHeader = styled.p`
    align-self: center; 
    font-size: 30px; 
    font-weight: bold; 
    flex:8; 
`

export const SearchBar = styled.input`
    flex: 2;
`

export const LinkButton = styled(Link)` 
    margin-left: 20px;     
    flex:1; 
`

export const Button = styled.button`
    flex: 1;
    margin-right: 10px; 
`