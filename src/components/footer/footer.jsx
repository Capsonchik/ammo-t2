import {StyledFooter} from "./footer.styled";
import {Content} from "../globalStyled/global.styled";

export const Footer = () => {
  return(
    <StyledFooter>
      <Content>
        <div className="contentWrapper">
          <div className="companyInfo">
            <img src="/img/logo.png" alt="logo"/>
            <span className={'companyText'}>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</span>
          </div>
          <div className="menu">
            <h3 className={'menuHeader'}>Menu items</h3>
            <ul>
              <li>about</li>
              <li>blog</li>
              <li>shop</li>
              <li>contact us</li>
            </ul>
          </div>
          <div className="menu">
            <h3 className={'menuHeader'}>Other Pages</h3>
            <ul>
              <li>Styleguide</li>
              <li>Changelog</li>
              <li>licenses</li>
              <li>Team</li>
            </ul>
          </div>
        </div>
      </Content>
    </StyledFooter>
  )
}