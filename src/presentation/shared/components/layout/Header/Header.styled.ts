'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.blue700};
`

export const Content = styled.div`
  width: 100%;
  height: 11rem;
  padding: 2.7rem 5.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const NavigationContainer = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.white};
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
`
