'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 5.6rem;
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${theme.colors.blue700};
`

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`
