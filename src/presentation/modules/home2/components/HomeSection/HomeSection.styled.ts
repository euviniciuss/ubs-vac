'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PresenationContainer = styled.div`
  img {
    width: 100vw;
    height: auto;
    object-fit: cover;
  }
`

export const TextContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  position: absolute;
  top: 47px;
  left: 29px;

  h1 {
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 3.2rem;
  }

  p {
    font-size: 1.6rem;
    max-width: 30rem;
    color: ${theme.colors.white};
  }
`

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
`
export const Action = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  margin-top: 2.8rem;
`
