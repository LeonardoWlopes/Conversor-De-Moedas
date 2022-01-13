import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface props {
  label: string;
  valor: number;
  setValor: Dispatch<SetStateAction<any>>;
}

export default function InputTaxa({ label, valor, setValor }: props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        {"%"}
        <S.Input
          type={"number"}
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          min={0}
          max={100}
        />
      </S.InputContainer>
    </S.Container>
  );
}
