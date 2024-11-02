import { ThemeConfig, theme } from 'antd'
const { defaultAlgorithm } = theme

export const themeConfig: ThemeConfig = {
  algorithm: defaultAlgorithm, // Use default or darkAlgorithm for dark theme
  token: {
    colorTextHeading: 'white',
    colorText: 'white',
    colorSuccess: 'white',
  },
  cssVar: true,
  hashed: false,
  components: {
    Button: {
      boxShadow: '0px 0px 50px 0px rgba(187, 75, 255, 0.32)',
      padding: 11,
      colorPrimary: 'linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)',
      colorPrimaryHover: 'linear-gradient(91deg, #DA458F -6%, #DA34DD 113.05%)',
      borderRadius: 4,
      borderRadiusLG: 4,
      fontSize: 16,
      defaultBg:
        'linear-gradient(91deg, rgba(218, 69, 143, 0.40) -6%, rgba(218, 52, 221, 0.40) 113.05%)',
      defaultBorderColor: 'transparent',
      defaultHoverBg:
        'linear-gradient(91deg, rgba(218, 69, 143, 0.40) -6%, rgba(218, 52, 221, 0.40) 113.05%)',
      defaultHoverBorderColor: 'transparent',
      defaultActiveBorderColor: 'transparent',
      defaultActiveBg: 'transparent',
    },
    Typography: {
      fontFamily: 'Infer',
      fontSize: 16,
    },
    Input: {
      borderRadius: 4,
      colorBgContainer: 'transparent',
      paddingBlock: 10,
      fontSize: 16,
      colorBgBase: 'white',
      colorTextPlaceholder: '#89888B',
      colorBorder: '#89888B',
      // prevent active, hover, color
      activeBorderColor: '#89888B',
      activeShadow: 'none',
      hoverBorderColor: '#89888B',
      paddingInline: 10,
      lineHeight: 1.375,
      colorTextQuaternary: 'white',
    },
    Result: {
      colorTextDescription: 'white',
    },
    Select: {
      colorBgContainer: 'transparent',
      borderRadius: 4,
      activeOutlineColor: 'transparent',
      selectorBg: 'transparent',
      optionSelectedBg: 'transparent',
      borderRadiusLG: 4,
      colorBorder: '#3A3841',
      colorTextPlaceholder: '#89888B',
      fontSize: 16,
      colorBgElevated: 'rgba(58, 56, 65, 1)',
    },
    Slider: {
      railBg: '#3A3841',
      railHoverBg: '#3A3841',
      colorTextDescription: '#D6D6D6',
    },
    Tooltip: {
      colorBgMask:
        'linear-gradient(91deg, #da41a2 24.03%, #da37ce 83.19%) !important',
      colorBgSpotlight:
        'linear-gradient(91deg, rgba(218, 69, 143, 0.00) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0.00) 102.8%)',
    },
    Card: {
      colorBgContainer: 'rgba(58, 56, 65, 0.60)',
      colorBorderSecondary: 'rgba(58, 56, 65, 0.60)',
      padding: 16,
    },
    Skeleton: {
      gradientToColor: 'rgba(0, 0, 0, 0.06)',
      gradientFromColor: '#89888B',
    },
  },
}
