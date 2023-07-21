import styled from "styled-components";

export const StyledPreview = styled.section`
  background: linear-gradient(90deg, #000000 57%, #57B8FF 30%);
  padding-top: 297px;
  padding-bottom: 250px;
  
  .text {
    color: #999;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin-top: 45px;
  }
  
  .contentWrapper {
    display: flex;
    justify-content: space-between;
  }
  
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
    
    & img {
      margin-right: 8px;
    }
  }
  
  .headerImg {
    width: 656px;
    height: 258px;
  }
  
  .man {
    width: 660px;
    height: 518px;
  }
  
  .buttons {
    display: flex;
    margin-top: 53px;
    
    & button {
      width: 203px;
      height: 70px;
      color: #FFF;
      font-size: 18px;
      font-weight: 400;
      background-color: black;
      border: 0;
      font-family: Orbitron;
    }
    
    & button:hover {
      background-color: #57B8FF;;
    }
  }
`