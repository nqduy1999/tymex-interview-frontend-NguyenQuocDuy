import { Fragment, useCallback } from 'react'
import {
  FieldsType,
  SearchType,
  SelectType,
  SliderType,
} from '@client/components/common/Filter/type'
import filterModule from './Filter.module.scss'
import { useFilterContext } from './Filter.context'
import { Button, Col, Image, Row } from 'antd'
import { SearchInput, Slider, Select } from '@client/components/common'
import { IMAGES_CONST } from '@client/configs'
import { useScreenMode } from '@client/hooks'
import ModalFilter from './ModalFilter'

const FilterHandler = () => {
  const {
    fields,
    isLoading,
    onSubmitSearch,
    onClearAll,
    setFilter,
    filter,
    executeSearch,
    isSupportMobile,
  } = useFilterContext()

  const { isLargeDesktop } = useScreenMode()
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

  const renderAction = ({
    callbackSubmit,
    callbackReset,
  }: {
    callbackSubmit?: () => void
    callbackReset?: () => void
  }) => {
    return (
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
          onClick={() => {
            onResetFilter()
            callbackReset && callbackReset()
          }}
        >
          Reset field
        </Button>
        <Button
          type="primary"
          className={filterModule.filter_container_action_submit}
          onClick={() => {
            onSubmitSearch()
            callbackSubmit && callbackSubmit()
          }}
          disabled={isLoading}
        >
          Submit
        </Button>
      </div>
    )
  }
  return isLargeDesktop ? (
    <div className={filterModule.filter_container}>
      {fields.map((field, index) => (
        <Fragment key={`fields-${index}`}>{renderFieldByType(field)}</Fragment>
      ))}
      {renderAction({})}
    </div>
  ) : isSupportMobile ? (
    <ModalFilter>
      {({ callbackSubmit }: { callbackSubmit: () => void }) => (
        <Row gutter={[12, 12]}>
          {fields.map((field, index) => (
            <Col span={12}>
              <Fragment key={`fields-${index}`}>
                {renderFieldByType(field)}
              </Fragment>
            </Col>
          ))}
          {renderAction({ callbackSubmit, callbackReset: callbackSubmit })}
        </Row>
      )}
    </ModalFilter>
  ) : null
}

export default FilterHandler
