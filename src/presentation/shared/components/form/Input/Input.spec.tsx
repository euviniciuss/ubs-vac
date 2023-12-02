import { render } from '@/tests/utils'

import { Input } from './Input'

describe('Input Component', () => {
  it('should render correctly', () => {
    render(<Input type="text" placeholder="teste" label="teste" />)
  })
})
