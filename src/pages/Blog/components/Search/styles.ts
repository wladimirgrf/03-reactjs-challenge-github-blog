import styled from 'styled-components'

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.125rem;
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }

  input {
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['base-border']};
    color: ${({ theme }) => theme['base-text']};
    background: ${({ theme }) => theme['base-input']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`
