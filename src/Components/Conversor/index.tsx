import InputTaxa from "../Inputs/InputTaxa";
import InputValor from "../Inputs/InputValor";
import * as S from "./styles";

export default function Conversor() {
  return (
    <S.ConversorContainer>
      <S.InputsContainer>
        <InputValor label={"Dólar"} />
        <InputTaxa label="Taxa"/>
      </S.InputsContainer>
    </S.ConversorContainer>
  );
}
