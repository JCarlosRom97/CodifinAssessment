import { useSelector } from "react-redux";
import { IProduct, IProductCart, ISelectorCart, ISelectorProduct } from "../../Types";
import { Container, HeaderContainer } from "../../Styles/globals";
import { ContainerCards, SearchBar, LinkButton, Button, TitleHeader } from "../../Styles/Pages/Home";
import CardProduct from "../../Components/CardProduct";
import { useEffect, useState } from "react";
import { resolveQuantity } from "../../Hooks";

function Home() {
  const productsRedux = useSelector((state: ISelectorProduct)=> state.products.data); 
  const productsCart = useSelector((state:ISelectorCart) => state.cart.data)

  const [products, setProducts] = useState<IProduct[]>(productsRedux);
  const [isSorted, setIsSorted] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);

  const searchByName = (e: { target: { value: string; }; }) => {
    const name = e.target.value; 
    const tempSortedProducts: IProduct []= productsRedux.filter((element: IProduct)=> element.name.includes(name) );
    setProducts(tempSortedProducts);
  }

  const sortByPrice = ()=>{
    const tempSortedPrice: IProduct []= productsRedux.sort((a: IProduct, b: IProduct) => {
      if(!isSorted){
        return a.price - b.price
      }
      return b.price - a.price
    } );
    
    setProducts(tempSortedPrice) 
    setIsSorted((prevState) => !prevState)

  } 

  useEffect(()=>{
    const reducer = (accumulator: number, product: IProductCart) =>
    accumulator + resolveQuantity(product.quantity);
    const total = productsCart.reduce(reducer, 0)
    setTotalProducts(total)
  }, [productsCart])

  

  return (
    <Container>
      <HeaderContainer>
        <TitleHeader>Web Online Shop</TitleHeader>
        <Button onClick={sortByPrice}>Sort</Button>
        <SearchBar placeholder="Search" onChange={searchByName}  />
        <LinkButton to={"/add"}>Add Product</LinkButton>
        <LinkButton to={"/cart"}>Cart ({totalProducts})</LinkButton>
      </HeaderContainer>
      <ContainerCards>
        <CardProduct products={products}/>
      </ContainerCards>
    </Container>
  );
}

export default Home;
