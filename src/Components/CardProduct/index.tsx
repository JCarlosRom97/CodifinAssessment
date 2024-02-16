import { IProduct } from "../../Types"
import { ButtonCard, ButtonsCardContainer, CardContainer, ImageCard, PriceCard, TitleCard } from "../../Styles/Components/CardProduct"
import { useNavigate } from "react-router-dom"

const Card = ({product}:{product: IProduct}) => {
    const navigate = useNavigate();

    const navigateDetails = (sku:string)=>{
        navigate(`/detail/${sku}`)
    }

    return(

        <CardContainer> 
            <TitleCard>{product.name}</TitleCard>
            <ImageCard  src={product.imgUrl}/>
            <PriceCard>${product.price}</PriceCard>
            <ButtonsCardContainer>
                <ButtonCard onClick={() => navigateDetails(product.sku)}>Details</ButtonCard>
                <ButtonCard>Add to cart</ButtonCard>
            </ButtonsCardContainer>

        </CardContainer>
        
    )
}

const CardProduct = ({products}:{products:IProduct[]}) => {
    return(
        <>
            {products && products.map((product:IProduct)=> (<Card key={product.sku} product={product}/>))}
        </>
    )
}

export default CardProduct; 