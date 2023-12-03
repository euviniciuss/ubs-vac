'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 2.9rem 2.5rem;
  background-color: ${theme.colors.blue50};
  border-radius: 2.5rem;
  display: flex;
  gap: 2.6rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.blue700};
`

export const Description = styled.p`
  font-size: 1.4rem;
  color: ${theme.colors.black};
`

export const More = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  color: ${theme.colors.blue700};
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 0.5rem;
`
