import {Content, Title} from "../globalStyled/global.styled";
import {StyledPreview} from "./preview.styled";

export const Preview = () => {
  return(
    <StyledPreview>
      <Content>
        <div className={'contentWrapper'}>
          <div className={'content'}>
            <div className={'title'}>
              <img src="/img/title-fire.svg" alt="fire"/>
              <Title>FUTURE OF eSPORTS</Title>
            </div>
            <img className={'headerImg'} src="/img/header-img.png" alt="header"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
            <div className={'buttons'}>
              <button>Explore More</button>
              <button>View our team</button>
            </div>
          </div>
          <img className={'man'} src="/img/man-header.png" alt="fortnite"/>

        </div>
      </Content>
    </StyledPreview>
  )
}