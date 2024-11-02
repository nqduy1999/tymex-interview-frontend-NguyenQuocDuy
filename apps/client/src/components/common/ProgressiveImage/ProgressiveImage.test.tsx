import { render, screen, waitFor } from '@testing-library/react'
import ProgressiveImage from '.'

describe('ProgressiveImage', () => {
  test('should render correctly', async () => {
    const TEST_ID = '1230imge'
    render(<ProgressiveImage {...{ ['data-testid']: TEST_ID }} />)
    expect(screen.getByTestId(TEST_ID)).toBeTruthy()
  })
})
