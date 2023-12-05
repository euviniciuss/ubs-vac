'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: transparent;
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  border: 2px solid ${theme.colors.blue700};
  border-radius: 1rem;

  input {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 1.4rem;
    color: ${theme.colors.black500};
    font-weight: 500;

    &::placeholder {
      color: ${theme.colors.black500};
      opacity: 0.5;
    }
  }
`
