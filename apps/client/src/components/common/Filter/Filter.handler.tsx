import { Fragment, useCallback } from 'react'
import {
  FieldsType,
  SearchType,
  SelectType,
  SliderType,
} from '@client/components/common/Filter/type'
import filterModule from './Filter.module.scss'
import { useFilterContext } from './Filter.context'
import { Button, Image } from 'antd'
import { SearchInput, Slider, Select } from '@client/components/common'
import { IMAGES_CONST } from '@client/configs'

const FilterHandler = () => {
  const { path, fields, isLoading, onSubmitSearch, onClearAll } =
    useFilterContext()

  const renderFieldByType = useCallback((field: FieldsType) => {
    switch (field.type) {
      case 'search':
        return <SearchInput {...(field as SearchType)} />
      case 'slider':
        return <Slider {...(field as SliderType)} />
      case 'select':
        return <Select {...(field as SelectType)} />
    }
  }, [])

  return (
    <div className={filterModule.filter_container}>
      {fields.map((field, index) => (
        <Fragment key={`fields-${index}`}>{renderFieldByType(field)}</Fragment>
      ))}
      <div className={filterModule.filter_container_action}>
        <Button
          className={filterModule.filter_container_action_reset}
          icon={
            <Image
              src={IMAGES_CONST.icons.resetFilter}
              alt={IMAGES_CONST.icons.resetFilter}
              preview={false}
            />
          }
          variant="outlined"
        >
          Reset field
        </Button>
        <Button
          type="primary"
          className={filterModule.filter_container_action_submit}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default FilterHandler
