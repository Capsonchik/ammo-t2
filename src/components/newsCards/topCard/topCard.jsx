import {StyledTopCard} from "./topCard.styled";

export const TopCard = ({topNews, date}) => {
  return(
    <StyledTopCard>
      <img src={topNews.img} alt="news"/>
      <p className={'date'}>{date}</p>
      <p className={'text'}>{topNews.text}</p>
    </StyledTopCard>
  )
}