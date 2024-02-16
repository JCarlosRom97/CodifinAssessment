import { ButtonRemove, ContainerCartDetail, ContainerProductDetail, TextDetailCart } from "../../Styles/Components/CartDetail"
import { useSelector } from "react-redux"
import { IProductCart, ISelectorCart } from "../../Types"
import { useEffect, useState } from "react";
import { CartDetailsProduct } from "../../Styles/Components/CardProduct";
import { useDispatch } from "react-redux";
import { removeOne, removeAll } from "../../redux/reducers/cart.reducer";
import { ErrorText } from "../../Styles/Pages/Add";
import { Link } from "react-router-dom";
import { resolveQuantity } from "../../Hooks";

const CartDetail = () => {

    const dispatch = useDispatch(); 
    
    const [total, setTotal] = useState(0);

    const products = useSelector((state: ISelectorCart)=> state.cart.data); 


    useEffect(()=>{
        const reducer = (accumulator: number, product: IProductCart) =>
        accumulator + product.price * resolveQuantity(product.quantity);
        const total = products.reduce(reducer, 0)
        setTotal(total)
    }, [products])

    const handlerDelete = (quantity:number, sku:string) => {
        if(quantity === 1){
            dispatch(removeAll({sku:sku}))
            return; 
        }
        dispatch(removeOne({sku: sku}))
    }

    return(
        <ContainerCartDetail>
            {products.length > 0 ? products.map((product:IProductCart)=>(
                <ContainerProductDetail key={product.sku}>  
                    <CartDetailsProduct>
                        <TextDetailCart>{product.name}</TextDetailCart>
                    </CartDetailsProduct>
                    <CartDetailsProduct>
                        <TextDetailCart>Quantity:{product.quantity}</TextDetailCart>
                    </CartDetailsProduct>
                    <CartDetailsProduct>
                        <TextDetailCart>Price: ${product.price}</TextDetailCart>
                    </CartDetailsProduct>
                    <CartDetailsProduct>
                        <TextDetailCart>Total: ${product.price * resolveQuantity(product.quantity) }</TextDetailCart>
                    </CartDetailsProduct>
                    <CartDetailsProduct>
                        <ButtonRemove onClick={() => handlerDelete( resolveQuantity(product.quantity) , product.sku)}>-</ButtonRemove>
                        <ButtonRemove onClick={() => dispatch(removeAll({sku: product.sku}))}>All</ButtonRemove>
                    </CartDetailsProduct>
                </ContainerProductDetail>
            )):(
                <ErrorText>No products in cart, keep watching our <Link to={"/"}>catalogue</Link></ErrorText>
            )}
            <CartDetailsProduct>
                <TextDetailCart>Quantity: ${total}</TextDetailCart>
            </CartDetailsProduct>
        </ContainerCartDetail>
    )
}

export default CartDetail; 