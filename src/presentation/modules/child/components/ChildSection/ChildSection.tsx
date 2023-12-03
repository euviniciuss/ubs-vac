import { ProfileCard } from '../ProfileCard/ProfileCard'
import * as S from './ChildSection.styled'

export function ChildSection() {
  return (
    <S.Container>
      <S.ProfileContainer>
        <ProfileCard slug="01" gender="male">
          <ProfileCard.Name>João Pedro Costa</ProfileCard.Name>
        </ProfileCard>

        <ProfileCard slug="02" gender="female">
          <ProfileCard.Name>Maria Fernanda Costa</ProfileCard.Name>
        </ProfileCard>
      </S.ProfileContainer>
    </S.Container>
  )
}
