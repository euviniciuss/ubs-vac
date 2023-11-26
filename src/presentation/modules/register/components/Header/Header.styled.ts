'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 0rem;
`
export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.7rem;
  margin-bottom: 2.9rem;
`
export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${theme.colors.blue800};
`
export const Description = styled.p`
  font-size: 1.6rem;
  color: ${theme.colors.blue800};
  opacity: 0.7;
`
export const Divider = styled.span`
  background-color: red;
  border: 0.5px solid #d9d9d9;
`
