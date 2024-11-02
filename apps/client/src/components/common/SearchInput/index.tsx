import { IMAGES_CONST } from '@client/configs'
import { Image, Input, InputProps } from 'antd'

interface SearchInputProps extends InputProps {
  label?: string
}

const SearchInput = (props: SearchInputProps) => {
  return (
    <Input
      addonBefore={
        <Image
          data-testid="search"
          preview={false}
          src={IMAGES_CONST.icons.search}
          width={24}
        />
      }
      styles={{
        input: {
          borderLeft: 0,
          paddingLeft: 0,
          outline: 0,
        },
      }}
      {...props}
    />
  )
}

export default SearchInput
