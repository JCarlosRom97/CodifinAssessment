import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IProduct, ISelectorProduct } from "../../Types";
import { Container } from "../../Styles/globals";
import { Title } from "../../Styles/Pages/Add";
import { ButtonCartDetail, DescriptionDetail, ImageDetail, PriceDetail } from "../../Styles/Pages/Details";
import Header from "../../Components/Header";
import { add } from "../../redux/reducers/cart.reducer";



const Details = () => {
    const Products = useSelector((state:ISelectorProduct)=> state.products.data);
    const {sku} = useParams();
    const dispatch = useDispatch();
    const [dataProduct, setDataProduct] = useState<IProduct>({name:"", sku: "", price: 0, description:"", imgUrl:""});

    useEffect(()=> {
        const data = Products.filter((product:IProduct)=> product.sku === sku);
        setDataProduct(data[0]); 
    }, [Products, sku])

    const addCart = () => {
        dispatch(add(dataProduct));
        alert("Product added successfully")
    }

    return(
        <Container>
            <Header />
            <Title align="center">{dataProduct.name}</Title>
            <ImageDetail src={dataProduct.imgUrl} />
            <DescriptionDetail>{dataProduct.description}</DescriptionDetail>
            <PriceDetail>${dataProduct.price}</PriceDetail>
            <ButtonCartDetail onClick={() => addCart()}>Add to cart</ButtonCartDetail>
        </Container>
    )
}

export default Details; 