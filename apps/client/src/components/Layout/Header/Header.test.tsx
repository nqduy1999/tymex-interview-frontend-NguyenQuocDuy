import { act, render, screen, waitFor } from '@testing-library/react'
import Header from '.'
import { BrowserRouter } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    hash: '',
    state: null,
    pathname: '/test-route',
    search: '',
    key: '1212313',
  }),
  useNavigate: jest.fn(),
}))

describe('Header', () => {
  test('should render correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
  })
})
