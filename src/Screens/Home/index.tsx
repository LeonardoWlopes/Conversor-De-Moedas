import * as S from "./styles";

import Conversor from "../../Components/Conversor";
import Header from "../../Components/Header";

export default function Home() {
  return (
    <S.Container>
      <S.Content>
        <Header />
        <Conversor />
      </S.Content>
    </S.Container>
  );
}
