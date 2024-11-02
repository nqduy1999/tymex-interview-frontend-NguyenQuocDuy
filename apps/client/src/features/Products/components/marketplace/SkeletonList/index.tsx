import { useScreenMode } from '@client/hooks'
import { Empty, List, Skeleton, Typography } from 'antd'

const SkeletonList = ({ loading }: { loading: boolean }) => {
  const { isExtraDesktop } = useScreenMode()
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
      dataSource={[{}, {}, {}, {}, {}, {}, {}, {}]}
      renderItem={() => (
        <List.Item>
          <Skeleton active={true} loading={loading}></Skeleton>
        </List.Item>
      )}
      locale={{
        emptyText: (
          <Empty
            description={
              <Typography.Title level={5}>No data products</Typography.Title>
            }
          />
        ),
      }}
    />
  )
}

export default SkeletonList
