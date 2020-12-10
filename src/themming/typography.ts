import { pxToRem } from 'shared/helpers';

const typography = {
  fontFamily: {
    hind: 'Hind, sans-serif',
    playfairDisplay: 'Playfair Display, serif'
  },
  fontWeight: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    black: '900'
  },
  fontSize: {
    18: pxToRem(18),
    16: pxToRem(16),
    14: pxToRem(14),
    12: pxToRem(12),
    22: pxToRem(22),
    28: pxToRem(28)
  },
  letterSpacing: {
    1: pxToRem(1),
    0.7: pxToRem(0.7)
  }
};
export default typography;
