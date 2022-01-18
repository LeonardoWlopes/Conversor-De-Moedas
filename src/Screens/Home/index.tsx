import { useEffect, useState } from "react";
import * as S from "./styles";

import Conversor from "../../Components/Conversor";
import Header from "../../Components/Header";

export default function Home() {
  const [isColumn, setIsColumn] = useState(false);

  useEffect(() => console.log("Mudou"), [isColumn]);

  window.addEventListener("resize", function () {
    window.innerWidth < 875 ? setIsColumn(true) : setIsColumn(false);
  });

  useEffect(() => {
    window.innerWidth < 875 ? setIsColumn(true) : setIsColumn(false);
  }, []);

  return (
    <S.Container isColumn={isColumn}>
      <S.Content isColumn={isColumn}>
        <Header isColumn={isColumn} />
        <Conversor isColumn={isColumn} />
      </S.Content>
    </S.Container>
  );
}
