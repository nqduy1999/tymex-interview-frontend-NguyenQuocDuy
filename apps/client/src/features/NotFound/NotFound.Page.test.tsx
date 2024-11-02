import { render, screen } from '@testing-library/react'
import { useNavigate } from 'react-router-dom'
import NotFoundPage from './NotFound.Page'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest
    .fn()
    .mockReturnValue(jest.fn().mockReturnValue('/new-route')),
}))

describe('Notfound page', () => {
  test('should render correctly', () => {
    render(<NotFoundPage />)
    expect(screen.getByText('Back Home')).toBeTruthy()
  })
})
