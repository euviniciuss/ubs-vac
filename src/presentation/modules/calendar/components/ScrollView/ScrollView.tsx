import * as S from './ScrollView.styled'

type Props = {
  months: Array<string>
}

export function ScrollView({ months }: Props) {
  return (
    <S.Container>
      {months.map((month, index) => (
        <strong key={index}>{month}</strong>
      ))}
    </S.Container>
  )
}
