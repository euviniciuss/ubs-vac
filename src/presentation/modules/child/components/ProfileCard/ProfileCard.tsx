import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

import Boy from '@/public/boy.svg'
import Girl from '@/public/girl.svg'

import * as S from './ProfileCard.styled'

type Props = {
  gender: 'male' | 'female'
  slug: string
  children: ReactNode
}

export function ProfileCard({ gender, slug, children }: Props) {
  return (
    <Link href={`crianca/${slug}`}>
      <S.Container>
        {gender === 'male' && <Image src={Boy} alt="Boy icon" />}

        {gender === 'female' && <Image src={Girl} alt="Girl icon" />}

        {children}
      </S.Container>
    </Link>
  )
}

ProfileCard.Name = S.Name
