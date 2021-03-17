import React, { useState } from "react";
import Modal from "react-modal";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import NewTransactionModal from "./components/NewTransactionModal";

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

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransacationModal}
      />

      <GlobalStyle />
    </>
  );
};

export default App;
