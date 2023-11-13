'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.white800};
`

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Message = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.colors.blue800};
  gap: 0.6rem;
  padding-top: 9.8rem;

  h1 {
    font-size: 3.2rem;
    font-weight: bold;
  }

  p {
    font-size: 2rem;
  }
`

export const ActionContainer = styled.section`
  width: 100vw;
  height: 50%;
  background-color: ${theme.colors.blue700};
`

export const ActionContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 5.2rem;

  img {
    margin-top: -24rem;
  }
`

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;

  p {
    color: ${theme.colors.white};
    opacity: 0.8;
    font-size: 1.4rem;

    a {
      color: ${theme.colors.white};
      opacity: 0.8;
      font-size: 1.4rem;
      font-style: italic;
    }
  }
`
