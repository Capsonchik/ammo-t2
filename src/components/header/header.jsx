import {StyledHeader} from "./header.styled";
import {Content} from "../globalStyled/global.styled";

export const Header = () => {
  return(
    <StyledHeader>
        <div className="contentWrapper">
          <img src="/img/logo.png" alt="logo"/>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Team</li>
              <li>Shop</li>
              <li>Pages</li>
            </ul>
          </nav>
          <div className="cart">
            <div className="cartBlock">
              <img src="/img/cart.png" alt="cart"/>
              <p className={'cartCounter'}>0</p>
            </div>
            <button className={'cartBtn'}>Contact us</button>
          </div>
        </div>
    </StyledHeader>
  )
}