import { Image, Select as SelectAnt, SelectProps, Typography } from 'antd'
import sliderModule from './Select.module.scss'
import { IMAGES_CONST } from '@client/configs'
import { ReactNode } from 'react'
const { Title } = Typography

export interface SelectCustomProps extends SelectProps {
  label?: string
  children?: ReactNode
}

const Select = ({ label, children, ...props }: SelectCustomProps) => {
  return (
    <div className={sliderModule.select_container} data-testid={props.id}>
      {label && (
        <Title className={sliderModule.select_container_title} level={5}>
          {label}
        </Title>
      )}
      <SelectAnt
        suffixIcon={
          <Image
            src={IMAGES_CONST.icons.chevronDown}
            width={24}
            preview={false}
          />
        }
        style={{
          height: 44,
        }}
        {...props}
      >
        {children}
      </SelectAnt>
    </div>
  )
}

Select.Option = SelectAnt.Option
Select.OptionGroup = SelectAnt.OptGroup
export default Select
