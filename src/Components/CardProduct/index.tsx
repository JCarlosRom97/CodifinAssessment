import { IProduct, IProductCart } from "../../Types"
import { ButtonCard, ButtonsCardContainer, CardContainer, CartDetailsProduct, ImageCard, PriceCard, PriceDetailsContainer, TitleCard } from "../../Styles/Components/CardProduct"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducers/cart.reducer";
import { resolveQuantity } from "../../Hooks";

const Card = ({product, iscart}:{product: IProduct & IProductCart, productCart?: IProductCart, iscart?:string}) => {
    
    const navigate = useNavigate();
 
    const dispatch = useDispatch();

    const navigateDetails = (sku:string)=>{
        navigate(`/detail/${sku}`)
    }

  
  
    return(

        <CardContainer iscart={iscart}> 
            <TitleCard>{product.name}</TitleCard>
            <ImageCard  src={product.imgUrl}/>
            <PriceCard>${product.price}</PriceCard>
            <ButtonsCardContainer>
                <ButtonCard onClick={() => navigateDetails(product.sku)}>Details</ButtonCard>
                <ButtonCard onClick={() => dispatch(add(product))}>Add to cart</ButtonCard>
            </ButtonsCardContainer>
            {iscart && (
                <PriceDetailsContainer>
                    <CartDetailsProduct>
                        <p>Quantity:{product.quantity}</p>
                    </CartDetailsProduct>
                    <CartDetailsProduct>
                        <p>Price:{product.price}</p>
                    </CartDetailsProduct>
                    <CartDetailsProduct>
                        <p>Total:{product.price * resolveQuantity(product.quantity) }</p>
                    </CartDetailsProduct>
                </PriceDetailsContainer>
            )}
        </CardContainer>
        
    )
}

const CardProduct = ({products, iscart}:{products:IProduct[] & IProductCart[] , iscart?:string}) => {
    return(
        <>
            {products && products.map((product:IProduct & IProductCart)=> (<Card key={product.sku} product={product} iscart={iscart} />))}
        </>
    )
}

export default CardProduct; 