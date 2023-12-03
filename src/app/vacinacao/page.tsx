import { VaccinationSection } from '@/presentation/modules/vaccination/components/VaccinationSection/VaccinationSection'
import { Page } from '@/presentation/shared/components/layout'

export default function Vacinacao() {
  return (
    <>
      <Page.Header>
        <Page.Header.Title>Vacinação</Page.Header.Title>
      </Page.Header>
      <Page.Main>
        <VaccinationSection />
      </Page.Main>
    </>
  )
}
