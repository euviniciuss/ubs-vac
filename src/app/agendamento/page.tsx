'use client'

import { SchedulingSection } from '@/presentation/modules/scheduling/components/SchedulingSection/SchedulingSection'
import { Page } from '@/presentation/shared/components/layout'

export default function Agendamento() {
  return (
    <>
      <Page.Header>
        <Page.Header.Title>Agendar Vacinação</Page.Header.Title>
      </Page.Header>
      <Page.Main>
        <SchedulingSection />
      </Page.Main>
    </>
  )
}
