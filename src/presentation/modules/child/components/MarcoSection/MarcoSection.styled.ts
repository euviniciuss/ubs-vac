'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  margin-top: 4.2rem;
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
  padding-bottom: 4rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  h1 {
    color: ${theme.colors.blue700};
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.black500};
  }
`

export const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 1.8rem;
  color: ${theme.colors.blue700};
  font-weight: 600;
  margin-bottom: 1.4rem;
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & + div {
    margin-top: 1.8rem;
  }

  input {
    width: 2.8rem;
    height: 2.8rem;
    border-color: ${theme.colors.blue700};
    border-radius: 12px;
  }

  p {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.black500};
  }
`

export const Divider = styled.span`
  width: 100%;
  border: 0.5px solid #d9d9d9;
  margin-top: 2.8rem;
`
