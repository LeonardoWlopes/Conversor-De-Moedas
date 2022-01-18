import styled from "styled-components";

interface props {
  active: boolean;
}

export const ConversorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 268px;
  //background-color: green;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const TipoDeCompra = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #2e3742;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  width: 50%;
`;

export const Input = styled.input`
  margin-right: 8px;
`;

export const Button = styled.button<props>`
  width: 149px;
  height: 56px;
  background: ${(props) => (props.active ? "#00ab63" : "#8C9CAD")};
  display: flex;
  flex-direction: row;
  border: 1px solid #008b57;
  box-sizing: border-box;
  box-shadow: 0px 8px 4px rgba(13, 17, 27, 0.08);
  border-radius: 8px;
  margin-top: 32px;
  align-items: center;
  justify-content: center;
  &&:hover {
    cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};
    background-color: ${(props) => props.active && "#009E57"};
  }
  &&:active {
    background-color: ${(props) => props.active && "#008046"};
  }
`;

export const ButtonText = styled.span`
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 8px;
`;

export const ResultContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  min-height: 100px;
`;

export const ResultText = styled.span`
  font-size: 20px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #45505e;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`;

export const Result = styled.span`
  font-size: 64px;
  line-height: 80px;
  display: flex;
  align-items: center;
  color: #00ab63;
  font-weight: bold;
`;

export const ResultInfoContainer = styled.div``;

export const Info = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;
  color: #6e7e90;
`;
