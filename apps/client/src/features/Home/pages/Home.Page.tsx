import { Container } from '@client/components/common'
import homeModule from '@client/features/Home/styles/Home.Page.module.scss'
import { routeString } from '@client/routes/routeString'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const onMoveToMarketplace = () => {
    navigate(routeString.PRODUCT.root)
  }

  return (
    <Container>
      <Typography.Title level={5} data-testid="welcome-test">
        Welcome to homepage test assignment{' '}
        <Button
          data-testid="click-to-move-marketplace"
          id="click-to-move-marketplace"
          type="primary"
          size="middle"
          onClick={onMoveToMarketplace}
        >
          click here
        </Button>{' '}
        to move Marketplace
      </Typography.Title>
    </Container>
  )
}

export default HomePage
