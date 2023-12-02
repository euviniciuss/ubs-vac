'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-bottom: 5.6rem;
`

export const Title = styled.h3`
  color: ${theme.colors.blue700};
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2.1rem;
`
