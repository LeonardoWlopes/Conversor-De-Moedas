import styled from "styled-components";

export const Header = styled.header`
  width: 540px;
  height: 85px;
  margin: 64px 0px;
  flex-direction: row;
  display: flex;
`;

export const HeaderImage = styled.div`
  height: 100%;
  width: 30%;
`;

export const HeaderContent = styled.div`
  height: 100%;
  width: 70%;
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
`;

export const ClockInfo = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #8c9cad;
`;
