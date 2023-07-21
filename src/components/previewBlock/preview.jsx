import {Content} from "../globalStyled/global.styled";
import {StyledPreview} from "./preview.styled";
import {Title} from "../title/title";

export const Preview = () => {
  return(
    <StyledPreview>
      <Content>
        <div className={'contentWrapper'}>
          <div className={'content'}>
            <Title title={'FUTURE OF eSPORTS'}/>
            <img className={'headerImg'} src="/img/header-img.png" alt="header"/>
            <p className={'text'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
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