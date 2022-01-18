import * as S from "./styles";
import * as F from "react-feather";

interface props {
  onClick: () => void;
}

export default function VoltarButton({ onClick }: props) {
  return (
    <S.Container onClick={onClick}>
      <F.ArrowLeft color="#8C9CAD" />
      <S.Text>voltar</S.Text>
    </S.Container>
  );
}
