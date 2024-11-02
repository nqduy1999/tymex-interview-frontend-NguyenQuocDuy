import { render, screen } from '@testing-library/react'
import Select from '.'

describe('Select', () => {
  test('should render correctly', () => {
    const MOCK_PROPS = {
      label: 'Select test label',
    }
    render(<Select {...MOCK_PROPS} />)
    expect(screen.getByText('Select test label')).toBeTruthy()
  })
})
