<!-- 
   CUIDADO 
   Quando editar esse readme, tome cuidado com as tags <br/> 
   elas são importantes para alinhar as imagens
-->

<div align="center">
   <img src=".github/brand.svg" height="90">
</div>

# Conversor de Moedas

Um site que converte valores de dólar para real.

<img align="right" src=".github/currency.svg" width="370">

A aplicação tem duas etapas, uma para inserir o valor que se deseja converter e outra para mostrar os valores convertidos.

Para isso, o site utiliza a  [API de moedas][QUOTATION_API] Para se manter sempre atualizado.

A aplicação funciona da seguinte maneira:

1. Ela busca na API a última cotação do dólar

2. Pega as informações digitadas pelo usuário

3. Calcula o imposto baseado no que o usuário digitou

4. Faz a conversão com a cotação mais atual

5. E mostra para o usuário o resultado final

<br/>

## Cálculo dos valores

<img align="left" src=".github/calculate.svg" width="250">

### Comprando com dinheiro

`[(Valor em dólar) + (imposto do Estado)] x (valor do dólar + IOF da compra de dólar)`

### Comprando com cartão

`[(Valor em dólar) + (imposto do Estado) + (IOF de transações internacionais)] x (valor do dólar)`

<br/>
<br/>

## Possíveis dúvidas

- IOF é um imposto federal e tem como intuito ser um regulador da economia nacional. Em dinheiro, seu valor é 1,1%, e em cartão 6,4%
- Nos EUA, cada Estado tem sua própria cobrança de impostos. Por exemplo, o imposto de Nevada é de 8,19%, já o de Nova Iorque é de 8,87%

<br/>


[QUOTATION_API]: https://docs.awesomeapi.com.br/api-de-moedas

