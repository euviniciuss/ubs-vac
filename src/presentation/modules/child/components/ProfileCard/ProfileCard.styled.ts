'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: ${theme.colors.blue50};
  border-radius: 1rem;
  padding: 1.2rem 2.8rem;

  display: flex;
  align-items: center;
  gap: 3rem;
`

export const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${theme.colors.blue800};
`
