import { Image, Select } from 'antd'

import languageDropdown from './LanguageDropdown.module.scss'
import { IMAGES_CONST } from '@client/configs'

const LanguageDropdown = () => {
  return (
    <Select
      className={languageDropdown.language_container}
      variant="borderless"
      suffixIcon={
        <Image
          src={IMAGES_CONST.icons.chevronDown}
          width={24}
          preview={false}
        />
      }
      defaultValue="globe"
    >
      <Select.Option value="globe">
        <Image
          src={IMAGES_CONST.icons.globe}
          alt={IMAGES_CONST.icons.globe.toString()}
          width={24}
        />
      </Select.Option>
    </Select>
  )
}

export default LanguageDropdown
