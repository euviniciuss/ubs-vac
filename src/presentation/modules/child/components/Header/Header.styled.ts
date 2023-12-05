'use client'

import { styled } from 'styled-components'

export const Container = styled.header`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 11rem;
  padding: 2.7rem 5.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 5;
  position: absolute;
  top: 5rem;
`

export const Title = styled.h1``

export const Description = styled.p``
