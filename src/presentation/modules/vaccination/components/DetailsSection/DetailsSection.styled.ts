'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.9rem;
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

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`

export const Title = styled.h1`
  color: ${theme.colors.blue800};
  font-weight: 700;
  font-size: 2.4rem;
`

export const Text = styled.p`
  color: ${theme.colors.black500};
  font-size: 1.6rem;
  line-height: 150%;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const SubTitle = styled.h2`
  color: ${theme.colors.blue800};
  font-weight: 600;
  font-size: 1.8rem;
`
