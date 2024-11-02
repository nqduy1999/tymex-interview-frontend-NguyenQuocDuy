import { act, render, screen, waitFor } from '@testing-library/react'
import Header from '.'
import Footer from '.'
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

describe('Footer', () => {
  beforeAll(() => {
    window.matchMedia = query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })
  })
  test('should render correctly', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    )
    expect(screen.getByTestId('footer-testid')).toBeTruthy()
  })
})
