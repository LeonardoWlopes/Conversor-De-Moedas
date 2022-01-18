import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface props {
  label: string;
  valor: number;
  setValor: Dispatch<SetStateAction<any>>;
}

export default function InputValor({ label, valor, setValor }: props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        {"$"}
        <S.Input
          type={"number"}
          value={valor}
          onChange={(e) => {
            try {
              setValor(parseFloat(e.target.value));
            } catch {}
          }}
          min={0}
        />
      </S.InputContainer>
    </S.Container>
  );
}
