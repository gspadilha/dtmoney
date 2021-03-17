import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsApi {
  transactions: Transaction[];
}

interface TransactionsContextProviderProps {
  children: ReactNode;
}

interface TransactionsContextProviderData {
  transactions: Transaction[];
  criarTransacao: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextProviderData>(
  {} as TransactionsContextProviderData
);

export const TransactionsContextProvider: React.FC<TransactionsContextProviderProps> = ({
  children,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const criarTransacao = async (transactionInput: TransactionInput) => {
    const response = await api.post("/transactions", transactionInput);
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  };

  const buscarTransacao = async () => {
    const dados = await api.get<TransactionsApi>("/transactions");
    setTransactions(dados.data.transactions);
  };

  useEffect(() => {
    buscarTransacao();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, criarTransacao }}>
      {children}
    </TransactionsContext.Provider>
  );
};
