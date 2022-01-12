import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  background-image: url(${require("../../Assets/Mask.png")});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right bottom;
`;

export const Content = styled.div`
  flex-direction: column;
  display: flex;
  width: 45%;
  height: 75vh;
  //background-color: greenyellow;
  
`;
