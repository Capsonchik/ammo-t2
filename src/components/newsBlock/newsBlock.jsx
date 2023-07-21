import {StyledNewsBlock} from "./newsBlock.styled";
import {Content, MainHeader} from "../globalStyled/global.styled";
import {Title} from "../title/title";

export const NewsBlock = () => {
  return(
    <StyledNewsBlock>
      <Content>
        <Title title={'FUTURE OF eSPORTS'}/>
        <div className="newsBlockHeader">
          <MainHeader>Latest News & <br/> Articles</MainHeader>
          <button className={'newsBtn'}>read more</button>
        </div>
        <div className="newsList">
          <div className="topNews"></div>
          <div className="news"></div>
        </div>
      </Content>
    </StyledNewsBlock>
  )
}