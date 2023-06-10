import ThemeConstants from './constants'
import { pxToRem } from './helpers'

const {
  htmlFontSize,
  fontFamily,
  fontSize,
  fontWeightLight, //300
  fontWeightRegular, //400
  fontWeightMedium, //500
  fontWeightSemiBold, //600
  fontWeightBold, //700
} = ThemeConstants

const typography: any = {
  htmlFontSize,
  fontFamily,
  fontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightSemiBold,
  fontWeightBold,
  h1: {
    fontWeight: `${fontWeightBold} !important`,
    fontSize: `${pxToRem(37.8)} !important`,
    lineHeight: '45.36px !important',
    textTransform: 'none',

  },
  h2: {
    fontWeight: `${fontWeightBold} !important`,
    fontSize: `${pxToRem(29.4)} !important`,
    lineHeight: '35.28px !important',
    textTransform: 'none !important',
  },
  h3: {
    fontWeight: `${fontWeightMedium} !important`,
    fontSize: `${pxToRem(25.2)} !important`,
    lineHeight: '30.24px !important',
    textTransform: 'none !important',
  },
  h4: {
    fontWeight: `${fontWeightRegular} !important`,
    fontSize: `${pxToRem(21)} !important`,
    lineHeight: '25.2px !important',
    textTransform: 'none !important',

  },
  h5: {
    fontWeight: `${fontWeightRegular} !important`,
    fontSize: `${pxToRem(18.9)} !important`,
    lineHeight: '22.68px !important',
    textTransform: 'none !important',
  },
  h6: {
    fontWeight: `${fontWeightMedium} !important`,
    fontSize: `${pxToRem(16.74)} !important`,
    lineHeight: '20.09px !important',
    textTransform: 'none !important',
  },

  subtitle1: {
    fontWeight: `${fontWeightRegular} !important`,
    fontSize: `${pxToRem(15.69)} !important`,
    lineHeight: '18.83px !important',
    textTransform: 'none !important',
  },
  subtitle2: {
    fontWeight: `${fontWeightMedium} !important`,
    fontSize: `${pxToRem(12.6)} !important`,
    lineHeight: '15.12px !important',
    textTransform: 'none !important',

  },
  body1: {
    fontWeight: `${fontWeightLight} !important`,
    fontSize: `${pxToRem(14.7)} !important`,
    lineHeight: '17.64px !important',
    textTransform: 'none !important',
  },
  body2: {
    fontWeight: `${fontWeightLight} !important`,
    fontSize: `${pxToRem(13.78)} !important`,
    lineHeight: '16.54px !important',
    textTransform: 'none !important',
  },
  button: {
    fontWeight: `${fontWeightMedium} !important`,
    fontSize: `${pxToRem(15.75)} !important`,
    lineHeight: '18.9px !important',
    textTransform: 'uppercase !important',
  },
  caption: {
    fontWeight: `${fontWeightRegular} !important`,
    fontSize: `${pxToRem(12.6)} !important`,
    lineHeight: '15.12px !important',
    textTransform: 'none !important',
  },
  overline: {
    fontWeight: `${fontWeightMedium} !important`,
    fontSize: `${pxToRem(10.5)} !important`,
    lineHeight: '12.6px !important',
    textTransform: 'none !important',
  },
}

export default typography
