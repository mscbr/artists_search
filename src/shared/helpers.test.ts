import { pxToRem } from './helpers';

test('pxToRem', () => {
  expect(pxToRem(12)).toBe('0.75rem');
  expect(pxToRem(18)).toBe('1.125rem');
});
