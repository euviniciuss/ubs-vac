'use client'

import { theme } from '@/presentation/external/styled'
import Link from 'next/link'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 4.2rem;
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
  padding-bottom: 4rem;
`

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Profile = styled.div`
  width: 14rem;
  height: 14rem;
  background: ${theme.colors.blue50};
  border: 1px solid ${theme.colors.blue800};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: ${theme.colors.blue800};
  }
`
export const LinkContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  p {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.blue800};
    max-width: 14.6rem;
  }
`
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const InfoCard = styled.div`
  width: 100%;
  border: 1px solid ${theme.colors.blue700};
`

export const Header = styled.div`
  background-color: ${theme.colors.blue700};
  color: ${theme.colors.white};
  padding: 1.4rem 2rem;
  font-size: 1.15rem;
  font-weight: 600;
`

export const Infos = styled.div`
  padding: 1.4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.p`
  font-size: 1.6rem;
  color: ${theme.colors.black500};
  opacity: 0.7;
`

export const Value = styled.p`
  font-size: 1.6rem;
  color: ${theme.colors.black500};
`
export const Logout = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  p {
    font-size: 1.6rem;
    color: ${theme.colors.blue700};
  }
`
