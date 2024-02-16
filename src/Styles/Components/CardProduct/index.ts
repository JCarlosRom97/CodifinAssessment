import styled from "styled-components";

export const CardContainer = styled.div`
    flex: 3;
    height: 400px; 
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
