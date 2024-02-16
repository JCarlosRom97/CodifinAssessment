import { useSelector } from "react-redux";
import { ISelectorCart } from "../../Types";
import { Container } from "../../Styles/globals";
import Header from "../../Components/Header";
import { ContainerCards, LinkButton, TitleHeader } from "../../Styles/Pages/Home";
import CardProduct from "../../Components/CardProduct";
import { CartDetailsProduct } from "../../Styles/Components/CardProduct";
import CartDetail from "../../Components/CartDetail";

const Cart = () => {
    
    const cartRedux = useSelector((state: ISelectorCart)=> state.cart.data); 
 
    return(
        <Container>
            <Header />
            <ContainerCards>
                <CardProduct products={cartRedux} iscart={"true"} />
            </ContainerCards>
            <CartDetail/>
        </Container>
    )
}

export default Cart; 