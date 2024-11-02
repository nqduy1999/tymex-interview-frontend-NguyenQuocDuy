import { render, screen, waitFor } from '@testing-library/react'
import LazyLoad from './LazyLoad'
import NProgress from 'nprogress'

// Mock NProgress functions
jest.mock('nprogress', () => ({
  start: jest.fn(),
  done: jest.fn(),
  configure: jest.fn(),
}))

describe('LazyLoad', () => {
  test('should render correctly', async () => {
    render(<LazyLoad />)
    expect(NProgress.start).toHaveBeenCalledTimes(1)
    await waitFor(() => {
      expect(NProgress.done).toHaveBeenCalledTimes(1)
    })
  })
})
