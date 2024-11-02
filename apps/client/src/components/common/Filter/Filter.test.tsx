import { render, screen } from '@testing-library/react'
import Container from '.'
import { Filter } from '..'
import { FieldsType } from './type'
import { routeString } from '@client/routes/routeString'
import { useNavigate } from 'react-router-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn().mockReturnValue({
    hash: '',
    state: null,
    pathname: '/test-route',
    search: '',
    key: '1212313',
  }),
  useNavigate: jest.fn().mockReturnValue(() => jest.fn()),
}))

describe('Filter', () => {
  test('should render correctly', () => {
    const MOCK_FIELDS: FieldsType[] = [
      {
        type: 'select',
        name: 'select-mock',
        label: 'Search mock test',
        options: [],
        id: 'select-mock',
      },
    ]
    const path = routeString.HOME

    render(<Filter isSupportMobile={true} path={path} fields={MOCK_FIELDS} />)
    expect(screen.getByText('Filter List')).toBeTruthy
  })
})
