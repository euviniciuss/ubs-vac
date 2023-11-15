'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 17.5rem;
  height: 15.4rem;
  padding: 2.8rem 3.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  background: transparent;
  border: 1px solid ${theme.colors.blue700};
  border-radius: 1.2rem;
`

export const Title = styled.div`
  color: ${theme.colors.black500};
  font-weight: 600;
  font-size: 1.6rem;
  text-align: center;
  text-decoration: none;
`
