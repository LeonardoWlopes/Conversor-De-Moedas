import styled from "styled-components";

interface props {
  isColumn: boolean;
}

export const Container = styled.div<props>`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: url(${require("../../Assets/Mask.png")});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right bottom;
`;

export const Content = styled.div<props>`
  flex-direction: column;
  display: flex;
  background-color: ${(props) =>
    props.isColumn ? "white" : ""};
  padding: 16px 46px;
  border-radius: 16px;
  margin: ${(props) => (props.isColumn ? "auto" : "")};
`;
