'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4.2rem;
  overflow-x: auto;
  white-space: nowrap;
  gap: 2rem;
  padding: 1rem 0;

  strong {
    color: ${theme.colors.black500};
    opacity: 0.5;
    font-size: 1.8rem;
  }
`
