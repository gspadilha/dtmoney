import React, { useContext } from "react";

import incomeImagem from "../../assets/income.svg";
import outcomeImagem from "../../assets/outcome.svg";
import totalImagem from "../../assets/total.svg";

import { TransactionsContext } from "../../contexts/Transactions";

import { moneyFormat } from "../../utils";

import { SummaryContainer, SummaryInfo } from "./styles";

const Summary: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);
  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case "deposit":
          acc.deposits += transaction.amount;
          acc.total += transaction.amount;
          break;
        case "withdraw":
          acc.withdraws += transaction.amount;
          acc.total -= transaction.amount;
          break;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <SummaryInfo>
        <header>
          <p>Entradas</p>
          <img src={incomeImagem} alt="Entradas" />
        </header>
        <strong>{moneyFormat(summary.deposits)}</strong>
      </SummaryInfo>

      <SummaryInfo>
        <header>
          <p>Saídas</p>
          <img src={outcomeImagem} alt="Saídas" />
        </header>
        <strong>{moneyFormat(summary.withdraws)}</strong>
      </SummaryInfo>

      <SummaryInfo status={summary.total > 0 ? "green" : "red"}>
        <header>
          <p>Total</p>
          <img src={totalImagem} alt="Total" />
        </header>
        <strong>{moneyFormat(summary.total)}</strong>
      </SummaryInfo>
    </SummaryContainer>
  );
};

export default Summary;
