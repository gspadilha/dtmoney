import styled from "styled-components";

export const HeaderContainer = styled.header`
  z-index: 1;
  background: var(--blue);
`;

export const HeaderContent = styled.div`
  max-width: 1122px;

  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButton = styled.button`
  font-size: 1rem;
  color: var(--shape);
  background: var(--blue-light);
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
