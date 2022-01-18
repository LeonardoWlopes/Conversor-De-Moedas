import * as S from "./styles";

import Conversor from "../../Components/Conversor";
import Header from "../../Components/Header";
import { useEffect } from "react";

export default function Home() {
  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
  });
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <S.Container>
      <S.Content>
        <Header />
        <Conversor />
      </S.Content>
    </S.Container>
  );
}
