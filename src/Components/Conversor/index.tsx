import { useEffect, useState } from "react";
import InputTaxa from "../Inputs/InputTaxa";
import InputValor from "../Inputs/InputValor";
import * as S from "./styles";

export default function Conversor() {
  const [tipo, setTipo] = useState("");
  const [dolar, setDolar] = useState(0);
  const [taxa, setTaxa] = useState(0);

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!!tipo && !!dolar && !!taxa && dolar != 0 && taxa != 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [tipo, dolar, taxa]);

  return (
    <S.ConversorContainer>
      <S.InputsContainer>
        <InputValor label={"Dólar"} valor={dolar} setValor={setDolar} />
        <InputTaxa label="Taxa" valor={taxa} setValor={setTaxa} />
      </S.InputsContainer>
      <S.TipoDeCompra>
        <S.Text>Tipo de compra</S.Text>
        <S.RadioContainer onChange={(e: any) => setTipo(e.target.value)}>
          <div>
            <S.Input
              type="radio"
              name="TipoDeCompra"
              id="radio-1"
              value="dinheiro"
            />
            Dinheiro
          </div>
          <div>
            <S.Input
              type="radio"
              name="TipoDeCompra"
              id="radio-2"
              value="cartao"
            />
            Cartão
          </div>
        </S.RadioContainer>
      </S.TipoDeCompra>
      <S.Button active={active}>
        <img src={require("../../Assets/Transfer.png")} alt="Simbolo Transfer" />
        <S.ButtonText>Converter</S.ButtonText>
      </S.Button>
    </S.ConversorContainer>
  );
}
