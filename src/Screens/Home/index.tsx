import React, { useEffect, useState } from "react";
import * as S from "./styles";

export default function Home() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.HeaderImage>
            <img src={require("../../Assets/Main Logo.png")} alt="Logo Stone" />
          </S.HeaderImage>
          <S.HeaderContent>
            <S.ClockText>
              {dateState.toLocaleDateString("pt-br", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {"  "}|{"  "}
              {dateState.toLocaleString("pt-br", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
                timeZone: "UTC",
              })}{" "}
              UTC
            </S.ClockText>
            <S.ClockInfo>
              Dados de câmbio disponibilizados pela Morningstar.
            </S.ClockInfo>
          </S.HeaderContent>
        </S.Header>
      </S.Content>
    </S.Container>
  );
}