'use client'

import { CalendarSection } from '@/presentation/modules/calendar/components/CalendarSection/CalendarSection'
import { Page } from '@/presentation/shared/components/layout'

export default function Calendario() {
  return (
    <>
      <Page.Header>
        <Page.Header.Title>Calendário Vacinal</Page.Header.Title>
      </Page.Header>
      <Page.Main>
        <CalendarSection />
      </Page.Main>
    </>
  )
}
