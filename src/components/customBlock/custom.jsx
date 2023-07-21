import {StyledCustom} from "./custom.styled";
import {Content} from "../globalStyled/global.styled";
import {Title} from "../title/title";

export const Custom = () => {
  return(
    <StyledCustom>
      <Content>
        <div className={'contentWrapper'}>
          <img src="/img/custom-img.png" alt="custom"/>
          <div className={'content'}>
            <Title title={'FUTURE OF eSPORTS'}/>
          </div>
        </div>
      </Content>
    </StyledCustom>
  )
}