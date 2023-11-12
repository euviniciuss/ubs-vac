import { render } from '@/tests/utils'

import { Page } from './Page'

describe('Page Component', () => {
  it('should render correctly', () => {
    render(
      <Page>
        <h1>teste</h1>
      </Page>
    )
  })
})
