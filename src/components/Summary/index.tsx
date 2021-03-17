import React from "react";

import incomeImagem from "../../assets/income.svg";
import outcomeImagem from "../../assets/outcome.svg";
import totalImagem from "../../assets/total.svg";

import { SummaryContainer, SummaryInfo } from "./styles";

const Summary: React.FC = () => {
  return (
    <SummaryContainer>
      <SummaryInfo>
        <header>
          <p>Entradas</p>
          <img src={incomeImagem} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </SummaryInfo>

      <SummaryInfo>
        <header>
          <p>Saídas</p>
          <img src={outcomeImagem} alt="Saídas" />
        </header>
        <strong>- R$ 700,00</strong>
      </SummaryInfo>

      <SummaryInfo status={"green"}>
        <header>
          <p>Total</p>
          <img src={totalImagem} alt="Total" />
        </header>
        <strong>R$ 300,00</strong>
      </SummaryInfo>
    </SummaryContainer>
  );
};

export default Summary;
