import { Link } from "react-router-dom";
import { TitleHeader, LinkButton } from "../../Styles/Pages/Home"
import { HeaderContainer } from "../../Styles/globals"

const Header = () =>{
    
    return(
        <HeaderContainer>
            <Link to={"/"}  style={{ textDecoration: 'none', color:"black" }}>
                <TitleHeader>Web Online Shop</TitleHeader>
            </Link>
            <LinkButton to={"/add"}>Add Product</LinkButton>
        </HeaderContainer>
    )

} 

export default Header; 