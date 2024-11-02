import { render, screen } from '@testing-library/react'
import Slider from '.'

describe('Slider', () => {
  test('should render correctly', () => {
    const MOCK_PROPS = {
      label: 'Select test label',
      max: 300,
    }
    render(<Slider {...MOCK_PROPS} />)
    expect(screen.getByText('Select test label')).toBeTruthy()
  })
})
