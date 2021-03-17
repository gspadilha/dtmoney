import React, { useEffect, useState } from "react";
import { api } from "../../services/api";

import { TransactionsTableContainer } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}
interface TransactionsApi {
  transactions: Transaction[];
}

const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const buscarDados = async () => {
    const dados = await api.get<TransactionsApi>("/transactions");
    setTransactions(dados.data.transactions);
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
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionsTableContainer>
  );
};

export default TransactionsTable;
