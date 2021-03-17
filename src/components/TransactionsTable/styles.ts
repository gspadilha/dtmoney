import styled from "styled-components";

interface TransactionsTableValueProps {
  status?: string;
}

export const TransactionsTableContainer = styled.main<TransactionsTableValueProps>`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    thead {
      th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }
    }

    tbody {
      td {
        color: var(--text-body);
        background: var(--shape);
        padding: 1rem 2rem;
        border: 0;
        border-radius: 0.25rem;

        &:first-of-type {
          color: var(--text-title);
        }

        &.deposit {
          color: var(--green);
          text-align: right;
        }

        &.withdraw {
          color: var(--red);
          text-align: right;
        }
      }
    }
  }
`;
