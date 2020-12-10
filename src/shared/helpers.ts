export const pxToRem = (value: number): string => {
  return `${value / 16}rem`;
};

export const handleClickOutside = (
  e: MouseEvent,
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  if (ref.current && !ref.current.contains(e.target as Node)) {
    callback();
  }
};
