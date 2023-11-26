import { render } from '@/tests/utils'

import { ScrollView } from './ScrollView'

describe('ScrollView Component', () => {
  it('should render correctly', () => {
    render(<ScrollView months={[]} />)
  })
})
