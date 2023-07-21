import {StyledTitle} from "./title.styled";

export const Title = ({title}) => {
  return(
    <StyledTitle>
        <img src="/img/title-fire.svg" alt="fire"/>
        <p className={'titleText'}>{title}</p>
    </StyledTitle>
  )
}