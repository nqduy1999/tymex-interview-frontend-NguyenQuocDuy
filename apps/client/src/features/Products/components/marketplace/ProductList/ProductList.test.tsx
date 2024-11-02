import { act, render, screen } from '@testing-library/react'
import ProductList from '.'
import userEvent from '@testing-library/user-event'

describe('Product list', () => {
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
    const MOCK_PROPS = {
      products: [],
      onLoadmore: jest.fn(),
    }

    render(<ProductList {...MOCK_PROPS} />)
    expect(screen.getByTestId('no-data-products')).toBeTruthy()
  })

  test('should click button correctly', async () => {
    const MOCK_PROPS = {
      products: [],
      onLoadmore: jest.fn(),
    }
    render(<ProductList {...MOCK_PROPS} />)
    const button = screen.getByTestId('load-more-btn')
    await act(async () => {
      await userEvent.click(button)
    })
    expect(MOCK_PROPS.onLoadmore).toHaveBeenCalledTimes(1)
  })
})
