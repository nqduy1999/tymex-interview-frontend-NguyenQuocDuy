import { Empty, List, Typography } from 'antd'
import CardProductItem from './components/CardProductItem'
import { IProduct } from '@client/interfaces'

const ProductList = ({ products }: { products: IProduct[] }) => {
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
      renderItem={(product, index) => (
        <List.Item>
          <CardProductItem index={index} {...product} />
        </List.Item>
      )}
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
