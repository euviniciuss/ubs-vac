import { render } from '@/tests/utils'

import { Button } from './Button'

describe('Button Component', () => {
  it('should render correctly', () => {
    render(
      <Button>
        <p>teste</p>
      </Button>
    )
  })
})
