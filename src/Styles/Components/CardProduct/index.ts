import styled from "styled-components";

export const CardContainer = styled.div<{iscart?:string}>`
    flex: 3;
    ${({iscart}) => iscart ? ` height: 450px;` : `height: 400px;`};
    background-color: aliceblue;
    border: 2px solid black;
    border-radius: 20px; 
    margin: 10px; 
`

export const TitleCard = styled.p`
    text-align: center; 
    font-size: 20px; 
    font-weight: 700; 
`

export const ImageCard = styled.img`
    height: 220px;
    width: 100%; 
`

export const PriceCard = styled.p`
    text-align: center; 
    font-size: 20px; 
`

export const ButtonsCardContainer = styled.div`
    display:flex; 
    flex-direction: row; 
`

export const ButtonCard = styled.button`
    flex: 6; 
    background-color: powderblue;
`

export const PriceDetailsContainer = styled.div`
    display:flex; 
    flex-direction: row; 
    margin: 10px;
`

export const CartDetailsProduct = styled.div`
    flex:4;
    textAlign:"center";
`
