import styled from "styled-components";

export const Title = styled.p<{align:string, marginTop?:number}>`
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    ${({align}) => align && `text-align: ${align}`};
    ${({marginTop}) => marginTop && `margin-top: ${marginTop}px`};
`;

export const ImageDetail = styled.img`
    height: 300px;
    width: 70%; 
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`

export const DescriptionDetail = styled.p`
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
`

export const PriceDetail = styled.p`
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
`

export const ButtonCartDetail = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-size: 30px;
    background-color: ghostwhite;
`