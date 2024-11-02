import { render, screen } from '@testing-library/react'
import Container from '.'

const ChildComponent = () => <p id="children-mock">Child component content</p>

describe('Container', () => {
  test('should render correctly', () => {
    render(
      <Container>
        <ChildComponent />
      </Container>,
    )
    expect(screen.getByText('Child component content')).toBeTruthy()
  })
})
