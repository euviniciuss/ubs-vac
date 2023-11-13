'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

type Props = {
  size: string
  color: string
}

export const Container = styled.button<Props>`
  width: ${props => props.size === 'medium' && '100%'};

  height: 5.6rem;
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: ${theme.colors.white};
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px;
  border-style: solid;
  border-color: red;

  border-color: ${props =>
    props.color === 'primary' && `${theme.colors.blue700}`};
  background-color: ${props =>
    props.color === 'primary' && `${theme.colors.blue700}`};

  border-color: ${props =>
    props.color === 'secondary' && `${theme.colors.white}`};
  background-color: ${props => props.color === 'secondary' && 'transparent'};
`
