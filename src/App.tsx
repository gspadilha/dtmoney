import React, { useState } from "react";
import Modal from "react-modal";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  const handleOpenNewTransacationModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransacationModal = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <>
      <Header
        onClickOpenNewTransacationModal={handleOpenNewTransacationModal}
      />
      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransacationModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
};

export default App;
