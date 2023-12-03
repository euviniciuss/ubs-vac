import { render } from '@/tests/utils'

import { Card } from './Card'

describe('Card Component', () => {
  it('should render correctly', () => {
    render(
      <Card slug="teste">
        <Card.Title>teste</Card.Title>
      </Card>
    )
  })
})
