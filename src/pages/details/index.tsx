import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IProduct, ISelectorProduct } from "../../Types";
import { Container, Header } from "../../Styles/globals";
import { Title } from "../../Styles/Pages/Add";
import { DescriptionDetail, ImageDetail, PriceDetail } from "../../Styles/Pages/Details";
import { LinkButton, TitleHeader } from "../../Styles/Pages/Home";

const Details = () => {
    const Products = useSelector((state:ISelectorProduct)=> state.products.data);
    const {sku} = useParams();

    const [dataProduct, setDataProduct] = useState<IProduct>({name:"", sku: "", price: 0, description:"", imgUrl:""});

    useEffect(()=> {
        const data = Products.filter((product:IProduct)=> product.sku == sku);
        setDataProduct(data[0]); 
    }, [])

    return(
        <Container>
            <Header>
                <TitleHeader>Web Online Shop</TitleHeader>
                <LinkButton to={"/add"}>Add Product</LinkButton>
            </Header>
            <Title align="center">{dataProduct.name}</Title>
            <ImageDetail src={dataProduct.imgUrl} />
            <DescriptionDetail>{dataProduct.description}</DescriptionDetail>
            <PriceDetail>${dataProduct.price}</PriceDetail>
        </Container>
    )
}

export default Details; 