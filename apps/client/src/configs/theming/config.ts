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
    Typography: {
      fontFamily: 'Infer',
    },
  },
}
