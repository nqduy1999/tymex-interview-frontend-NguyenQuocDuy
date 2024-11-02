import { act, render, screen, waitFor } from '@testing-library/react'
import HomePage from './Home.Page'
import userEvent from '@testing-library/user-event'
import { routeString } from '@client/routes/routeString'
import { useNavigate } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest
    .fn()
    .mockReturnValue(jest.fn().mockReturnValue('/new-route')),
}))

describe('HomePage', () => {
  test('should render correctly', () => {
    render(<HomePage />)
    expect(screen.getByTestId('welcome-test')).toBeTruthy()
  })
})
