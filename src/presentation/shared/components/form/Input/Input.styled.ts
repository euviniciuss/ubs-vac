'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    color: ${theme.colors.black500};
    font-size: 1.6rem;
    font-weight: 500;
  }

  input {
    padding: 1.8rem;
    border-radius: 1rem;
    background: #e4e9f4;
    color: ${theme.colors.black500};
    outline: none;
    border: 1px solid #e4e9f4;
    transition: border 0.5s ease;

    &::placeholder {
      color: ${theme.colors.black500};
      opacity: 0.5;
    }

    &:focus {
      border-color: ${theme.colors.blue700};
    }

    &:hover {
      border-color: ${theme.colors.blue700};
    }
  }
`
