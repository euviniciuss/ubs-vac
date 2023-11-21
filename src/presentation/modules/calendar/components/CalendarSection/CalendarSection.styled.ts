'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 4.3rem;
`

export const Banner = styled.div`
  width: 100%;
  background-color: ${theme.colors.blue700};
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 3.2rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${theme.colors.white};

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }

  p {
    font-size: 1.4rem;
  }
`
