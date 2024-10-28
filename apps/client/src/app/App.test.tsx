import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import WrappedApp from './App'

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<WrappedApp />)
    // ACT
    // EXPECT
  })
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        {/* <App /> */}
      </MemoryRouter>
    )
  })
})
