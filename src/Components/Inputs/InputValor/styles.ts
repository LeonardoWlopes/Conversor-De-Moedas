import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  text-align: center;
  color: #2e3742;
  flex: none;
  order: 0;
  &:before {
    content: '"\\00d7"';
    margin-right: 6px;
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
  padding: 0px;
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
