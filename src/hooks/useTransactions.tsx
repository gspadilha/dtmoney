import { useContext } from "react";
import { TransactionsContext } from "../contexts/Transactions";

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  return context;
};
