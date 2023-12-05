'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  padding: 4rem;
`

export const Title = styled.p`
  font-size: 1.6rem;
  color: ${theme.colors.blue700};
  opacity: 0.7;
  text-align: center;
`
export const ScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 2rem 1.8rem;
  background-color: transparent;
  border: 1px solid #b9b9b9;
  border-radius: 6px;
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Field = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const Name = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  color: ${theme.colors.black500};
`

export const Content = styled.p`
  font-size: 1.6rem;
  color: ${theme.colors.black500};
  opacity: 0.8;
`

export const Button = styled.button`
  width: 12rem;
  background-color: ${theme.colors.blue700};
  color: ${theme.colors.white};
  font-weight: 600;
  border-radius: 0.6rem;
  border: none;
  outline: none;
  padding: 1.1rem 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`
