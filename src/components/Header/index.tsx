import React from "react";

import logoImage from "../../assets/logo.svg";

import { HeaderContainer, HeaderContent, HeaderButton } from "./styles";

interface HeaderProps {
  onClickOpenNewTransacationModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClickOpenNewTransacationModal }) => {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImage} alt="DT Money" />
          <HeaderButton type="button" onClick={onClickOpenNewTransacationModal}>
            Nova Transação
          </HeaderButton>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};

export default Header;
