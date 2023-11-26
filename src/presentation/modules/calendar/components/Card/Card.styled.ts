'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 9.8rem;
  display: flex;
  margin-top: 1.2rem;
`

export const DateSection = styled.div`
  background-color: ${theme.colors.blue700};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.white};
  padding: 1.6rem 2.9rem;
  border-radius: 1rem 0rem 0rem 1rem;
  gap: 0.5rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
  }

  p {
    font-size: 1.4rem;
    font-weight: 700;
  }
`

export const Information = styled.div`
  width: 100%;
  background-color: rgba(52, 100, 207, 0.08);
  padding: 2.3rem 2rem;
  border-radius: 0rem 1rem 1rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;

  h2 {
    color: ${theme.colors.blue800};
    font-size: 1.8rem;
    font-weight: 600;
  }

  p {
    font-size: 1.4rem;
    color: ${theme.colors.black500};
    opacity: 0.8;
  }
`
