import { css } from "styled-components";

export const ModalStyle = css`
  .react-modal-default-overlay {
    position: fixed;

    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-default-content {
    width: 100%;
    max-width: 567px;

    background-color: var(--background);

    padding: 3rem;

    position: relative;
    border-radius: 0.25rem;

    outline: none;
  }
`;
