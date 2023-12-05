import { PiMapPinFill } from 'react-icons/pi'

import { Search } from '@/presentation/shared/components/form'

import * as S from './SchedulingSection.styled'

export function SchedulingSection() {
  const schedule = [
    {
      type: 'Vacina A',
      date: '01/10/2023',
      hour: '10:00',
      location: 'Rua do Passeio - Centro'
    },
    {
      type: 'Vacina A',
      date: '01/10/2023',
      hour: '10:00',
      location: 'Rua do Passeio - Centro'
    },
    {
      type: 'Vacina B',
      date: '01/10/2023',
      hour: '10:00',
      location: 'Rua do Passeio - Centro'
    },
    {
      type: 'Vacina C',
      date: '01/10/2023',
      hour: '10:00',
      location: 'Rua do Passeio - Centro'
    },
    {
      type: 'Vacina D',
      date: '01/10/2023',
      hour: '10:00',
      location: 'Rua do Passeio - Centro'
    }
  ]

  return (
    <S.Container>
      <S.Title>
        Lorem ipsum dolor sit amet consectetur. Viverra nibh a dolor sit gravida
        aliquet.
      </S.Title>

      <Search />

      <S.ScheduleContainer>
        {schedule.map((item, index) => (
          <S.Card key={index}>
            <S.Infos>
              <S.Field>
                <S.Name>Tipo da vacina: </S.Name>
                <S.Content>{item.type}</S.Content>
              </S.Field>

              <S.Field>
                <S.Name>Data: </S.Name>
                <S.Content>{item.date}</S.Content>
              </S.Field>

              <S.Field>
                <S.Name>Hora: </S.Name>
                <S.Content>{item.hour}</S.Content>
              </S.Field>

              <S.Field>
                <S.Name>
                  <PiMapPinFill size={18} color="#1040AB" />
                </S.Name>
                <S.Content>{item.location}</S.Content>
              </S.Field>
            </S.Infos>

            <S.Button>MARCAR</S.Button>
          </S.Card>
        ))}
      </S.ScheduleContainer>
    </S.Container>
  )
}
