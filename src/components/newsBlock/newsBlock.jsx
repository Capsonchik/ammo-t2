import {StyledNewsBlock} from "./newsBlock.styled";
import {Content, MainHeader} from "../globalStyled/global.styled";
import {Title} from "../title/title";
import {TopCard} from "../newsCards/topCard/topCard";
import {NewsCard} from "../newsCards/newsCard/newsCard";

export const NewsBlock = ({topNews, newsList}) => {
  const date = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return(
    <StyledNewsBlock>
      <Content>
        <Title title={'FUTURE OF eSPORTS'}/>
        <div className="newsBlockHeader">
          <MainHeader>Latest News & <br/> Articles</MainHeader>
          <button className={'newsBtn'}>read more</button>
        </div>
        <div className="newsList">
          <div className="topNews">
            <TopCard topNews={topNews} date={formattedDate}/>
          </div>
          <div className="news">
            {newsList.map((news) => <NewsCard key={news.id} news={news} date={formattedDate}/>)}
          </div>
        </div>
      </Content>
    </StyledNewsBlock>
  )
}