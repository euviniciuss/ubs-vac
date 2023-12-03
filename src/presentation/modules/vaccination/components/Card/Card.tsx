'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import SeringaIcon from '@/public/seringa.svg'

import * as S from './Card.styled'

type Props = {
  slug: string
  children: ReactNode
}

export function Card({ slug, children }: Props) {
  return (
    <Link href={`/vacinacao/${slug}`}>
      <S.Container>
        <Image src={SeringaIcon} alt="Seringa" />

        <S.Info>
          {children}

          <S.More>Leia mais...</S.More>
        </S.Info>
      </S.Container>
    </Link>
  )
}

Card.Title = S.Title
Card.Description = S.Description
