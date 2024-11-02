import { act, render, renderHook, screen } from '@testing-library/react'
import MarketplacePage from './Marketplace.Page'
import { useFetchProducts } from '../hooks'
import { ProductService } from '@client/services'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    hash: '',
    state: null,
    pathname: '/marketplace',
    search: '',
    key: '1212313',
  }),
  useNavigate: jest.fn(),
}))

describe('Marketplace page', () => {
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
  test('should render empty list', async () => {
    ProductService.getProducts = jest.fn().mockReturnValueOnce([])

    const { result } = renderHook(() => useFetchProducts())

    await act(async () => {
      result.current.loading = false
    })
    render(<MarketplacePage />)
    expect(screen.getByTestId('marketplace-page')).toBeTruthy()
  })
})
