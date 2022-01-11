import InputValor from "../Inputs/InputValor";
import * as S from "./styles";

export default function Conversor() {
  return (
    <S.ConversorContainer>
      <S.InputsContainer>
        <InputValor label={"Dólar"} />
        <InputValor label={"Dólar"} />
      </S.InputsContainer>
    </S.ConversorContainer>
  );
}
