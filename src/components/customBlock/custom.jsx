import {StyledCustom} from "./custom.styled";
import {Content, MainHeader} from "../globalStyled/global.styled";
import {Title} from "../title/title";

export const Custom = () => {
  return(
    <StyledCustom>
      <Content>
        <div className={'contentWrapper'}>
          <img src="/img/custom-img.png" alt="custom"/>
          <div className={'content'}>
            <Title title={'FUTURE OF eSPORTS'}/>
            <MainHeader>Customize your Own Character</MainHeader>
            <p className={'customText'}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
            <div className="customList">
              <img src="/img/custom1.png" alt="custom"/>
              <img src="/img/custom2.png" alt="custom"/>
              <img src="/img/custom3.png" alt="custom"/>
            </div>
          </div>
        </div>
      </Content>
    </StyledCustom>
  )
}