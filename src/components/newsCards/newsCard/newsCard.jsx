import {StyledNewsCard} from "./newsCard.styled";

export const NewsCard = ({news, date}) => {
  return(
    <StyledNewsCard>
      <img src={news.img} alt="news"/>
      <p className={'date'}>{date}</p>
      <p className={'text'}>{news.text}</p>
    </StyledNewsCard>
  )
}