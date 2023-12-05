import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { PiArrowLeftBold } from 'react-icons/pi'

import * as S from './Header.styled'

type Props = {
  children: ReactNode
}

export function Header({ children }: Props) {
  const router = useRouter()

  function goBack() {
    router.back()
  }

  return (
    <S.Container>
      <S.NavigationContainer onClick={goBack}>
        <PiArrowLeftBold size={28} color="#1040AB" />
      </S.NavigationContainer>

      {children}

      <S.Divider />
    </S.Container>
  )
}
Header.TextContainer = S.TextContainer
Header.Title = S.Title
Header.Description = S.Description
