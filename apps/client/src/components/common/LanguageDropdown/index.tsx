import { Image } from 'antd'

import languageDropdown from './LanguageDropdown.module.scss'
import { IMAGES_CONST } from '@client/configs'
import Select from '../Select'

const LanguageDropdown = () => {
  return (
    <Select
      className={languageDropdown.language_container}
      variant="borderless"
      defaultValue="globe"
    >
      <Select.Option value="globe">
        <Image
          src={IMAGES_CONST.icons.globe}
          alt={IMAGES_CONST.icons.globe.toString()}
          width={24}
          preview={false}
        />
      </Select.Option>
    </Select>
  )
}

export default LanguageDropdown
