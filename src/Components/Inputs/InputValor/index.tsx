import * as S from "./styles";

interface props {
  label: string;
}

export default function InputValor({ label }: props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <S.Input />
      </S.InputContainer>
    </S.Container>
  );
}
