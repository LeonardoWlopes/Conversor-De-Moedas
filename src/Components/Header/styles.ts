import styled from "styled-components";
interface props {
  isColumn: boolean;
}

export const Header = styled.header<props>`
  max-width: 540px;
  min-height: 85px;
  margin: 64px 0px;
  flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
  display: flex;
  margin: ${(props) => (props.isColumn ? "auto" : "none")};
`;

export const HeaderImage = styled.div<props>`
  height: 80px;
  width: 165px;
  margin: auto;
  margin-bottom: 16px;
  margin-right: ${(props) => (props.isColumn ? "" : "16px")};
`;

export const HeaderContent = styled.div`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const ClockText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #45505e;
  margin-bottom: 8px;
  text-align: center;
`;

export const ClockInfo = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #8c9cad;
  text-align: center;
`;
