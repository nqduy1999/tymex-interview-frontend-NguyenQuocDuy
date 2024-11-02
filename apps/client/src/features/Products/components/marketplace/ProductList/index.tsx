import { Button, Empty, List, Skeleton, Typography } from 'antd'
import CardProductItem from './components/CardProductItem'
import { IProduct } from '@client/interfaces'
import { useURLParams } from '@client/hooks'

const ProductList = ({
  products,
  loading,
  onLoadmore,
}: {
  products: IProduct[]
  loading?: boolean
  onLoadmore: (perPage: number) => void
}) => {
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
        onClick={() => onLoadmore(10)}
        type="primary"
        size="large"
        loading={loading}
        style={{
          minWidth: 200,
          minHeight: 70,
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
        marginTop: 28,
      }}
      grid={{
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 4,
        gutter: [40, 24],
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
            description={<Typography.Title level={5}>No data</Typography.Title>}
          />
        ),
      }}
    />
  )
}

export default ProductList
