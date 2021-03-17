import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { TransactionsTableContainer } from "./styles";

interface TransactionsApi {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionsApi[]>([]);

  const buscarDados = async () => {
    const dados = await api.get<TransactionsApi[]>("/transactions");
    setTransactions(dados.data);
  };

  useEffect(() => {
    buscarDados();
  }, []);

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
              <td className={transaction.type}>R$ {transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionsTableContainer>
  );
};

export default TransactionsTable;
