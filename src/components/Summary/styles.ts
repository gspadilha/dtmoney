import styled, { css } from "styled-components";

interface SummaryInfoProps {
  status?: string;
}

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -10rem;
`;

export const SummaryInfo = styled.div<SummaryInfoProps>`
  background-color: ${({ status }) =>
    !status ? css`var(--shape)` : css`var(--${status})`};
  color: ${({ status }) =>
    !status ? css`var(--text-title)` : css`var(--shape)`};

  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;
