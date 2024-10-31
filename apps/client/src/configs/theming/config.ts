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
      defaultBg: 'transparent',
      defaultBorderColor: 'transparent',
      defaultHoverBg: 'transparent',
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
      fontSize: 12,
      colorBgBase: 'white',
      colorTextPlaceholder: '#89888B',
    },
    Result: {
      colorTextDescription: 'white',
    },
    Select: {
      colorBgContainer: 'transparent',
      borderRadius: 4,
      activeOutlineColor: 'transparent',
      selectorBg: '#89888B',
      optionSelectedBg: '#89888B',
      borderRadiusLG: 4,
    },
  },
}
