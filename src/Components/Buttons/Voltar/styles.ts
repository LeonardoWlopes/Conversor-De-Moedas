import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px 20px;
  width: 120px;
  height: 56px;
  background: #ffffff;
  border: 1px solid #d7e0eb;
  box-sizing: border-box;
  box-shadow: 0px 8px 4px rgba(13, 17, 27, 0.08);
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  &&:hover {
    background-color: #f7f7f7;
    cursor: pointer;
  }
  &&:active {
    background-color: #efefef;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  color: #2e3742;
  text-transform: capitalize;
  font-weight: bold;
`;
