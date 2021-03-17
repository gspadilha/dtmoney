import React, { useContext, useState } from "react";
import Modal from "react-modal";

import closeImage from "../../assets/close.svg";
import incomeImage from "../../assets/income.svg";
import outcomeImage from "../../assets/outcome.svg";

import { TransactionsContext } from "../../contexts/Transactions";

import { IBasicChangeEvent, IBasicSubmitEvent } from "../../interfaces/general";

import {
  NewTransactionModalContainer,
  ModalButtonClose,
  TransactionTypeContainer,
  RadioButtonBox,
} from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Formulario {
  title: string;
  amount: number;
  type: string;
  category: string;
}

const formularioInicial: Formulario = {
  title: "",
  amount: 0,
  type: "deposit",
  category: "",
};

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { criarTransacao } = useContext(TransactionsContext);

  const [form, setForm] = useState(formularioInicial);
  const [type, setType] = useState(formularioInicial.type);

  const handleSubmit = async (event: IBasicSubmitEvent) => {
    event.preventDefault();
    await criarTransacao(form);
    onRequestClose();
    setForm(formularioInicial);
  };

  const handleOnChange = (event: IBasicChangeEvent) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: name === "amount" ? Number(value) : value });
  };

  const handleOnChangeType = (value: string) => {
    setType(value);
    setForm({ ...form, type: value });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-default-overlay"
      className="react-modal-default-content"
    >
      <ModalButtonClose type="button" onClick={onRequestClose}>
        <img src={closeImage} alt="Fechar Modal" />
      </ModalButtonClose>

      <NewTransactionModalContainer onSubmit={handleSubmit}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
          name="title"
          value={form.title}
          onChange={handleOnChange}
        />

        <input
          placeholder="Valor"
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleOnChange}
        />

        <TransactionTypeContainer>
          <RadioButtonBox
            type="button"
            onClick={() => handleOnChangeType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImage} alt="Entrada" />
            <span>Entrada</span>
          </RadioButtonBox>

          <RadioButtonBox
            type="button"
            onClick={() => handleOnChangeType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImage} alt="Saída" />
            <span>Saída</span>
          </RadioButtonBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          name="category"
          value={form.category}
          onChange={handleOnChange}
        />

        <button type="submit">Cadastrar</button>
      </NewTransactionModalContainer>
    </Modal>
  );
};

export default NewTransactionModal;
