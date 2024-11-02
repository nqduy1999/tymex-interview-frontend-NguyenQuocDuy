import { render, screen } from '@testing-library/react'
import LanguageDropdown from '.'

describe('LanguageDropdown', () => {
  test('should render correctly', () => {
    render(<LanguageDropdown />)
    expect(screen.getByTestId('globe')).toBeTruthy()
  })
})
