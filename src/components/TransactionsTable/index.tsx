import React from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { dateFormat, moneyFormat } from "../../utils";

import { TransactionsTableContainer } from "./styles";

const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <TransactionsTableContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {moneyFormat(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormat(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionsTableContainer>
  );
};

export default TransactionsTable;
