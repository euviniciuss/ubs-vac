'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

type Props = {
  size: string
  color: string
  textColor: string
}

export const Container = styled.button<Props>`
  width: ${props => props.size === 'small' && 'auto'};
  width: ${props => props.size === 'medium' && '100%'};

  height: 5.6rem;

  padding: ${props => props.size === 'small' && '0.8rem 1.6rem'};
  padding: ${props => props.size === 'medium' && '0.8rem'};

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: ${props => props.textColor === 'white' && `${theme.colors.white}`};
  color: ${props => props.textColor === 'blue' && `${theme.colors.blue700}`};
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px;
  border-style: solid;
  border-color: red;
  gap: 0.7rem;

  border-color: ${props =>
    props.color === 'primary' && `${theme.colors.blue700}`};
  background-color: ${props =>
    props.color === 'primary' && `${theme.colors.blue700}`};

  border-color: ${props =>
    props.color === 'secondary' && `${theme.colors.white}`};
  background-color: ${props => props.color === 'secondary' && 'transparent'};

  border-color: ${props =>
    props.textColor === 'blue' && `${theme.colors.blue700}`};
`
