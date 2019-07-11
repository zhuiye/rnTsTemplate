export const createRandColor = () => {
  const a = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  const c = Math.ceil(Math.random() * 255);

  return `rgb(${a},${b},${c})`;
};
