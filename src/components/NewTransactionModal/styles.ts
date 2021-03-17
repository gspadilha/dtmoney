import styled from "styled-components";
import { darken, transparentize } from "polished";

export const NewTransactionModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    height: 4rem;

    padding: 0 1.5rem;

    border-radius: 0.25rem;
    border: 1px solid var(--input-border-color);

    background: var(--input-background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    height: 4rem;

    padding: 0 1.5rem;
    margin-top: 1.5rem;

    border-radius: 0.25rem;
    border: 0;

    background: var(--green);
    color: var(--shape);

    font-weight: 600;
    font-size: 1rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ModalButtonClose = styled.button`
  position: absolute;

  right: 1.5rem;
  top: 1.5rem;

  border: 0;
  background: transparent;

  font-size: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
`;

interface RadioButtonBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  red: "#e52e4d",
  green: "#33cc95",
};

export const RadioButtonBox = styled.button<RadioButtonBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;

  border-radius: 0.25rem;
  border: 1px solid var(--input-border-color);

  background: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : "transparent"};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 24px;
    height: 24px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
