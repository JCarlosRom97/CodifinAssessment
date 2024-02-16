import styled from "styled-components";

export const ContainerCartDetail = styled.div`
    display:flex; 
    flex-direction: column; 

    background-color: aliceblue;
    border: 2px solid black;
    border-radius: 20px; 
    padding: 10px; 
    @media (max-width: 1000px){
        padding: 5px; 
    }
    
`
export const ContainerProductDetail = styled.div`
    display:flex; 
    flex-direction: row; 
`

export const TextDetailCart = styled.p`
    font-size: 18px; 
    @media (max-width: 1000px){
        font-size: 12px; 
    }
`


export const ButtonRemove = styled.button`
    background-color: red; 
    color: white; 
    border-radius: 5px; 
    border: 0px; 
    margin-top: 20px; 
    margin-right: 5px; 
    width: 60px; 
    @media (max-width: 1000px){
        width: 30px; 
        font-size: 8px;
        padding: 3px;  
    }
`