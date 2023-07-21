import styled from "styled-components";

export const StyledNewsBlock = styled.section`
  padding-top: 130px;
  padding-bottom: 130px;
  background-color: black;
  
  .newsBlockHeader {
    display: flex;
    justify-content: space-between;
  }
  
  .newsBtn {
    width: 175px;
    height: 70px;
    border: 0;
    background-color: #57B8FF;
    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
    align-self: end;
    font-family: Orbitron;
  }
  
  .newsList {
    margin-top: 68px;
    display: flex;
  }
  
  .topNews {
    width: 49%;
  }
`