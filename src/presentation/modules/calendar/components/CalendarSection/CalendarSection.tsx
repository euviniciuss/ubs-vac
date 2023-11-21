import Image from 'next/image'

import CalendarIllustration from '@/public/calendar-illustration.svg'

import * as S from './CalendarSection.styled'

export function CalendarSection() {
  return (
    <S.Container>
      <S.Banner>
        <S.TextContainer>
          <h1>Importante</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac aenean varius in nullam.
          </p>
        </S.TextContainer>

        <Image src={CalendarIllustration} alt="Calendar" width={134} />
      </S.Banner>
    </S.Container>
  )
}
