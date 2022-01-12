import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  width: 90%;
  height: 100%;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  text-align: start;
  color: #2e3742;
  flex: none;
  order: 0;
  margin-left: 4px;

  &&:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  width: 168px;
  height: 56px;
  border: 1px solid #d7e0eb;
  box-sizing: border-box;
  border-radius: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  padding: 16px;
  display: flex;
  flex-direction: row;

  filter: drop-shadow(0px 8px 4px rgba(13, 17, 27, 0.08));
  background-color: white;
`;

export const Label = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #2e3742;
  text-transform: uppercase;
  margin-bottom: 8px;
`;
