import styled from "styled-components";


export const ContainerForm = styled.div`
    flex-direction: "column";
    align-items: "center";
    background-color: white; 
    height: 100%; 
    padding-left: 350px;
    padding-right: 350px; 
    @media (max-width: 1000px){
        padding: 30px; 
        
    }
`

export const TextContainer = styled.div`
    padding-top: 10px;  
    align-items: center; 
`;

export const InputContainer = styled.div`
    padding-top: 10px;  
`;

export const Title = styled.p<{align:string, marginTop?:number}>`
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    ${({align}) => align && `text-align: ${align}`};
    ${({marginTop}) => marginTop && `margin-top: ${marginTop}px`};
`;

export const TitleInput = styled.p<{align:string, marginTop?:number}>`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    ${({align}) => align && `text-align: ${align}`};
    ${({marginTop}) => marginTop && `margin-top: ${marginTop}px`};
`;

export const Input = styled.input<{marginTop?:number, error:boolean}>`
    border-radius: 5px;
    border: 1px solid #030303; 
    width: 100%; 
    height: 35px; 
    ${({marginTop}) => marginTop && `margin-top: ${marginTop}px`};
    ${({error}) => error && `border-color: red`};
`;

export const ErrorText = styled.p`
    color: red; 
`;

export const NextButtonContainer = styled.div`
    padding-top: 30px; 
`;

