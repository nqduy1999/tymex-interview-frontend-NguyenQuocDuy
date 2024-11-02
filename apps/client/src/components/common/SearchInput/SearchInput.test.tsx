import { render, screen } from '@testing-library/react'
import SearchInput from '.'

describe('SearchInput', () => {
  test('should render correctly', () => {
    const MOCK_PROPS = {
      placeholder: 'MOCK PLACEHOLDER',
    }
    render(<SearchInput {...MOCK_PROPS} />)
    expect(screen.getByTestId('search')).toBeTruthy()
    expect(screen.getByPlaceholderText(MOCK_PROPS.placeholder))
  })
})
