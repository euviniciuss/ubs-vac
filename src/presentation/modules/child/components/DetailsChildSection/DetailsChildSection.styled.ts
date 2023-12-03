'use client'

import { theme } from '@/presentation/external/styled'

import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-top: 4.2rem;
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
`

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
