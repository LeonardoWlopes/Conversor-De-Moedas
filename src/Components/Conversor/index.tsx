import { useContext, useEffect, useState } from "react";
import * as S from "./styles";

import ValoresContext from "../../Context/Valores";
import VoltarButton from "../Buttons/Voltar";
import InputTaxa from "../Inputs/InputTaxa";
import InputValor from "../Inputs/InputValor";

interface props {
  isColumn: boolean;
}

export default function Conversor({ isColumn }: props) {
  const [tipo, setTipo] = useState("");
  const [dolar, setDolar] = useState<number>(0);
  const [taxa, setTaxa] = useState<number>(0);

  const [active, setActive] = useState(false);

  const [valorConvertido, setValorConvertido] = useState<string | null>(null);

  const { usdBrl } = useContext(ValoresContext);

  useEffect(() => {
    if (!!tipo && !!dolar && !!taxa && dolar != 0 && taxa != 0) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [tipo, dolar, taxa]);

  function handleCalcValue() {
    const valorDolar = parseFloat(usdBrl.ask);
    const impostoDoEstado = (dolar * taxa) / 100;

    if (tipo === "dinheiro") {
      let iof = (dolar * valorDolar * 1.1) / 100;
      let part1 = dolar + impostoDoEstado;
      let part2 = valorDolar + iof;
      let valorConvertido = part1 * part2;

      setValorConvertido(valorConvertido.toFixed(2).replace(".", ","));
    } else {
      let iof = (dolar * valorDolar * 6.4) / 100;
      let part1 = dolar + impostoDoEstado + iof;
      let valorConvertido = part1 * valorDolar;

      setValorConvertido(valorConvertido.toFixed(2).replace(".", ","));
    }
  }

  function handleBack() {
    setDolar(0);
    setTaxa(0);
    setValorConvertido(null);
  }
  if (!valorConvertido)
    return (
      <S.ConversorContainer isColumn={isColumn}>
        <S.InputsContainer isColumn={isColumn}>
          <InputValor label={"Dólar"} valor={dolar} setValor={setDolar} />
          <InputTaxa label="Taxa" valor={taxa} setValor={setTaxa} />
        </S.InputsContainer>
        <S.TipoDeCompra isColumn={isColumn}>
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
                value="cartão"
              />
              Cartão
            </div>
          </S.RadioContainer>
        </S.TipoDeCompra>
        <S.Button active={active} onClick={() => active && handleCalcValue()}>
          <img
            src={require("../../Assets/Transfer.png")}
            alt="Simbolo Transfer"
          />
          <S.ButtonText>Converter</S.ButtonText>
        </S.Button>
      </S.ConversorContainer>
    );
  else {
    return (
      <S.ConversorContainer>
        <div style={{ marginTop: "32px" }}>
          <VoltarButton onClick={() => handleBack()} />
        </div>
        <S.ResultContainer>
          <S.ResultText>O resultado do cálculo é</S.ResultText>
          <S.Result>{`R$ ${valorConvertido}`}</S.Result>
        </S.ResultContainer>
        <S.ResultInfoContainer>
          <S.Info>
            Compra no {tipo} e taxa de {taxa}%
          </S.Info>
          <br />
          <S.Info>
            Cotação do dólar: $1,00 = R$ {parseFloat(usdBrl.ask).toFixed(2)}
          </S.Info>
        </S.ResultInfoContainer>
      </S.ConversorContainer>
    );
  }
}
