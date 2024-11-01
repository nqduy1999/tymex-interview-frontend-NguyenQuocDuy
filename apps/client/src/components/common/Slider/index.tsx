import { Slider as SliderAnt, Typography } from 'antd'
import sliderModule from './Slider.module.scss'
import { SliderProps } from './type'

const { Title } = Typography

const Slider = ({ label, ...props }: SliderProps) => {
  return (
    <div className={sliderModule.slider_container}>
      {label && (
        <Title className={sliderModule.slider_container_title} level={5}>
          {label}
        </Title>
      )}
      <SliderAnt
        defaultValue={[0, 10]}
        range={{ draggableTrack: true }}
        tooltip={{
          placement: 'top',
        }}
        styles={{
          track: {
            background: 'transparent',
          },
          tracks: {
            background:
              'linear-gradient(91deg, rgba(218, 69, 143, 0.00) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0.00) 102.8%)',
          },
        }}
        {...props}
      />
    </div>
  )
}
export default Slider
