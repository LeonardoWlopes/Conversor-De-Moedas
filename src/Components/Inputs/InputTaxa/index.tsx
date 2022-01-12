import * as S from "./styles";

interface props {
  label: string;
}

export default function InputTaxa({ label }: props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        {"%"}
        <S.Input type={"number"} placeholder="" min={0} max={100} />
      </S.InputContainer>
    </S.Container>
  );
}
