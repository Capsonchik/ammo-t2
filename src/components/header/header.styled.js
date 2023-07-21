import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 1340px;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 27px;
  
  .contentWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  
  li {
    color: #FFF;
    font-size: 16px;
    font-weight: 400;
    margin-right: 60px;
  }
  
  li:last-child {
    margin-right: 0;
  }
  
  li:hover {
    color: #FAC422;
    cursor: pointer;
  }
  
  .cart {
    display: flex;
    align-items: center;
  }
  
  .cartBlock {
    display: flex;
    
    & img {
      width: 32px;
      height: 32px;
    }
  }
  
  .cartCounter {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: start;
    background-color: white;
    width: 21px;
    height: 18px;
    border-radius: 9px;
    font-size: 11px;
    margin-right: 20px;
  }
  
  .cartBtn {
    width: 178px;
    height: 62px;
    color: #FFF;
    font-size: 18px;
    font-weight: 400;
    background-color: inherit;
    font-family: Orbitron;
    border: 0;
    outline: 1px solid white;
  }
  
  .cartBtn:hover {
    cursor: pointer;
  }
  
`