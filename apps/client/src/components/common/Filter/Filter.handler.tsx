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
  const {
    fields,
    isLoading,
    onSubmitSearch,
    onClearAll,
    setFilter,
    filter,
    executeSearch,
  } = useFilterContext()

  const renderFieldByType = useCallback(
    (field: FieldsType) => {
      switch (field.type) {
        case 'search':
          return (
            <SearchInput
              {...(field as SearchType)}
              value={filter[field.name]}
              allowClear={true}
              onChange={e => {
                setFilter({
                  ...filter,
                  [field.name]: e.target.value,
                })
              }}
              onClear={() => {
                executeSearch(filter)
              }}
            />
          )
        case 'slider':
          return (
            <Slider
              {...(field as SliderType)}
              onChange={value =>
                setFilter({
                  ...filter,
                  [field.startName]: (value as Number[])?.[0],
                  [field.endName]: (value as Number[])?.[1],
                })
              }
            />
          )
        case 'select':
          return (
            <Select
              {...(field as SelectType)}
              value={filter[field.name]}
              onChange={value => {
                setFilter({
                  ...filter,
                  [field.name]: value,
                })
              }}
              onClear={() => {
                executeSearch(filter)
              }}
            />
          )
      }
    },
    [filter],
  )

  const onResetFilter = () => {
    onClearAll()
  }

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
          onClick={onResetFilter}
        >
          Reset field
        </Button>
        <Button
          type="primary"
          className={filterModule.filter_container_action_submit}
          onClick={onSubmitSearch}
          disabled={isLoading}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default FilterHandler
