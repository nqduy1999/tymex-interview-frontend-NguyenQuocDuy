import { Button, Empty, List, Skeleton, Typography } from 'antd'
import CardProductItem from './components/CardProductItem'
import { IProduct } from '@client/interfaces'
import { useScreenMode, useURLParams } from '@client/hooks'

const ProductList = ({
  products,
  loading,
  onLoadmore,
}: {
  products: IProduct[]
  loading?: boolean
  onLoadmore: (perPage: number) => void
}) => {
  const { isMobile } = useScreenMode()
  const loadMore = !loading ? (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button
        data-testid="load-more-btn"
        onClick={() => onLoadmore(10)}
        type="primary"
        size="large"
        loading={loading}
        style={{
          minWidth: isMobile ? 80 : 200,
          minHeight: isMobile ? 48 : 70,
          fontSize: 16,
        }}
      >
        View more
      </Button>
    </div>
  ) : null
  return (
    <List
      style={{
        marginTop: isMobile ? 12 : 28,
      }}
      grid={{
        xs: 2,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 4,
        gutter: isMobile ? [12, 12] : [40, 24],
      }}
      dataSource={products}
      loading={loading}
      renderItem={(product, index) => (
        <List.Item>
          <CardProductItem index={index} {...product} />
        </List.Item>
      )}
      loadMore={loadMore}
      locale={{
        emptyText: (
          <Empty
            description={
              <Typography.Title data-testid="no-data-products" level={5}>
                No data products
              </Typography.Title>
            }
          />
        ),
      }}
    />
  )
}

export default ProductList
